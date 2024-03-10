import React from 'react';

const Footer = () => {
    const footerStyle = {
        fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive",
    };

    const contactInfoStyle = {
        fontFamily: "'Rajdhani', sans-serif",
    };

    return (
        <footer className="container-fluid" style={footerStyle}>
            <div className="container">
                <div className="row justify-content-between mt-5">
                    <div className="col-md-3 mt-md-5">
                        <div className="mb-5 text-center">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="row justify-content-md-start justify-content-center ">
                            <div className="col-1 ">
                                <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-8" style={contactInfoStyle}>
                                <div className="float-start">
                                    <h4 className="justify-content-start">0548969970</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-md-start justify-content-center ">
                            <div className="col-1 ">
                                <i className="fa fa-envelope fa-1x" aria-hidden="true"></i>
                            </div>
                            <div className="col-8" style={contactInfoStyle}>
                                <div className="float-start">
                                    <h4>algodinger@gmail.com</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-md-start justify-content-center ">
                            <div className="col-1">
                                <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-8" style={contactInfoStyle}>
                                <div className="float-start">
                                    <h4>Petah-Tikva</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-3 justify-content-center'>
                        <div className='justify-content-center text-center'>
                            <img src="images\Free_Sample_By_Wix (1).jpg" alt="" />
                        </div>

                    </div>

                    <div className="justify-content-between col-md-3 row justify-content-center mt-md-5">
                        <div className="col-12 mb-4 text-center">
                            <h3 >Follow US</h3>
                        </div>

                        <div className="col-2 text-center">
                            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-2 text-center">
                            <a href="https://twitter.com/" target="_blank"> <i className="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-2 text-center">
                            <a href="https://instagram.com/" target="_blank"> <i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>

                <div style={{ height: '40px' }}></div>
            </div>
        </footer>
    );
};

export default Footer;