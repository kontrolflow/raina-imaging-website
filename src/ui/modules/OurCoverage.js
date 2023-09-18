function OurCoverage() {
    return(
    <section id="our-coverage" data-stellar-background-ratio="0.5" className="hero hero-parallax pt100 pb100 section-blue"
        style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/88/DT_Jax_2022.jpg')"}}>
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7 intro-text">
                    <h1>Our Coverage</h1>
                    <p>
                        <b>Jacksonville:</b><br/>
                        Duval<br/>
                        Clay<br/>
                        St. Johns<br/>
                        <br/>
                        <b>Daytona / Ormond Beach:</b><br/>
                        Volusia
                    </p> 
                    <a className="btn-intro" href="#our-services">See Our Services</a>
                </div>
                <div className="col-md-4 col-sm-5">
                    <div className="quick-appoinment-form section-light">
                        <h6 className="text-center"> Coverage <span className="color-blue">Map</span></h6>
                        <div id="erreomes"></div>
                        
                        <form action="tel:9049929749" id="appointmentsv2" >
                            <div className="text-center form-button"> <input type="submit" value="Call Us Now" /></div>
                            {/* <div className="form-group"> <input className="form-control" type="text" name="full_name"
                                    placeholder="Full Name" /></div>
                            <div className="form-group"> <input className="form-control" id="appdate" name="date"
                                    placeholder="Date" type="text" /></div>
                            <div className="form-group"> <input className="form-control" type="text" name="socailsec"
                                    placeholder="Social Security Number" /></div>
                            <div className="form-group"> <input className="form-control" type="tel" name="your_phone"
                                    placeholder="Phone Number" /></div>
                            <div className="form-group"> <input className="form-control" type="email" name="email"
                                    placeholder="E-mail" /></div>
                            <div className="form-group"><textarea className="form-control" cols="30" name="message" rows="3"
                                    placeholder="Reason of Appointment..."></textarea></div>
                            <div className="loader-img"> <img src="css/ajax-loader.gif" alt="loading" id="loading_image"/>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    // Original Intro Video Section
    // <div style={{backgroundImage:'url(img/video/videobg-v2.jpg)'}} className="video-intro section-blue pt215 pb215">
    //         <div className="gredient-overlay opacity-6"></div>
    //         <div className="container">
    //             <div className="row col-sm-12 text-center"> <a className="popup-youtube"
    //                     href="https://www.youtube.com/watch?v=OwPZIhTHDUk">
    //                     <div className="play-icon"><i className="fa fa-play" aria-hidden="true"></i></div>Play Intro Video
    //                 </a></div>
    //         </div>
    //     </div>
    )
}

export default OurCoverage