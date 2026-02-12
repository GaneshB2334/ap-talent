import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service5 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading5">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Unlocking Your Access to Top Talent</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Our tailored services include talent acquisition, recruitment expertise, and industry-specific <br /> staffing solutions to help you build high-performing teams.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="service5-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service2-iocn1.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <h4>
                                        <Link href="/service-details">Leadership Training</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>We offer a comprehensive suite of staffing solutions designed to meet your organization's evolving needs</p>
                                    <Link href="/service-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service5-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service2-iocn2.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <h4>
                                        <Link href="/service-details">Improving Resources</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our tailored services include talent acquisition, recruitment expertise, and industry-specific staffing</p>
                                    <Link href="/service-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="service5-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service2-iocn3.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <h4>
                                        <Link href="/service-details">Recruitments Solutions</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>With our proven track record and commitment to excellence, we're here to support your organization</p>
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
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
