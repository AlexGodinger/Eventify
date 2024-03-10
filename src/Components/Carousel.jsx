import React from 'react';
import '../Style/Style.css'



const Carousel = () => {
  return (
    <div className="strip container-fluid p-0 mt-3">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner" style={{ fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive", fontSize: '1.5em', fontWeight: 400 }}>
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="d i1" >
              {/* Your content for slide 1 goes here */}
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className=' fw-bolder' >Chic Event Seating</h5>
              <p>Elevate occasions with stylish, comfortable seating.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="d i2">
              {/* Your content for slide 2 goes here */}
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className=' fw-bolder'>Open-Air Seating</h5>
              <p>Create unforgettable moments with nature-inspired seating arrangements.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="d i3">
              {/* Your content for slide 3 goes here */}
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className=' fw-bolder'>Beachfront Wedding Production</h5>
              <p>Say 'I do' with the sound of waves as your backdrop.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="d i4">
              {/* Your content for slide 4 goes here */}
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className=' fw-bolder'>Classic Wedding Production</h5>
              <p>Elegance and sophistication for your timeless celebration.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
