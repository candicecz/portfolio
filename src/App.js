import React, { Component } from 'react';
import logo from './logo.svg';
import retroflickr from './images/retroflickr.png'
import blackjack from './images/blackjack.png'
import wrkflow from './images/wrkflow.png'
import githubIcon from './images/githubIcon.png'
import Slider from './components/Slider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-image"></div>
          <div className="name">
            <p className="candice">Candice Czech</p>
            <p className="job">full-stack developer</p>
            <div className="icon-list">
              <a className="github-icon col-medium-6 col-small-12" href="https://github.com/candicecz"><p className="icons">Github</p></a>
              <a className="github-icon col-medium-6 col-small-12" href="https://www.linkedin.com/in/candiceczech/"><p className="icons">LinkedIn</p></a>
            </div>
          </div>

      <div className="section-one">
        <h3><p className="headline">ABOUT</p></h3>
        <p className="about-me">
          Hi. I'm Candice. I write code, I sleep code, I eat code, I drink diet code. For the last three years I've worked as a graphic designer while learning to code as a passion project. Gradually,
          I became more obsessed with learning JavaScript and eventually enrolled at DecodeMTL where I learned backend and frontend Javascript. I've worked with Vanilla JavaScript, React, jQuery, and HTML/CSS on the front end and
          Node.JS, mySQL, RESTful APIs and Express on the backend. The things that attracted me to coding in the first place still remain my raison d'être - a deep love for strong logic and clean code as I strive to continually improve both of these skills in my practice.
        </p>
      </div>

      <div className="section-two">
          <h3 className="headline projects col-small-12">PROJECTS</h3>
          <div className="project-row">
            <div className="proj-image col-medium-6">
              <a href="http://wrkflow.herokuapp.com/"><img className="project-icon" src={wrkflow} alt="retro-flickr-project"/></a>
            </div>
            <div className="col-medium-6 project-desc">
              <p className="project-title">WRKFlow</p>
              <p className="description">An app that helps users organize projects. They can assign users to tasks, see who's on a task, message fellow team members and track progress.</p>
              <p className="description">For this project I used: React, Node JS, MySQL, Material-UI</p>
              <div className="view-icon col-medium-6 col-small-12">  <a href="http://wrkflow.herokuapp.com/"><p className="view-type">View Project</p></a></div>
            </div>
          </div>

          <div className="project-row">
            <div className="proj-image col-medium-6">
              <a href="https://candicecz.github.io/retro-flickr/"><img className="project-icon" src={retroflickr} alt="retro-flickr-project"/></a>
            </div>
            <div className="col-medium-6 project-desc">
              <p className="project-title">RetroFlickr</p>
              <p className="description">An app that uses the FLICKR API to retrieve photos and display them with a vintage filter.</p>
              <p className="description">For this project I used: Vanilla Javascript, FLICKR API</p>
              <div className="view-icon col-medium-6 col-small-12"><a href="https://candicecz.github.io/retro-flickr/"> <p className="view-type">View Project</p></a></div>
            </div>
          </div>

          <div className="project-row">
            <div className="proj-image col-medium-6">
              <a href="https://candicecz.github.io/vanilla-blackjack/"><img className="project-icon" src={blackjack} alt="retro-flickr-project"/></a>
            </div>
            <div className="col-medium-6 project-desc">
              <p className="project-title">BlackJack</p>
              <p className="description">BlackJack Game where you can play against the computer using a randomized deck API.</p>
              <p className="description">For this project I used: Vanilla Javascript, Deck Of Cards API.</p>
              <div className="view-icon col-medium-6 col-small-12"><a href="https://candicecz.github.io/vanilla-blackjack/"> <p className="view-type">View Project</p></a></div>
            </div>
          </div>
        </div>

      <div className="section-three">
        <h3><p className="headline">CONTACT</p></h3>
        <p className="contact-me">
          czech.candice@gmail.com
        </p>
      </div>
      </div>
    );
  }
}

export default App;
// <header>
//   <div>
//     <div className="name">Candice Czech</div>
//     <img src={portfoliopic} className="header-image" alt="portfolio-pic" />
//
//     </div>
// </header>
