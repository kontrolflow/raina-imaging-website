function HomeSection() {
    return (
    <section data-stellar-background-ratio="0.5" className="hero hero-parallax pt100 pb100 section-blue"
        style={{backgroundImage: "url('img/hero/hero-bg.jpg')"}}>
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7 intro-text">
                    <h1>Imaging You Can Trust</h1>
                    <p>But I must explain to you how all this mistaken idea of pleasure and praising to pain was born
                        and I will give you a the system</p> <a className="btn-intro" href="#our-services">See Our
                        Services</a>
                </div>
                <div className="col-md-4 col-sm-5">
                    <div className="quick-appoinment-form section-light">
                        <h6 className="text-center"> Quick <span className="color-blue">Links</span></h6>
                        <div id="erreomes"></div>
                        <form action="http://localhost:3000/RainaImagingExamForm.pdf" id="appointmentsv2" method="POST">
                            <div className="text-center form-button"> <input type="submit" value="Exam Form" /></div>
                        </form>
                    </div>
                    <div className="quick-appoinment-form section-light">
                        
                        <div id="erreomes"></div>
                        <form action="https://www.google.com" id="appointmentsv2">
                            <div className="text-center form-button"> <input type="submit" value="Image/Report Portal" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeSection