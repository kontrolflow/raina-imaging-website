import { useEffect } from 'react';

// UI Module Imports
import Header from '../modules/Header';
import HeroSection from '../modules/HeroSection';
import Services from '../modules/Services';
import Contact from '../modules/Contact';
import Footer from '../modules/Footer';
import ScrollUpButton from '../modules/ScrollUpButton';
// import FooterWidget from '../modules/FooterWidger';
// import IntroVideo from '../modules/OurCoverage';
import MeetOurTechs from '../modules/MeetOurTechs';
// import LatestNews from '../modules/LatestNews';
import Preloader from '../modules/Preloader';
import About from '../modules/About';
import OurCoverage from '../modules/OurCoverage';

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

            <HeroSection/>

            <Services/>
            
            <OurCoverage/>
            
            <About/>

            <MeetOurTechs/>

            {/* <LatestNews/> */}
            
            <Contact/>

            {/* <FooterWidget/> */}

            <Footer/>

            <ScrollUpButton/>
        </>
    );
  }
  
  export default Home;