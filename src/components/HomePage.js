import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class HomePage extends Component {
    render() {
      return (
        <div className="home-container">
            <div className="logo-background">
                <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
            </div>
            <div className="know-ballot">
                <Link to="/quiz">Get Started!</Link>
            </div>
            <iframe width="560" height="450"
                src="https://www.youtube.com/embed/x6BGVKFOrMM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <iframe width="560" height="450"
                src="https://www.youtube.com/embed/8oqJiNzJQ_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <div className="know-ballot">
                <p>Know your ballot.</p>
            </div>
            <div className="home-body">
                <p>Enter the voting booth with more knowledge than ever with LumiVote, a voter education tool. LumiVote helps you learn about the candidates on your ballot through easy-to-use candidate pages and quizzes. Mark the candidates you’ve learned about and plan to vote for, and save, email or print your data to keep track of it.</p>  
            </div> 
        </div>
      );
    }
  }