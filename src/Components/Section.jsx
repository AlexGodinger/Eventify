import React from 'react';

const Section = () => {
  return (
    <section className="container-fluid">
      <div className="container">
        <div className="justify-content-center border-bottom border-black text-center mx-auto mb-md-0 mb-3 row">
          <div className="w-75 my-5">
            <h2 style={{ textAlign: 'center', fontFamily: 'Anton, sans-serif' }}>Leave details and make a dream come true!</h2>
          </div>
          <div className="w-75">
            <form className="row" action="">
              <div className="col-md-3 mb-md-5 mb-3"><input className="rounded-5 input-group-text border border-2 border-black w-100" type="text" placeholder="Name" required /></div>
              <div className="col-md-3 mb-md-5 mb-3"><input className="rounded-5 input-group-text border border-2 border-black w-100" type="email" placeholder="Email" required /></div>
              <div className="col-md-3 mb-md-5 mb-3"><input className="rounded-5 input-group-text border border-2 border-black w-100" type="tel" placeholder="Phone" required /></div>
              <div className="col-md-3 mb-md-5 mb-3"><button type='submit' className="btn my-btn rounded-5" style={{ backgroundColor: 'lightsalmon' }}>For Perfect Event</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
