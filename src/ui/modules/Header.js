function Header() {
    return (
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
                                    <li><a href="index.html">Gome</a>
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
    )
}

export default Header