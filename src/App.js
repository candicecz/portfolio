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
      <header>
        <div className="header-image">
          <div className="name">
            <p className="candice">Candice Czech</p>
            <p className="job">full-stack developer</p>
            <div className="icon-list">
              <div className="github-icon col-medium-6 col-small-12">  <a href="https://github.com/candicecz"><p className="icons">Github</p></a></div>
              <div className="github-icon col-medium-6 col-small-12"><a href="https://www.linkedin.com/in/candiceczech/"><p className="icons">LinkedIn</p></a></div>
            </div>
          </div>
        </div>
      </header>

      <div className="section-one">
        <p className="headline">ABOUT</p>
        <p className="about-me">
          Hi. I'm Candice. For the past three years, I've worked in design which hasSed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
           magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </p>
      </div>
      <div className="slider-section">
        <div className="centered headline col-medium-12">PROJECTS</div>
          <div className="proj-image col-medium-6">
            <a href="http://wrkflow.herokuapp.com/"><img className="project-icon" src={wrkflow} alt="retro-flickr-project"/></a>
          </div>
          <div className="col-medium-6 project-desc">
            <p className="headline">WRKFlow</p>
            <p className="description">An app that helps users organize projects. They can assign users to tasks, see who's on a task, message fellow team members and track progress.</p>
            <p className="description">For this project I used: React, Node JS, MySQL, Material-UI</p>
            <div className="view-icon col-medium-6 col-small-12">  <a href="http://wrkflow.herokuapp.com/"><p className="view-type">View Project</p></a></div>
          </div>
        <div className="proj-image col-medium-6">
          <a href="https://candicecz.github.io/retro-flickr/"><img className="project-icon" src={retroflickr} alt="retro-flickr-project"/></a>
        </div>
        <div className="col-medium-6 project-desc">
          <p className="headline">RetroFlickr</p>
          <p className="description">An app that uses the FLICKR API to retrieve photos and display them with a vintage filter.</p>
          <p className="description">For this project I used: Vanilla Javascript, FLICKR API</p>
          <div className="view-icon col-medium-6 col-small-12">  <a href="https://github.com/candicecz"><p className="view-type">View Project</p></a></div>
        </div>
        <div className="proj-image col-medium-6">
          <a href="https://candicecz.github.io/vanilla-blackjack/"><img className="project-icon" src={blackjack} alt="retro-flickr-project"/></a>
        </div>
        <div className="col-medium-6 project-desc">
          <p className="headline">BlackJack</p>
          <p className="description">BlackJack Game where you can play against the computer using a randomized deck API</p>
          <p className="description">For this project I used: Vanilla Javascript, Deck Of Cards API</p>
          <div className="view-icon col-medium-6 col-small-12">  <a href="https://candicecz.github.io/vanilla-blackjack/"><p className="view-type">View Project</p></a></div>
        </div>
      </div>


      <div className="section-three">
        <p className="headline">CONTACT</p>
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
