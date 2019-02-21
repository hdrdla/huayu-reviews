import React, { Component } from 'react';
import './App.css';
import School from "./School";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        appView: true,
        schools: [] 
      };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/v1/schools/")
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(json => {
        this.setState ({
          schools: json
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeView(i) {
    console.log(i);
    if (this.state.appView === true) { 
      this.setState ({
        appView: false
      });
    } else {
        this.setState ({
          appView: true
      });
    }
  }  
  
  render() {
    return (
      <div className="App">

        <div>
  {/*}
          <header className="hero-image">
            <div class="hero-text">
              <h1>Huayu<br>
                </br>       Reviews</h1>
                <p>Explore Taiwanese schools related to the Huayu Enrichment Scholarship. Help others and leave a review of your experience!</p>
            </div>
          </header>

          <div id="checklist">
            <div id="Location">
                <h3>Location</h3>
                  <input type="checkbox" />
                  <label class="container">Northern</label> <br />
                  <input type="checkbox" />
                  <label class="container">Western</label> <br />
                  <input type="checkbox" />
                  <label class="container">Southern</label> <br />
                  <input type="checkbox" />
                  <label class="container">Eastern</label> <br />
            </div>

            <div id="Population">
              <h3>Population</h3>
                <input type="checkbox" />
                <label class="container"> &lt; 500,000 </label><br />
                <input type="checkbox" />
                <label class="container">500,000 - 2 million</label><br />
                <input type="checkbox" />
                <label class="container"> &gt; 2 million</label><br />
            </div>

            <div id="City">
              <h3>City</h3>
                <input type="checkbox" />
                <label class="container">Taipei</label> <br />
                <input type="checkbox"  />
                <label class="container">Taichung</label><br />
                <input type="checkbox" />
                <label class="container">Kaohsiung</label><br />
                <input type="checkbox" />
                <label class="container">Taoyuan</label><br />
            </div>
    
          
          </div>

      */}

  </div>

          <div id = "gallery" className = {this.state.appView ? null : "hidden"}>
            {this.state.schools.map((obj, i) => 
              <div key={i}>
                <div className = "UniName" onClick={() => this.changeView(i) }>{obj['university']}</div>
                {obj['center']}  
              </div>     
            )}  
          </div>

          <div id="specificschool" className = {this.state.appView ? "hidden" : null}>
            <School backToList={() => this.changeView()}/>
          </div>  

          {/*<div id="fullmap">
            <iframe src="https://www.google.com/maps/d/embed?mid=1H2WUKmQ8z5mXt6oaqKKXFFEvvH-6lybo&hl=en" width="380" height="440" style="border:0" class = "bigmap"></iframe>
            Explore schools across
            </div>*/}
    
      </div>
    );
  }
}

export default App;
