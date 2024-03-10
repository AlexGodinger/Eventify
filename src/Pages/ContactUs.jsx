import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Style/Style.css';

const ContactUs = () => {

  const msg = () => {
    alert("The form sent succsesssfully")
  }


  return (
    <div>
      <Header h1='Contact us' />
      <div className='CUP strip container-fluid mt-3'>
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive", fontSize: "4em" }}>Contact us</h2>
        </div>
      </div>

      <main className='white container-fluid mt-5'>
        <div className="container text-center justify-content-center">
          <div className="row text-center justify-content-center border-bottom border-black">

            <div className="col-md-5">
              <div>
                <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '2em' }}>Fill in your details</h2>
              </div>
            </div>


            <div className=' form-check col-md-8 my-4'>
              <form onSubmit={msg} className=' form-control text-center' >

                <br />
                <input type="text" placeholder='Name*' required className=' form-control' />
                <br />
                <br />

                <input type="tel" required placeholder='Phone*' className=' form-control' />
                <br />
                <br />

                <input type="email" className=' form-control' placeholder="E-mail" />
                <br />
                <br />

                <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder="Tell us..."></textarea>


                <br />
                <br />


                <button type='submit' className=' mb-2 btn btn-dark text-center' >Let's get started</button>
              </form>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default ContactUs