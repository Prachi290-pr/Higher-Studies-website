import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import About from "./pages/About";
import Notification from "./pages/Notif";
import Heading from "./components/Heading";
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" exact element= {<About />} />
          <Route path="/notif" exact element= {<Notification />} />
        </Routes>
      </Router>

      <Heading />
      <Hero />
      <Main />
      <Footer />
      

     
  
    </div>
  );
}

export default App;
