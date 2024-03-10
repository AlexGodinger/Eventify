
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Index from './Pages/Index'
import Gallery from './Pages/Gallery'
import Info from './Pages/Info'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Project from './Pages/Project'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/Info' element={<Info />}></Route>
          <Route path='/AboutUs' element={<AboutUs />}></Route>
          <Route path='/Project' element={<Project />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
