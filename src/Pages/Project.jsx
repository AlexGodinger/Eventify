import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Section from '../Components/Section'
import menu from '../menu.json'
import Course from '../Components/Course'
import '../Style/Style.css'


const Project = () => {

    const ITEMS_PER_PAGE = 6;
    const [choice, setChoice] = useState("category");
    const [arr, setArr] = useState(menu.slice(0, ITEMS_PER_PAGE));
    const [searchVal, setSearchVal] = useState("");
    const [start, setStart] = useState(0);
    const [FArr, setFArr] = useState(menu)
    const [numPages, setNumPages] = useState(Math.ceil(menu.length / ITEMS_PER_PAGE));
    const [index, setIndex] = useState(1);



    const createCourse = (arr) => {
        return arr.map((item, index) => {
            return <Course
                key={index}
                image={item.image}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                rate={item.rate} />
        })

    }

    const filterArr = () => {
        let newArr = menu.filter((item) => {
            if (choice == "category")
                return item.category.toLowerCase() == searchVal.toLowerCase();

            else if (choice == "name") return item.name.toLowerCase().includes(searchVal.toLowerCase());

            else if (choice == "description")
                return item.description.toLowerCase().includes(searchVal.toLowerCase());

            else (choice == 'price')
            return item.price <= Number(searchVal);
        })
        return newArr
    }

    const hundleSubmit = (e) => {
        e.preventDefault();
        const finalArr = filterArr()
        setStart(0)
        setIndex(1)

        if (finalArr.length > 0) {
            setFArr(finalArr)
            setNumPages(Math.ceil(finalArr.length / ITEMS_PER_PAGE))
            setArr(finalArr.slice(0, ITEMS_PER_PAGE))
        }
        else {
            alert("Invalid input")
            setArr(menu.slice(0, ITEMS_PER_PAGE))
        }
    }

    const createBtn = () => {
        const btns = []

        for (let i = 1; i <= numPages; i++) {
            const activ = (i === index)
            btns.push(

                <button key={i} className={` btn m-2 ${activ ? 'active2' : ''} `} style={{ backgroundColor: 'white' }} onClick={() => {
                    btnAct(i)
                }}>{i}</button>

            )
        }
        return btns
    }

    const btnAct = (pageNum) => {
        const startIndex = (pageNum - 1) * ITEMS_PER_PAGE;
        setArr(FArr.slice(startIndex, startIndex + ITEMS_PER_PAGE))
        setStart(startIndex)
        setIndex(pageNum)
    }

    const nextPage = () => {
        const startIndex = start + ITEMS_PER_PAGE;
        setArr(FArr.slice(startIndex, startIndex + ITEMS_PER_PAGE))
        setStart(startIndex)
        setIndex(index + 1)
    }

    const backPage = () => {
        const startIndex = start - ITEMS_PER_PAGE;
        setArr(FArr.slice(startIndex, startIndex + ITEMS_PER_PAGE))
        setStart(startIndex)
        setIndex(index - 1)
    }

    const font = {
        fontFamily: "'Ephesis', 'Montserrat', 'Roboto', 'Roboto Condensed', 'Water Brush', cursive"
        , fontSize: '6em',
    }


    return (

        <>
            <Header />

            <div className="menuPic strip  container-fluid">
                <h2 style={font} className='center  text-white '>Menu</h2>
            </div>
            <main className=' container-fluid'>
                <div className=' container m-auto justify-content-center text-center'>
                    <div className='w-md-50 m-auto justify-content-center text-center row' >
                        <form onSubmit={hundleSubmit} className=' form-control d-flex justify-content-center col-md-7' style={{ backgroundColor: 'tan', borderRadius: '20px', whiteSpace: 'nowrap' }} >
                            <select className='m-2 rounded-2 lead form-control w-25 fw-bold' style={{ backgroundColor: 'white', color: 'tan' }} onChange={(e) => {
                                setChoice(e.target.value)
                            }} >
                                <option className='lead fw-bold ' value="category">Category</option>
                                <option className='lead fw-bold ' value="name">Name</option>
                                <option className='lead fw-bold ' value="description">Description</option>
                                <option className='lead fw-bold ' value="price">Price</option>
                            </select>
                            <input className='form-control w-25  fw-bold' style={{ backgroundColor: "white", color: 'tan' }} onChange={(e) => {
                                setSearchVal(e.target.value)
                            }} type="text" />
                            <button type='submit' className='btn m-2 lead fw-bold' style={{ backgroundColor: "white", color: 'tan' }}>Search</button>

                        </form>
                    </div>


                    <div className="row container justify-content-center m-auto text-text-center">
                        {createCourse(arr)}

                    </div>

                    <div className='pagesButtons my-5  d-flex center '>

                        <div> <button onClick={backPage} disabled = {start === 0} className='lead fw-bold btn btn-dark m-3 '>Beck</button></div>

                        <div className='d-none d-md-block'>{createBtn()}</div>

                        <div><button onClick={nextPage} disabled = {start + ITEMS_PER_PAGE >= FArr.length } className='btn btn-dark lead fw-bold m-3 '>Next</button></div>

                    </div>
                </div>
            </main>
            <Section />
            <Footer />
        </>
    )
}

export default Project