import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../Images/giphy-morbius.gif'
import img2 from '../Images/giphy-the bad guys.gif'
import img3 from '../Images/giphy-the lost city.gif'
import img4 from '../Images/The Bad Guys-2.jpg'
import img5 from '../Images/The Lost City.jpg'
import img6 from '../Images/Morbius.jpg'
import '../Css/Movies.css'

class Movies extends Component {


  render() {
    return (
      <div className='movies-body'>
        <div className= 'carousel-container'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Morbius</h1>
                <p>Action,Adventure,Drama</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>THE BAD GUYS</h3>
                <p>Animation,Adventure,Comedy</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                height='500px' width='100%'
                src={img3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>THE LOST CITY</h3>
                <p>Action,Adventure,Comedy</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br/>
        <br/>
        <div className="horizontal-line">
        <hr/>
        </div>
        <div>
          <h1>Now Playing ...</h1>
        </div>
        <div className= 'movies'>
          <ul className= 'movies-list'>
            <li className= 'first-movie'>
              <img src= {img4} height= '300' width= '300'  />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {img5} height= '300' width= '300' />
              <h2>The Lost City</h2>
              <h5>Action,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {img6} height= '300' width= '300' />
              <h2>Morbius</h2>
              <h5>Action,Adventure,Drama</h5>
            </li>
            <li>
              <img src= {img4} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {img4} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
            <li>
              <img src= {img4} height= '300' width= '300' />
              <h2>The Bad Guys</h2>
              <h5>Animation,Adventure,Comedy</h5>
            </li>
          </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
export default Movies