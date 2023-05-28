import './App.css';
import Navbar from './Components/navbar/Navbar';
import Banner from './Components/banner/Banner';
import Features from './Components/features/Features';
import Testimonial from './Components/testimonial/Testimonial';
import About from './Components/about/About';
import Special from './Components/special/Special';
import Info from './Components/info/Info';
import NewsLetter from './Components/newsLetter/NewsLetter';
import Footer from './Components/footer/Footer';
import Menu from './Components/menu/Menu';
import Success from './Components/success/success';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<>
            <Banner />
            <Features />
            <About />
            <Special />
            <Testimonial />
            <Info />
          </>}>
          </Route>
          <Route exact path='/menu' element={
            <>
              <Menu />
            </>
          }></Route>



        </Routes>

        <Routes>
          <Route exact path='/success' element={<>
            <Success />
          </>} ></Route>
        </Routes>
        <Footer />
        <NewsLetter />
      </div>
    </Router>
  );
}

export default App;
