import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Home from './components/content/Home';
import Screens from './components/content/Screens';
import Schedules from './components/content/Schedules';
import Library from './components/content/Library';
import Contact from './components/content/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App text-white" style={{backgroundColor: "black"}}>
        <Header/>
        <Banner/>
        <div className='content'>
        <Router>
            <Routes>
                <Route path='/home' element={<Home />}/>
                <Route path='/screens' element={<Screens />}/>
                <Route path='/schedule' element={<Schedules />}/>
                <Route path='/library' element={<Library />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
