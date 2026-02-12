import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about7 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images-all">
                                <img src="assets/img/shapes/about7-shape.png" alt="" className="shape animate3" />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about7-image1.png" alt="" />
                                        </div>
                                        <div className="review-area">
                                            <h3>25+</h3>
                                            <p>Years Of Experience</p>
                                            <img src="assets/img/about/review7.png" alt="" />
                                            <p>We Are Awesome Team</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="space50" />
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about7-image2.png" alt="" />
                                        </div>
                                        <div className="image reveal overlay-anim">
                                            <img src="assets/img/about/about7-image3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading7">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span7.png" alt="" /> About recrute
                                </span>
                                <h2 className="text-anime-style-3">Driving Success With A Expert Finance Staffing</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    At Recrute, we understand that key to business success lies in having the right people on your team. That's why a we're committed to connecting you with top-tier talent.
                                </p>
                                <div className="row" data-aos="fade-left" data-aos-duration={1000}>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>1K+</h3>
                                            <p>Expert Team</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>98%</h3>
                                            <p>Client Satisfaction</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>99%</h3>
                                            <p>Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={800}>
                                    <Link href="/about" className="theme-btn12">
                                        Join Our Network
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
