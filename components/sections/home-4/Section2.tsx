import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about5 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images">
                                <div className="image1 overlay-anim reveal">
                                    <img src="assets/img/about/about5-image1.png" alt="" />
                                </div>
                                <div className="image2 overlay-anim reveal">
                                    <img src="assets/img/about/about5-image2.png" alt="" />
                                </div>
                                <div className="image3 animate2" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/about/about5-image3.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading5 about5-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    About Us
                                </span>
                                <h2 className="text-anime-style-3">Transforming Businesses, Elevating Careers </h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    With a steadfast commitment to excellence, we specialize in connecting exceptional professionals with top-tier companies, fostering mutually beneficial
                                </p>
                                <div className="about5-border" />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="icon-box" data-aos="fade-left" data-aos-duration={900}>
                                            <div className="icon">
                                                <img src="assets/img/icons/about5-icon1.png" alt="" />
                                            </div>
                                            <div className="heading5">
                                                <h5>
                                                    <Link href="/service-details">Empowering Careers</Link>
                                                </h5>
                                                <div className="space10" />
                                                <p>Whether you're a company seeking to build performing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="icon-box" data-aos="fade-left" data-aos-duration={1100}>
                                            <div className="icon">
                                                <img src="assets/img/icons/about5-icon2.png" alt="" />
                                            </div>
                                            <div className="heading5">
                                                <h5>
                                                    <Link href="/service-details">Connecting Talent</Link>
                                                </h5>
                                                <div className="space10" />
                                                <p>Our team of industry experts is dedicated understanding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="buttons-about5" data-aos="fade-left" data-aos-duration={1000}>
                                    <Link className="theme-btn4" href="/about">
                                        Learn More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <div className="phone-btn">
                                        <div className="icon">
                                            <Link href="#">
                                                <i className="fa-regular fa-phone" />
                                            </Link>
                                        </div>
                                        <div className="heading">
                                            <p>Call Us For Help</p>
                                            <h4>
                                                <Link href="tel:+124567890">+124 567 890</Link>
                                            </h4>
                                        </div>
                                    </div>
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
