import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service3 sp overflow-hidden" id="service" style={{ backgroundImage: "url(assets/img/bg/service3-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading3">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Temporary Staffing Services</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={700}>
                                    With our proven track record and commitment to excellence, we're here to support your organization's growth and help you achieve
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-7" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="service3-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service3-icon1.png" alt="" />
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="/service-details">Candidate Screening Services</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our team of dedicated professionals is committed to understanding your unique requirements and providing personalized solutions that drive success. With our proven track record and commitment</p>
                                    <div className="space16" />
                                    <Link href="#" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service3-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service3-icon2.png" alt="" />
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="/service-details">Talent Acquisition Solutions</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>We offer a comprehensive suite of staffing solutions designed to meet your organization's evolving needs. Our tailored services include</p>
                                    <div className="space16" />
                                    <Link href="/service-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service3-box" data-aos="zoom-in-up" data-aos-duration={1100}>
                                <div className="icon">
                                    <img src="assets/img/icons/service3-icon3.png" alt="" />
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="/service-details">Consulting and Staffing Support</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Whether you're looking for temporary staffing, direct placements, or executive search services, we have the expertise and resources to deliver exceptional results.</p>
                                    <div className="space16" />
                                    <Link href="/service-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service3-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service3-icon4.png" alt="" />
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="/service-details">Temporary Staffing Services</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>
                                        With our proven track record and commitment to excellence, <br /> we're here to support your organization's growth and help you achieve <br /> your hiring goals.
                                    </p>
                                    <div className="space16" />
                                    <Link href="/service-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape1" src="assets/img/shapes/sec3-shape.png" alt="" />
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
