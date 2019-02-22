import React, { Component } from 'react';
import './School.css';
const URL = "https://api.openweathermap.org/data/2.5";
const KEY = "7a0d513132cd8c781cca0a8440eb61bb";


class School extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name_input: "",
        title_input: "",
        start_input: "",
        end_input: "",
        likes_input: "",
        dislikes_input: "",
        cityimp_input: "",
        overimp_input: "",
        school: "",
        weather: null,
        location: ""
      }
    } 

    componentDidMount() {
      this.setState ({
        school: this.props.school,
      });

     }

    componentWillReceiveProps() {
      console.log('asdf')
    }

    getWeather() {
      console.log("weathersuccess")
      this.setState({
      });
      let url = `${URL}/weather?q=${this.state.school.city}&APPID=${KEY}`;
      fetch (url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          weather: (json.main.temp - 273.15).toFixed(0) +"℃, " + json.weather[0].main,

        });
      })
      .catch(error => {
          console.log(error);
      })
    }

  /*
  updateInput(e) {
    e.preventDefault();
    this.setState({
      name_input: e.target.value,
      title_input: "",
      start_input: "",
      end_input: "",
      likes_input: "",
      dislikes_input: "",
      cityimp_input: "",
      overimp_input: ""
    });
  }

  componentDidMount() {
    fetch("/api/v1/schools/:id")
      //.then(res => res.json())
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        //console.log(res)
        return res.json();
      })
      .then(json => {
        // console.log(json)
        this.setState ({
          schools: json
        })
        // console.log(json);
      })
      .catch(error => {
        // upon failure, show error message
        console.log(error)
      })
      fetch("/api/v1/schools/:id/reviews")  
  }

  addReview(e) {
    e.preventDefault();
    // add review to database
    let newReview = {
      name_input: this.state.input,
      title_input: "",
      start_input: "",
      end_input: "",
      likes_input: "",
      dislikes_input: "",
      cityimp_input: "",
      overimp_input: ""
    }
  }  


    fetch("http://localhost:9000/api/v1/schools/reviews", {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo) 
    })
    .then (res => { 
      if (!res.ok) {
        throw Error(res.statusText);
      }
      this.setState ({
        tasks: [...this.state.tasks, newTodo]
      });
    })
    .catch(error => {
      console.log(error)
    });
  }

*/

  render() {
    return (
      <div id="School">
        <header className="School-header">
            Individual school page
        </header>

          <button onClick={this.props.backToList}> Back to all schools</button>   
          
          <div className="map">
          <iframe src= {this.state.school.map} ></iframe>
          </div>
          <div className="school-info">
            <h2>{this.state.school.university}</h2>
            <h4>{this.state.school.center}</h4>
            <h3>{this.state.school.city}</h3>
          </div>
          <div className="weather">
            <p onLoad={() => this.getWeather()}>The current weather in {this.state.school.city} is: {this.state.weather}.</p>
            <button onClick={() => this.getWeather()}>go!</button>
          </div>



      </div>
    );
  }
}

export default School;


{/*


        
*/}