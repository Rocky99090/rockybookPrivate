import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import HomeTwo from './Pages/Home/HomeTwo/HomeTwo';
import HomeThree from './Pages/Home/HomeThree/HomeThree';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallery from './Pages/Gallery/Gallery';
import Teams from './Pages/Team/Team';
import Faqs from './Pages/Faq/Faq';
import Games from './Pages/Games/Games';
import Matchese from './Pages/Matchese/Matchese';
import MatcheseDetails from './Pages/MatcheseDetails/MatcheseDetails';
import LiveStreaming from './Pages/LiveStreaming/LiveStreaming';
import Error404 from './Pages/404';
import BlogPost from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SinglePost from './Pages/SinglePost/SinglePost';
import { ParallaxProvider } from 'react-scroll-parallax';


const App = () => {
  return (
    <div className="App">
    <ParallaxProvider>
    <BrowserRouter>
     

        {/* Header */}
        <Header />

        <Routes>

          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/home-three" component={HomeThree} />
          <Route exact path="/about-us" element={<AboutUs />} />
          {/* <Route exact path="/gallery" element={<Gallery />} /> */}
          {/* <Route exact path="/team" component={Teams} /> */}
          {/* <Route exact path="/faq" component={Faqs} /> */}
          {/* <Route exact path="/game" component={Games} /> */}
          {/* <Route exact path="/matchese" component={Matchese} />
          <Route exact path="/matchese-details" component={MatcheseDetails} />
          <Route exact path="/live-streaming" component={LiveStreaming} /> */}
          <Route exact path="/404"  element={<Error404 />} />
          <Route exact path="/blogs"  element={<BlogPost />} />
          <Route exact path="/blog/:id"  element={<SinglePost />} />
          {/* <Route exact path="/contact" component={ContactUs} /> */}

        </Routes>
        
        {/* Footer */}
        <Footer />

    </BrowserRouter>
    </ParallaxProvider>
    </div>
  );
}

export default App;
