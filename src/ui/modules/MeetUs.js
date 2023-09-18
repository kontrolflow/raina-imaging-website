function MeetUs() {
    return(
        <section id="meet-us" className="best-doctors section-gray pt100 pb100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-title text-center mb40"> <img src="img/icons/icon-service-title.png" alt="" />
                                <h2>Meet Our <span className="color-blue">Staff</span></h2>
                                {/* <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                    was born and will give you a complete account of the system, and expound the actual
                                    teachings</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row grid">
                        <div className="col-sm-4 col-xs-12 grid-item">
                            <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-1.jpg" alt=""
                                    className="img-full" />
                                <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                        <h6>Steve Pankey</h6>
                                    </a>
                                    <p>Owner</p> 
                                    <a className="see-detail" href="doctor-profile.html">See Details</a>
                                </div>
                                <div className="best-doctor-footer section-blue">
                                    <div className="bestd-list-item">Experience<br/><span>25 Years</span></div>
                                    <div className="bestd-list-item">Department<br/><span>Admin</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12 grid-item">
                            <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-2.jpg" alt=""
                                    className="img-full" />
                                <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                        <h6>Kim Pankey</h6>
                                    </a>
                                    <p>Owner & Technician</p> 
                                    {/* <a className="see-detail" href="doctor-profile.html">See Details</a> */}
                                </div>
                                <div className="best-doctor-footer section-blue">
                                    <div className="bestd-list-item">Experience<br/><span>25 Years</span></div>
                                    <div className="bestd-list-item">Department<br/><span>Admin, Dispatch</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12 grid-item">
                            <div className="bestdoctor-box-v2 section-light"> <img src="img/doctors/doctorsv2-3.jpg" alt=""
                                    className="img-full" />
                                <div className="bestdoctor-info text-center"> <a href="doctor-profile.html">
                                        <h6>ROSANNA SMITH</h6>
                                    </a>
                                    <p>Owner & Technician</p> 
                                    {/* <a className="see-detail" href="doctor-profile.html">See Details</a> */}
                                </div>
                                <div className="best-doctor-footer section-blue">
                                    <div className="bestd-list-item">Experience<br/><span>25 Years</span></div>
                                    <div className="bestd-list-item">Department<br/><span>Admin, Dispatch</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center clearfix mt50"> <a href="/staff" className="primary-btn">View All Staff</a>
                    </div>
                </div>
            </section>
    )
}

export default MeetUs