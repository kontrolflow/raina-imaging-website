function Contact() {
    return(
        <section className="contact-info section-blue pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-8">
                    <h2>Contact Info & Location</h2>
                    <div className="col-sm-5 xs-padding-none">
                        <ul className="contact-detail">
                            <li><i className="fa fa-location-arrow"></i>121 King Street, Jacksonville<br/>United Kingdom</li>
                            <li><i className="fa fa-phone"></i>306-868-9132<br/>1.800.458.556</li>
                            <li><i className="fa fa-envelope"></i><a
                                    href="mailto:info@clicawebsite.com">info@clicawebsite.com</a><br/><a
                                    href="mailto:contact@clicawebsit.com">contact@clicawebsit.com </a></li>
                        </ul>
                    </div>
                    <div className="col-sm-7 xs-padding-none">
                        <div className="map"></div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-4 opening-hours-wrap">
                    <h2>Opening Hours</h2>
                    <ul className="opening-hours">
                        <li>Monday - Friday <span className="pull-right">8.00 - 17.00</span></li>
                        <li>Saturday <span className="pull-right">9.30 - 17.30</span></li>
                        <li>Sunday <span className="pull-right">9.30 - 15.00</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact