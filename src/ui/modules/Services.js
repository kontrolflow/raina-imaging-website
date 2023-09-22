function Services() {
    return (
        <section id="our-services" className="services-section section-light pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title text-center mb40"> <img src="img/icons/icon-service-title.png" alt="" />
                        <h2>Our <span className="color-blue">Services</span></h2>
                        {/* <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual
                            teachings</p> */}
                    </div>
                </div>
            </div>
            <div className="row row-flex">
                <div className="col-sm-4 single-service text-center"> 
                    <img src="images/xray.jpg" alt="" />
                    {/* <img src="img/icons/icon-medical-service.png" alt="" /> */}
                    <h6>X-Ray</h6>
                    <p>
                        • the "latest technology in the marketplace" enabling bedside QA and immediate submission for images for quicker interpretation
                        <br/>
                        •Images can be seen in 3-5 seconds
                        <br/>
                        •300% Less Radiation Exposure to Patients
                        <br/>
                        •Highest Image Quality in the marketplace
                        <br/>
                        •NO REPEATS NEEDED
                        <br/>
                        •FASTEST Results in 1-2 hours
                        <br/>
                        •Online access of Reports
                        <br/>
                        •Board Certified X-Ray Technologists
                    </p> 
                    {/* <a className="section-service-btn" href="#">See Our
                    Services</a> */}
                </div>
                <div className="col-sm-4 single-service text-center"> 
                    <img src="images/ultrasound.jpg" alt="" />
                    <h6>Ultrasound</h6>
                    <p>
                        Digital Mobile equipment provides the perfect combination of size and performance.
                        Images available in Dicom format viewable on any windows-based PC.
                        Nationally Certified Sonographers
                        Interpretation by board certified Radiologist/Cardiologist within 24 hours or less.
                    </p> 
                    <p>
                        Exams performed by Raina Imaging are as follows:
                        <br/>
                        <br/>
                        •Venous Doppler Upper or Lower Extremity
                        <br/>
                        •Arterial Doppler Upper or Lower Extremity
                        <br/>
                        •Carotid Duplex
                        <br/>
                        •Small Part Ultrasound
                        <br/>
                        •Abdominal Ultrasound
                    </p> 

                    {/* <a className="section-service-btn" href="#">Contact Now</a> */}
                </div>
                <div className="col-sm-4 single-service text-center">
                    <img src="images/ekg.jpg" alt="" />
                    <h6>EKG</h6>
                    <p>
                        Electrocardiograms are performed with a printable tracing for review by your physician. Interpretation by a Board Certified Cardiologist, upon request.
                    </p> 
                    {/* <a className="section-service-btn" href="#">See The
                        Times</a> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services