import React from 'react';
import crypto from '../images/cryptosc01.png';
import budget from '../images/btsc01-1.png';
import pwgen from '../images/pwsc01.png';
import fitness from '../images/fitsc1-1.png';

export default function Portfolio() {
  return (
  <div className = "container">
      <div className="text-center">
        <h1>Portfolio Page</h1>
      <img className="img-fluid port=image"src={crypto} alt="CryptoCompare"></img>
      <a href="https://github.com/lsoth/crypto-compare">Crypto Compare</a>
      <p>This application allows users to compare several world standard currencies to thousands of cryptocurrencies</p>
      <img className="img-fluid port=image"src={budget} alt="Budget Tracker"></img>
      <a href="https://github.com/lsoth/budget-tracker">Budget Tracker</a>
      <p>This application allows users to track purchases on or offline as a PWA</p>
      <img className="img-fluid port=image"src={pwgen} alt="Password Generator"></img>
      <a href="https://github.com/lsoth/03pwgen">Password Generator</a>
      <p>This generates secure passwords given different user defined parameters</p>
      <img className="img-fluid port=image"src={fitness} alt="Fitness Tracker"></img>
      <a href="https://github.com/lsoth/workouttracker">Fitness Tracker</a>
      <p>This tracks workouts and can log them on mongo atlas.</p>
      </div>
  </div>
  );
}