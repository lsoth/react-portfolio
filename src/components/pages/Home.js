import React from 'react';
import headshot from '../images/headshot.jpeg'


export default function Home() {
  return (
    <div className= "container">
      <div className="text-center">
      <h1>About Me</h1>
      <img src={headshot} className="img-fluid profile-pic" alt="Profile Pic"></img>
      </div>
      <p>
      Hi, my name Leone Soth, and I am an ambitious new web developer and software engineer. I previously graduated from the University of Washington in 2018, with my B.S. in Biology:Physiology. I worked for two years at Bloodworks Northwest doing phlebotomy, to earn clinical hours to apply for physician assistant school. This past year COVID has changed a lot of things, and I have decided to pursue a new passion in coding! I hope to be able to apply my new skills to help develop health care applications and increase the accessibility of web based applications.
      </p>
    </div>
  );
}
