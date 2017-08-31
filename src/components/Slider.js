import React, {Component} from 'react';
import ReactSlider from 'react-slick';
import retroflickr from '../images/retroflickr.png'
import blackjack from '../images/blackjack.png'
import wrkflow from '../images/wrkflow.png'
import './Slider.css'
import '../App';

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  );
}


export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var settings = {
      dots: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      swipeToSlide: true,
      variableWidth: true,
    }

    return (
      <div>
        <ReactSlider {...settings}>

          <div className="slider-section">
            <div className="centered col-medium-6"><img src={retroflickr} alt="retro-flickr-project"/></div>
            <div className="col-medium-6">
              <p>PROJECTS</p>
              <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
              nulla pariatur?
              </p>
            </div>
          </div>

        </ReactSlider>
      </div>
    );
  }
}
