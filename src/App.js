import React,{useState,useEffect} from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './Components/Hero';

import Gallery from './Components/Gallery';

import Instagram from './Components/Instagram';
import Footer from './Components/Footer';

import Owldemo1 from './Components/OwlDemo';

import ProgressBar from './Components/Preloader';





function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 25;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);
  return (
    
    <Router>
      <ProgressBar value={value} max={100}/>
     
     
      <GlobalStyle />
      <Hero/>
      <Gallery/>
      
     
      <Owldemo1/>
      <Instagram/>
      
      <Footer/>
    </Router>
  );
}

export default App;
