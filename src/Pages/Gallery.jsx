import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header h1='Gallery' />

      <div className="strip container-fluid p-0 mt-3">
        <iframe width="100%" height="500"
          src="https://www.youtube.com/embed/ji1zcXCTbJE?si=wUHDbDydKByk8bDl&autoplay=1&mute=1"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>

      </div>

      <main className="container-fluid">
        <div className="container">
            <div><h2 style={{fontFamily: 'Anton, sans-serif', fontSize: '4em'}} className="mt-3 text-center fw-bolder">Our productions</h2></div>
            <div className="row justify-content-around text-center ">
                <div className="col-md-5 big" data-aos="fade-right">
                    <h2>Luxurious seating arrangements</h2>
                    <img src="images/gallery 1.jpg" className="aos-animate justify-content-center img-fluid" alt="set"/>
                </div>

                <div className="col-md-5 big" data-aos="fade-left">
                    <h2>Nature wedding</h2>
                    <img src="images/gallery 2.jpg" alt="nature" height="358" className="aos-animate justify-content-center img-fluid"/>
                </div>

            </div>

            <div className="row justify-content-around text-center">
                <div className="col-md-4 big" data-aos="fade-right">
                    <h2>Flowers' arrangement</h2>
                    <img src="images/gallery 6.jpg" alt="flowers" className="aos-animate justify-content-center img-fluid"/>
                </div>


                <div className="col-md-4 big" data-aos="fade-down">
                    <h2>Amazing seating designs</h2>
                    <img src="images/weddingS.jpg" alt="tables" className="aos-animate justify-content-center img-fluid"/>
                </div>

                <div className="col-md-4 big" data-aos="fade-left">
                    <h2>Exclusive wedding</h2>
                    <img src="images/gallery 5.jpg" alt="exclusive" className="aos-animate justify-content-center img-fluid"/>
                </div>

            </div>

            <div className="row justify-content-around text-center">
                <div className="col-md-3 big" data-aos="fade-right">
                    <h2>Special events</h2>
                    <img src="images/gallery 3.jpg" alt="special" className="aos-animate justify-content-center img-fluid"/>
                </div>


                <div className="col-md-3 big" data-aos="fade-down">
                    <h2>Unique wedding</h2>
                    <img src="images/gallery 7.jpg" alt="unique" className="aos-animate justify-content-center img-fluid"/>
                </div>

                <div className="col-md-3 big" data-aos="fade-down">
                    <h2>Sunset wedding</h2>
                    <img src="images/gallery 8.jpg" alt="sunset" className="aos-animate justify-content-center img-fluid"/>
                </div>


                <div className="col-md-3 big" data-aos="fade-left">
                    <h2>Beach seating</h2>
                    <img src="images/seaS.jpg" alt="beach" className="aos-animate justify-content-center img-fluid"/>
                </div>

                <div className="row justify-content-around text-center">
                    <div className="col-md-6 big" data-aos="fade-right">
                        <h2>A little taste</h2>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/XVwHLwZrIYk?si=kRC6g8tHi4qt-m-r&amp;controls=0&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
    
                    <div className="col-md-6 big" data-aos="fade-left">
                        <h2>And more</h2>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/-g7tuPXRenk?si=xB0ACbPzWwP6hlJ6&amp;controls=0&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    </main>


      <Section />
      <Footer />
    </div>
  );
}

export default Gallery;
