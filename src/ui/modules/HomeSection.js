import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function HomeSection() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5vjk6f', 'template_zgo6yye', form.current, 'XSEokXyML5LTYLkaw')
      .then((result) => {
          console.log(result.text);
          if(result.text == "OK") {
            alert("Request Sent Successfully!")
          }
      }, (error) => {
          console.log(error.text);
          alert("Issues sending request. Please give us a call at 904-992-9749")
      });
  };
    return (
    <section id="home" data-stellar-background-ratio="0.5" className="hero hero-parallax pt100 pb100 section-blue"
        style={{backgroundImage: "url('img/hero/hero-bg.jpg')"}}>
        <div className="gredient-overlay opacity-6"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-7 intro-text">
                    <h1>Imaging You Can Trust</h1>
                    <p>
                        Founded in 1996, Raina Imaging bring the most trusted in mobile imaging services to your doorstep.
                    </p> 
                    <a className="btn-intro" href="#our-services">See Our Services</a>
                </div>
                <div className="col-md-4 col-sm-5">

                    <div className="quick-appoinment-form section-light">
                        <h6 className="text-center"> Quick <span className="color-blue">Links</span></h6>
                        <div id="erreomes"></div>
                        <form action="/RainaImagingExamForm.pdf" id="">
                            <div className="text-center form-button"> <input type="submit" value="Exam Form" /></div>
                        </form>

                        <form action="https://apps-lb.rapidrad.com/login/raina/" id="">
                            <div className="text-center form-button"> <input type="submit" value="Image/Report Portal" /></div>
                        </form>
                    </div>

                    <div class="quick-appoinment-form section-light">
                        <h6 class="text-center"> Request <span class="color-blue">Portal Access*</span></h6>
                        
                        <div id="erreomes"></div>
                        <form  ref={form} onSubmit={sendEmail}>
                            
                            <div class="form-group"> <input class="form-control" type="text" name="name"
                                    placeholder="Provider/Entity Name" /></div>
                            <div class="form-group"> <input class="form-control" type="email" name="email"
                                    placeholder="E-mail" /></div>
                            <div class="form-group"> <input class="form-control" type="tel" name="cell_number"
                                    placeholder="Cell Number" /></div>
                            <p>*For Providers and Facilities Only</p>

                            <div class="loader-img"> <img src="css/ajax-loader.gif" alt="loading" id="loading_image"/>
                            </div>
                            <div class="text-center form-button"> <input type="submit" value="Send Request" /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeSection