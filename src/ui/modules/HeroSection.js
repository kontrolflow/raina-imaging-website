function HeroSection() {
    return (
        <section data-stellar-background-ratio="0.5" className="hero hero-parallax pt100 pb100 section-blue"
        style={{backgroundImage: "url('img/hero/hero-bg.jpg')"}}>
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7 intro-text">
                    <h1>Imaging You Can Trust</h1>
                    <p>But I must explain to you how all this mistaken idea of pleasure and praising to pain was born
                        and I will give you a the system</p> <a className="btn-intro" href="department.html">See Our
                        Services</a>
                </div>
                <div className="col-md-4 col-sm-5">
                    <div className="quick-appoinment-form section-light">
                        <h6 className="text-center"> Quick <span className="color-blue">Appointment</span></h6>
                        <div id="erreomes"></div>
                        <form action="php/appointmentsv2.php" id="appointmentsv2" method="post">
                            <div className="form-group"> <input className="form-control" type="text" name="full_name"
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
                            </div>
                            <div className="text-center form-button"> <input type="submit" value="send now" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection