import { useEffect } from 'react';

// UI Module Imports
import Header from '../modules/Header';
import Services from '../modules/Services';
import Contact from '../modules/Contact';
import Footer from '../modules/Footer';
import ScrollUpButton from '../modules/ScrollUpButton';
// import LatestNews from '../modules/LatestNews';
import Preloader from '../modules/Preloader';
import About from '../modules/About';
import OurCoverage from '../modules/OurCoverage';
import HomeSection from '../modules/HomeSection';
import MeetUs from '../modules/MeetUs';

function Home() {

    useEffect(() => {

        const app = document.createElement('script');
        app.src = 'js/app.js';
        app.async = true;
        document.head.append(app);
      
        // componentWillUnmount() {}
        return () => {
          app.remove();
        };

    }, []);

    return (
        <>
            <Preloader/>

            <Header/>

            <HomeSection/>

            <Services/>
            
            <OurCoverage/>
            
            <About/>

            {/* <MeetUs/> */}
            
            {/* <LatestNews/> */}
            
            <Contact/>

            {/* <FooterWidget/> */}

            <Footer/>

            <ScrollUpButton/>
        </>
    );
  }
  
  export default Home;