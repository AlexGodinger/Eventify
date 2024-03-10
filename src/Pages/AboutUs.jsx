import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Section from '../Components/Section'
import '../Style/Style.css'

const AboutUs = () => {
  const headingStyle = {
    fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive",fontSize: "1.5em"
  };

  return (
    <div>
      <Header h1='About us' />

      <div className="AUP strip container-fluid my-3">
        <div className=" m-3">
          <h2 style={{ fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive", fontSize: "4em" }} >About us</h2>
        </div>
      </div>

      <main className=' container-fluid'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <p className='para fw-bolder' style= {headingStyle}>
                EVENTIFY is a premier event design business specializing in creating unique and memorable
                experiences, with a strong emphasis on weddings. Our dedicated team of creative professionals
                takes pride in tailoring each event to suit the individual preferences and desires of our
                clients. From conceptualization to execution, we bring forth cutting-edge designs and
                contemporary trends, ensuring that every event is a true reflection of personal style and
                sophistication.

                Founded in Insert year of establishment, Eventify has established itself as a trusted partner
                for those seeking exceptional event design services. Our commitment to excellence, attention to
                detail, and passion for crafting distinctive events set us apart in the industry. Whether it's a
                wedding, corporate gathering, or special celebration, Eventify is devoted to making every
                occasion extraordinary and uniquely tailored to our clients' visions.
              </p>
            </div>

            <div className="aboutPic col-md-5">

            </div>

            <div className="row text-center">
              <div>
                <h2 className='display-3 fw-bold nice border-bottom border-black'>Our team</h2>
              </div>

              <div className="team m-auto col-md-4">
                <div>
                  <img className='teamPhoto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_eJorGhb_L_f-BVXeQOL4P2QoopbrV7flA&usqp=CAU" alt="team" />
                </div>

                <div>
                  <h2 className='nice fw-bold'>Harvey Specter</h2>
                  <h3 className='nice'>Main designer</h3>
                  <p className='para fw-bolder lead' style= {headingStyle}>
                    Harvey Specter, the mastermind behind event design, orchestrates seamless and unforgettable experiences. With a keen eye for detail and a flair for creativity, he transforms ordinary events into extraordinary spectacles. As a consummate professional, Harvey not only envisions but meticulously executes his clients' dreams. From conceptualization to execution, he navigates the intricate world of event management with finesse. Harvey believes in the power of personalized touches, ensuring every detail resonates with his clients' visions. From elegant weddings to corporate galas, Harvey Specter crafts immersive experiences that leave a lasting impression. His mantra: "Exceed expectations, every time."
                  </p>
                </div>
              </div>

              <div className="m-auto team col-md-4 mt-1">
                <div>
                  <img className="teamPhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJutWKvAMDOec2JufQQ-FLl1V0utxzqdOpUA&usqp=CAU"
                    alt="team" title="Tommy Shelby" />
                </div>
                <div>
                  <h2 className="nice fw-bold">Tommy Shelby</h2>
                  <h3 className="nice">Our visionary</h3>
                  <p className="para fw-bolder lead" style= {headingStyle}>Tommy Shelby, the visionary force driving creative innovation in the digital realm, reigns supreme as the mastermind behind cutting-edge web design. With an unmatched ability to blend functionality and aesthetics, Tommy crafts online experiences that captivate and engage. As the chief architect of the digital frontier, he navigates the ever-evolving landscape with strategic brilliance. Tommy's design philosophy extends beyond aesthetics; he understands the pulse of user experience, seamlessly blending form and function. From sleek e-commerce platforms to immersive interactive interfaces, Tommy Shelby transforms ideas into digital masterpieces. His mantra: "Innovation is the heartbeat of the digital age, and every pixel tells a story."</p>
                </div>
              </div>



            </div>

          </div>
        </div>

      </main>

      <Section />
      <Footer />
    </div>
  )
}

export default AboutUs