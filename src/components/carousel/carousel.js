import './photoSlider.css'
const image1 = require('./testimonialImages/fill.jpg')

const PhotoSlider = () => {

  return (
    <div className="container">
      <div className="row">
        <h1>Testimonials</h1>
        <div id="slider">
          <div className="button-left slider-button">
            <span> ( </span>
          </div>
          <div className="button-right slider-button">
            <span> ) </span>
          </div>
          <div className="slide slide1 showing">
            <div className="slide-text">
              This is sample testimonial for the carousel slider used for expressing likes of the product delivered
            </div>
            <div className="slide-testimonial">
              <div className="slide-img">
                <img alt="testimonial" src={image1} />
              </div>
              <div className="slide-person">
                <p>Jane Doe</p>
                <p>CEO Doe Enterprise inc.</p>
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="slide-text">
              This is sample testimonial for the carousel slider used for expressing likes of the product delivered
            </div>
            <div className="slide-testimonial">
              <div className="slide-img">
                <img alt="testimonial" src={image1} />
              </div>
              <div className="slide-person">
                <p>Jane Smith</p>
                <p>CEO Smithsonian</p>
              </div>
            </div>
          </div>
          <div class="slide slide3">
            <div className="slide-text">
              This is sample testimonial for the carousel slider used for expressing likes of the product delivered
            </div>
            <div className="slide-testimonial">
              <div className="slide-img">
                <img alt="testimonial" src={image1} />
              </div>
              <div className="slide-person">
                <p>Jane Schmidt</p>
                <p>CEO holy Schmidt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoSlider
