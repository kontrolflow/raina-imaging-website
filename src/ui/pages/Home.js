import { useEffect } from 'react';

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
        <div className="preloader-wrap">
        <div className="loader"></div>
    </div>
    <header className="header-area header-area-v2 section-light">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-xs-10 logo"> <a href="index.html"><img className="img-responsive"
                                src="img/logo/logo-header-2.png" alt="logo"/></a></div>
                    <div className="mainmenu-area hidden-xs text-right col-sm-9">
                        <div className="mainmenu">
                            <nav>
                                <ul>
                                    <li><a href="index.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home v1</a></li>
                                            <li><a href="index-2.html">Home v2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="doctors.html">Doctors</a>
                                        <ul className="sub-menu">
                                            <li><a href="doctor-profile.html">Doctor profile</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="appointment.html">appointment</a></li>
                                    <li><a href="department.html">Department</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Articals</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-full.html">Blog full width</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                            <li><a href="single.html">Single blog</a></li>
                                            <li><a href="single-left-sidebar.html">Single left sidebar</a></li>
                                            <li><a href="single-right-sidebar.html">Single right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-menu-area visible-xs">
            <div className="mean-container">
                <div className="col-md-12">
                    <div className="mobile-menu">
                        <nav id="dropdown">
                            <ul>
                                <li><a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home v1</a></li>
                                        <li><a href="index-2.html">Home v2</a></li>
                                    </ul>
                                </li>
                                <li><a href="doctors.html">Doctors</a>
                                    <ul>
                                        <li><a href="doctor-profile.html">Doctor profile</a></li>
                                    </ul>
                                </li>
                                <li><a href="appointment.html">appointment</a></li>
                                <li><a href="department.html">Department</a></li>
                                <li><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li><a href="404.html">404</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">Articals</a>
                                    <ul>
                                        <li><a href="blog-full.html">Blog full width</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                        <li><a href="single.html">Single blog</a></li>
                                        <li><a href="single-left-sidebar.html">Single left sidebar</a></li>
                                        <li><a href="single-right-sidebar.html">Single right sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section data-stellar-background-ratio="0.5" className="hero hero-parallax pt100 pb100 section-blue"
        style={{backgroundImage: "url('img/hero/hero-bg.jpg')"}}>
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7 intro-text">
                    <h1>We have Medicare plan options for you</h1>
                    <p>But I must explain to you how all this mistaken idea of pleasure and praising to pain was born
                        and I will give you a the system</p> <a className="btn-intro" href="department.html">See Our
                        Plans</a>
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
    <section className="services-section section-light pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title text-center mb40"> <img src="img/icons/icon-service-title.png" alt="" />
                        <h2>Welcome To <span className="color-blue">Clinica</span></h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual
                            teachings</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 single-service text-center"> <img src="img/icons/icon-medical-service.png"
                        alt="" />
                    <h6>Medical Services</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete</p> <a className="section-service-btn" href="#">See Our
                        Services</a>
                </div>
                <div className="col-sm-4 single-service text-center"> <img src="img/icons/icon-emergency-case.png" alt="" />
                    <h6>Emergency Case</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete</p> <a className="section-service-btn" href="#">Contact Now</a>
                </div>
                <div className="col-sm-4 single-service text-center"> <img src="img/icons/icon-find-doctors.png" alt="" />
                    <h6>Doctors Timetable</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you a complete</p> <a className="section-service-btn" href="#">See The
                        Times</a>
                </div>
            </div>
        </div>
    </section>
    <div style={{backgroundImage:'url(img/video/videobg-v2.jpg)'}} className="video-intro section-blue pt215 pb215">
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row col-sm-12 text-center"> <a className="popup-youtube"
                    href="https://www.youtube.com/watch?v=OwPZIhTHDUk">
                    <div className="play-icon"><i className="fa fa-play" aria-hidden="true"></i></div>Play Intro Video
                </a></div>
        </div>
    </div>
    <section className="services-section section-light pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title text-center mb40"> <img src="img/icons/icon-service-title.png" alt="" />
                        <h2>Why Choose <span className="color-blue">Clinica</span></h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual
                            teachings</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 single-service-box">
                    <h6>Easy Appointments</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you hello must explain to you how all this mistaken idea of denouncing
                        pleasure</p> <a href="">Laren More</a>
                </div>
                <div className="col-sm-6 single-service-box">
                    <h6>Pressure guidelines</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you hello must explain to you how all this mistaken idea of denouncing
                        pleasure</p> <a href="">Laren More</a>
                </div>
                <div className="col-sm-6 single-service-box">
                    <h6>Regular checks</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you hello must explain to you how all this mistaken idea of denouncing
                        pleasure</p> <a href="">Laren More</a>
                </div>
                <div className="col-sm-6 single-service-box">
                    <h6>Pharmaceutical Advice</h6>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                        born and I will give you hello must explain to you how all this mistaken idea of denouncing
                        pleasure</p> <a href="">Laren More</a>
                </div>
            </div>
        </div>
    </section>
    <section className="best-doctors section-gray pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title text-center mb40"> <img src="img/icons/icon-service-title.png" alt="" />
                        <h2>Meet Our <span className="color-blue">Doctors</span></h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual
                            teachings</p>
                    </div>
                </div>
            </div>
            <div className="row grid">
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-1.jpg" alt=""
                            className="img-full" />
                        <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                <h6>Alex Garcia Perez</h6>
                            </a>
                            <p>Anethesiologist</p> <a className="see-detail" href="doctor-profile.html">See Details</a>
                        </div>
                        <div className="best-doctor-footer section-blue">
                            <div className="bestd-list-item">Experience<br/><span>5 Years</span></div>
                            <div className="bestd-list-item">Office<br/><span>Office 112, Hall C</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-2.jpg" alt=""
                            className="img-full" />
                        <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                <h6>Robert Brown</h6>
                            </a>
                            <p>Gynecologist</p> <a className="see-detail" href="doctor-profile.html">See Details</a>
                        </div>
                        <div className="best-doctor-footer section-blue">
                            <div className="bestd-list-item">Experience<br/><span>5 Years</span></div>
                            <div className="bestd-list-item">Office<br/><span>Office 112, Hall C</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-3.jpg" alt=""
                            className="img-full" />
                        <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                <h6>ANNA SMITH</h6>
                            </a>
                            <p>Nurse</p> <a className="see-detail" href="doctor-profile.html">See Details</a>
                        </div>
                        <div className="best-doctor-footer section-blue">
                            <div className="bestd-list-item">Experience<br/><span>5 Years</span></div>
                            <div className="bestd-list-item">Office<br/><span>Office 112, Hall C</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center clearfix mt50"> <a href="doctors.html" className="primary-btn">View All Doctors</a>
            </div>
        </div>
    </section>
    <section className="best-doctors section-light pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="section-title text-center mb40"> <img src="img/icons/icon-blog-title.png" alt="" />
                        <h2>Latest Health <span className="color-blue">News</span></h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                            was born and will give you a complete account of the system, and expound the actual
                            teachings</p>
                    </div>
                </div>
            </div>
            <div className="row grid">
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="article-box">
                        <div className="article-thumb"> <img src="img/blog/blog-thumb-1.jpg" alt="" className="img-full" />
                            <div className="article-date"> <a href="#">12 May 2017 </a></div>
                            <div className="article-meta text-center"> <a href="#"><i className="fa fa-comment"></i> 10
                                    Comments</a> | <a href=""><i className="fa fa-eye"></i> 100 Views</a></div>
                        </div>
                        <div className="article-content text-left"> <a href="single.html">
                                <h6>Nutritional Personal Consultation</h6>
                            </a>
                            <p>But I must explain to you how all this i mistaken idea of denouncing pleasure and
                                praising pain was i born and will give you a complete account more [...]</p> <a
                                href="single.html">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="article-box">
                        <div className="article-thumb"> <img src="img/blog/blog-thumb-2.jpg" alt="" className="img-full" />
                            <div className="article-date"> <a href="#">12 May 2017 </a></div>
                            <div className="article-meta text-center"> <a href="#"><i className="fa fa-comment"></i> 10
                                    Comments</a> | <a href=""><i className="fa fa-eye"></i> 100 Views</a></div>
                        </div>
                        <div className="article-content text-left"> <a href="single.html">
                                <h6>Nutritional Personal Consultation</h6>
                            </a>
                            <p>But I must explain to you how all this i mistaken idea of denouncing pleasure and
                                praising pain was i born and will give you a complete account more [...]</p> <a
                                href="single.html">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-xs-12 grid-item">
                    <div className="article-box">
                        <div className="article-thumb"> <img src="img/blog/blog-thumb-3.jpg" alt="" className="img-full" />
                            <div className="article-date"> <a href="#">12 May 2017 </a></div>
                            <div className="article-meta text-center"> <a href="#"><i className="fa fa-comment"></i> 10
                                    Comments</a> | <a href=""><i className="fa fa-eye"></i> 100 Views</a></div>
                        </div>
                        <div className="article-content text-left"> <a href="single.html">
                                <h6>Nutritional Personal Consultation</h6>
                            </a>
                            <p>But I must explain to you how all this i mistaken idea of denouncing pleasure and
                                praising pain was i born and will give you a complete account more [...]</p> <a
                                href="single.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center clearfix mt50"> <a href="blog.html" className="primary-btn">View All Posts</a></div>
        </div>
    </section>
    <section className="contact-info section-blue pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-8">
                    <h2>Contact INFO & Location</h2>
                    <div className="col-sm-5 xs-padding-none">
                        <ul className="contact-detail">
                            <li><i className="fa fa-location-arrow"></i>121 King Street, London<br/>United Kingdom</li>
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
    <section className="footer-widget section-gray pt100 pb100">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="single-footer-widget">
                        <h6>About Clinica</h6>
                        <p>But I must explain to you how all this mistaken ofidea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the.</p>
                        <p>System, and expound the actual teachings of ello the great explorer of the truth, the
                            master-builder of.</p>
                        <ul className="footer-social">
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                            <li><a href=""><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="single-footer-widget">
                        <h6>Medical Departments</h6>
                        <ul>
                            <li><a href=""><i className="fa fa-angle-right"></i> General Practice</a></li>
                            <li><a href=""><i className="fa fa-angle-right"></i> Cardiology</a></li>
                            <li><a href=""><i className="fa fa-angle-right"></i> Pediatrics</a></li>
                            <li><a href=""><i className="fa fa-angle-right"></i> Diabetes Care</a></li>
                            <li><a href=""><i className="fa fa-angle-right"></i> Ultrasound Echocardiogram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="single-footer-widget">
                        <h6>Latest Health Tips</h6>
                        <ul>
                            <li><a href=""><i className="fa fa-chevron-circle-right"></i> Nutritional Personal
                                    Consultation</a></li>
                            <li><a href=""><i className="fa fa-chevron-circle-right"></i> Discoveries offer a new
                                    explanation for diabetes</a></li>
                            <li><a href=""><i className="fa fa-chevron-circle-right"></i> Center for Medical Technology </a>
                            </li>
                            <li><a href=""><i className="fa fa-chevron-circle-right"></i> New study links lutein with eye
                                    health benefits</a></li>
                            <li><a href=""><i className="fa fa-chevron-circle-right"></i> Pets may reduce risk of heart
                                    disease</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer section-dark pt30 pb30">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <p>&copy; <a href="#">Clinica</a> <script>document.write(new Date().getFullYear());</script>. All rights reserved. | Clinica Theme by <a
                            href="#">ThemeAtelier</a></p>
                </div>
            </div>
        </div>
    </footer>
    <div className="scroll-to-up hidden-xs">
        <div className="scrollup"> <i className="fa fa-caret-up"></i></div>
    </div>
      </>
    );
  }
  
  export default Home;