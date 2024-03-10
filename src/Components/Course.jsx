import React from 'react'
import '../Style/Style.css'

const Course = (props) => {

const font ={
    fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive"
}

const mainFont = {
    fontFamily: 'Rajdhani, sans-serif'
    ,fontSize: '2em'
}


    return (
        <div className=' col-md-3 rounded-2  border border-2 p-2 m-2  '  >
            <img src={props.image} className='img-fluid rounded-2' alt='food' width={300} height={200} />
            <h2  style={mainFont} className='mt-2 lead text-center  fw-bolder'>{props.category}  </h2>
            <hr />
            <h2 style={font} className=' lead text-center  fw-bold'>Name: {props.name}  </h2>
            <h2 style={font} className=' lead text-center  fw-bold'>Price: {props.price}$ </h2>
            <h2 style={font} className=' lead text-center  fw-bold'>Description: {props.description}  </h2>
            <h2 style={font} className=' lead text-center  fw-bold'>Rate: {props.rate} </h2>




        </div>
    )
}

export default Course