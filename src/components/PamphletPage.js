import React, { Component } from 'react';
import CandidatePreview from './CandidatePreview';
import candidates from '../data/candidates';
import { Link } from "react-router-dom";

export default class PamphletPage extends Component {
  render() {
    return (
      <div className="pamphlet">
        <div className="logo-background">
          <img className="img-logo" src={`../../../assets/images/logo2.jpg`}/>
        </div>
        <div className="candidates-selector">
          {candidates.map(candidateData => <CandidatePreview key={candidateData.id} {...candidateData} />)}
        </div>
      </div>
    );
  }
}