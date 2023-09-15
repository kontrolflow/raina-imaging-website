function IntroVideo() {
    return(
        <div style={{backgroundImage:'url(img/video/videobg-v2.jpg)'}} className="video-intro section-blue pt215 pb215">
                <div className="gredient-overlay opacity-6"></div>
                <div className="container">
                    <div className="row col-sm-12 text-center"> <a className="popup-youtube"
                            href="https://www.youtube.com/watch?v=OwPZIhTHDUk">
                            <div className="play-icon"><i className="fa fa-play" aria-hidden="true"></i></div>Play Intro Video
                        </a></div>
                </div>
            </div>
    )
}

export default IntroVideo