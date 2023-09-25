function Contact() {
    return(
        <section className="contact-info section-blue pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-8">
                    <h2 id="contact">Contact Info & Location</h2>
                    <div className="col-sm-5 xs-padding-none">
                        <ul className="contact-detail">
                            <li>
                                <i className="fa fa-location-arrow"></i>
                                <a href="https://maps.app.goo.gl/cJ2urfiwppwY8oDn6">3000 Hartley Road, Suite 1<br/>Jacksonville, FL 32257</a><br/>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                <a href="tel:9049929749">904.992.9749</a><br/>
                            </li>
                            <li>
                                <i className="fa fa-fax"></i>
                                <a href="tel:9042121508">904.212.1508</a><br/>
                            </li>
                            {/* If they want the fax number */}
                            {/* <li><i className="fa fa-phone"></i>904.992.9749<br/>1.800.458.556</li> */}
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:rainaimaging@comcast.net">rainaimaging@comcast.net</a><br/>
                            </li>
                            <li>
                                <i className="fa fa-facebook"></i>
                                <a href="https://www.facebook.com/rainaimaging">Raina Imaging Facebook</a><br/>
                                {/* <a href="mailto:contact@clicawebsit.com">contact@clicawebsit.com </a> */}
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-sm-7 xs-padding-none">
                        <div className="map"></div>
                    </div> */}
                </div>
                <div className="col-md-5 col-sm-4 opening-hours-wrap">
                    <h2>Opening Hours</h2>
                    <h6>We offer 24/7 Call Coverage</h6>
                    <br/>
                    <ul className="opening-hours">
                        <li>Monday - Friday <span className="pull-right">9AM - 5PM</span></li>
                        <li>Saturday <span className="pull-right">Closed</span></li>
                        <li>Sunday <span className="pull-right">Closed</span></li>
                        {/* <li>Monday - Friday <span className="pull-right">8.00 - 17.00</span></li>
                        <li>Saturday <span className="pull-right">9.30 - 17.30</span></li>
                        <li>Sunday <span className="pull-right">9.30 - 15.00</span></li> */}
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact