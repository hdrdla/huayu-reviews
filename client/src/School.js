import React, { Component } from 'react';
import './School.css';

const KEY = "7a0d513132cd8c781cca0a8440eb61bb";
const URL = "https://api.openweathermap.org/data/2.5";

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
        overimp_input: ""
      }
    } 

    componentDidMount() {
      console.log('oy')
    }

    componentWillReceiveProps() {
      console.log('asdf')
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
            <img src = '${   }'></img>
          </div>
          <div className="school-info">
            <h2>   </h2>
            <h4>   </h4>


          </div>


      </div>
    );
  }
}

export default School;
