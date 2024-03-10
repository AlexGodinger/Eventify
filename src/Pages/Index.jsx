import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Section from '../Components/Section';
import Carousel from '../Components/Carousel';


const Index = () => {
  const headingStyle = {
    fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive",
  };

  return (
    <>
      <Header h1='Index' />
      <div className="strip">
        <Carousel />
      </div>

      <main className="dif container-fluid p-0 ">
        <div className="container ">
          <div style={{ height: '20px' }}></div>
          <div>
            <h2 className="display-2 text text-center" style={headingStyle}>Who we are</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="lead shadow p-2">
                Welcome to Eventify, the gateway to unforgettable events where dreams come to life, and every detail tells a story. At our event design studio, we believe in transforming your special moments into extraordinary experiences. From intimate gatherings to grand celebrations, Eventify is dedicated to crafting events that reflect your unique style and personality. Our team of passionate designers and planners is committed to bringing creativity and innovation to every project, ensuring that each event is a true reflection of your vision. With meticulous attention to detail and a flair for the extraordinary, Eventify turns your dreams into reality.
              </p>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <img src='images\sp.jpg' width={500} alt="flowers" />
            </div>
          </div>

          <div className="col-lg-5 d-block d-lg-none">
              <img className="border-2 border border-dark-subtle" src="images\sp.jpg" width="100%" alt="" />
            </div>

          <div className="row justify-content-center mt-3 pb-3">
            <div className="col-lg-5 d-none d-lg-block">
              <img className="border-2 border border-dark-subtle" src="images\flowers.jpg" width={500} alt="sea" />
            </div>

            <div className="col-lg-5">
              <p className="lead shadow p-2">
                Discover a world of possibilities with Eventify as we collaborate to design an event that is uniquely yours. Our expertise extends beyond traditional boundaries, offering a fresh and modern approach to event planning and design. Whether you're envisioning a romantic wedding, a corporate gala, or a milestone celebration, Eventify's team is dedicated to making your event a seamless and stress-free experience. Let us handle the logistics while you savor every moment of your special day. With our passion for perfection and a commitment to excellence, Eventify invites you to embark on a journey – where every event is a masterpiece, and every memory is cherished forever.
              </p>
            </div>
            <div className="col-lg-5 d-block d-lg-none">
              <img className="border-2 border border-dark-subtle" src="images/flowers.jpg" width="100%" alt="" />
            </div>
          </div>
        </div>
      </main>

      <Section />
      <Footer />
    </>
  );
};

export default Index;
