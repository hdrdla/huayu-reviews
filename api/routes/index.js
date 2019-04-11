var express = require('express');
var router = express.Router();
var db = require('./helper');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/api/v1/schools', function(req, res, next) {
	let locParam = req.query.location;
	let cityParam = req.query.city;
	let popParam = req.query.population;
	let popValue = [];

	if (!locParam && !popParam && !cityParam) {
		db('SELECT * FROM schools ORDER BY id ASC;').then((results) => {
			if (results.error) {
				res.status(500).send(results.error);
			}
			console.log('results: ' + JSON.stringify(results.data));
			res.send(results.data);
		});
	} else if (locParam && popParam && cityParam) {
		db(
			`SELECT s.id, university, center, location, s.city, population FROM schools s INNER JOIN cities c  ON s.city=c.city WHERE s.location="${locParam}" AND s.city="${cityParam}" AND  c.population=${popParam};`
		).then((results) => {
			if (results.error) {
				res.status(500).send(results.error);
			}
			console.log('results: ' + JSON.stringify(results.data));
			res.send(results.data);
		});
	} else {
		//else if (!locParam || !popParam || !cityParam)
		let baseQuery =
			'SELECT s.id, university, center, location, s.city, population FROM schools s INNER JOIN cities c  ON s.city=c.city WHERE ';
		let fullQuery = baseQuery;
		let containOtherQuery = false;

		if (locParam) {
			locParam = locParam.split(',').map((e) => `s.location="${e}"`).join(' OR ');
			fullQuery += `${locParam}`;
			containOtherQuery = true;
		}
		if (cityParam) {
			cityParam = cityParam.split(',').map((e) => `s.city="${e}"`).join(' OR ');
			if (containOtherQuery) {
				fullQuery += `AND ${cityParam}`;
			} else {
				fullQuery += `${cityParam}`;
				containOtherQuery = true;
			}
		}
		if (popParam && containOtherQuery) {
			popParam.split(',').map((e) => {
				if (e === '_5') {
					popValue.push('c.population < 500000');
					console.log(popValue);
				}
				if (e === '5_20') {
					popValue.push('c.population > 500000 AND c.population < 2000000');
				}
				if (e === '20_') {
					popValue.push('c.population > 2000000');
				}
			});
			popValue = popValue.join(' OR ');
			fullQuery += `AND ${popValue}`;
		}
		if (popParam && !containOtherQuery) {
			popParam.split(',').map((e) => {
				if (e === '_5') {
					popValue.push('c.population < 500000');
				}
				if (e === '5_20') {
					popValue.push('c.population > 500000 AND c.population < 2000000');
				}
				if (e === '20_') {
					popValue.push('c.population > 2000000');
				}
			});
			console.log(popValue);
			popValue = popValue.join(' OR ');
			fullQuery += `${popValue}`;
		}
		db(`${fullQuery};`).then((results) => {
			if (results.error) {
				res.status(500).send(results.error);
			}
			console.log('results: ' + JSON.stringify(results.data));
			res.send(results.data);
		});
	}
});

router.get('/api/v1/schools/:id', (req, res, next) => {
	db('SELECT * FROM schools WHERE schools.id =' + `${req.params.id}`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.get('/api/v1/schools/:id/reviews', (req, res, next) => {
	db('SELECT * FROM reviews WHERE school_id =' + `${req.params.id}`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.get('/api/v1/reviews', (req, res, next) => {
	//  /schools/reviews will not work because it confuses it with schools/:id... things reviews is the ID
	db('SELECT * FROM reviews ORDER BY id ASC;').then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results: ' + JSON.stringify(results.data));
		res.send(results.data);
	});
});

router.post('/api/v1/schools/reviews', (req, res, next) => {
	db(`INSERT INTO reviews (user_id, school_id, title, start_date, 
    end_date, likes, dislikes, city_impression, general_review) VALUES (${req.body.user_id}, ${req.body
		.school_id}, '${req.body.title}', '${req.body.start_date}', '${req.body.end_date}', '${req.body.likes}', '${req
		.body.dislikes}', '${req.body.city_impression}', '${req.body.general_review}')`).then((results) => {
		if (results.error) {
			res.status(500).send(results.error);
		}
		console.log('results are', results.data);
		res.send('Successfully created');
	});
});

module.exports = router;
