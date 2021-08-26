import React from 'react';
import crypto from '../images/cryptosc01.png'
import budget from '../images/btsc01-1.png'

export default function Portfolio() {
  return (
  <div className = "container">
      <div className="text-center">
        <h1>Portfolio Page</h1>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={crypto} alt="Crypto Compare"></img> 
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={budget} alt="Budget Tracker"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="3 slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="4 slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="5 slide"></img>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  </div>
  );
}