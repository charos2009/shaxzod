// // import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Homeimg from './components/Homeimg'
// import Featurehome from './components/Featurehome';

// import Galery from './components/Galery'
// import Partners from './components/Partners';
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer';
// import FutureBanner from './components/FutureBanner'
// import Home1 from './pages/Home1';
// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Home/>
//       <Homeimg/>
//       <Featurehome/>
//       {/* <Content/> */}
//       <Galery/>
//       <Partners/>
//       <Testimonials/>
//       <FutureBanner/> 
//       <Footer/>
//       <Routes>
//         <Route path="/" element={< Home1/>}   />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home1 from './pages/Home1';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login'; // to‘g‘ri path bo‘yicha


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
