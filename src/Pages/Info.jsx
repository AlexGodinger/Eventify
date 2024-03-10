import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import '../Style/Style.css';

const Info = () => {
  return (
    <div>
      <Header h1='Info' />
      <div className="strip container-fluid IP p-0 mt-3">
        <h2 style={{ fontSize: '4em' }}>Info</h2>
      </div>

      <main style={{ backgroundColor: 'tan' }} className="container-fluid p-0">
        <div style={{ backgroundColor: 'bisque' }} className="container">
          <div className="row justify-content-center text-center ">
            <div style={{ height: '20px' }}></div>

            <div className="my-2">
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '3em', textShadow: '2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15)' }} className="fw-bolder">How it works</h2>
            </div>

            <div className="pic col-md-5 "></div>

            <div className="acor col-md-5 ">
              <div className="accordion accordion-flush rounded-5" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle">
                    <button className="accordion-button collapsed bg-black text-light rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <h4 className="text-center display-6 fs-5">How do I start planning my event with Eventify?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">To begin planning your event with Eventify, simply visit our website and click on the "Get Started" button. Follow the easy steps to create an account, and you'll be on your way to crafting a memorable event!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle ">
                    <button className="accordion-button collapsed bg-black text-light rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <h4 className="text-center fs-5 display-6">What types of events can I organize using Eventify?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">Eventify caters to a wide range of events, including weddings, corporate gatherings, birthdays, and more. Our platform is versatile, allowing you to customize and plan events of various sizes and themes.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle">
                    <button className="accordion-button collapsed bg-black text-light rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <h4 className="text-center display-6 fs-5">Can I collaborate with others while planning my event?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">Absolutely! Eventify offers collaboration features that enable seamless teamwork. Invite friends, family, or colleagues to join your planning process, share ideas, and contribute to the success of your event.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle">
                    <button className="accordion-button collapsed bg-black text-light rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFor" aria-expanded="false" aria-controls="flush-collapseFor">
                      <h4 className="text-center display-6 fs-5">How can Eventify help with budget management for my event?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseFor" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">Eventify provides budgeting tools to help you stay on track financially. Input your budget, track expenses, and receive real-time updates to ensure that your event stays within financial constraints without compromising on quality.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle">
                    <button className="accordion-button collapsed bg-black text-light rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      <h4 className="text-center fs-5 display-6">Are there customizable templates available for invitations and event details?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">Yes, Eventify offers a variety of customizable templates for invitations, RSVPs, and event details. Choose a template that suits your theme, and easily personalize it to reflect the unique style of your event.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header form-control rounded-2 bg-secondary-subtle ">
                    <button className="accordion-button collapsed bg-black text-light rounded-3 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                      <h4 className="fs-5 display-6 text-center">What support does Eventify provide during the actual event?</h4>
                    </button>
                  </h2>
                  <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <p className="lead">On the day of your event, Eventify continues to support you with features like guest check-ins, live updates, and an on-site coordinator app. Our goal is to ensure that everything runs smoothly, allowing you to enjoy the event stress-free.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: '20px' }}></div>
          </div>
        </div>
      </main>

      <Section />
      <Footer />
    </div>
  )
}

export default Info;
