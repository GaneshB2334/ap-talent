import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*===== SERVICE BENEFITS AREA START =======*/}
            <div className="service-benefits pb120 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Service Benefits
                                </span>
                                <h2 className="text-anime-style-3">Explore Our Value Proposition</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Whether you're a small business or a large corporation, our flexible staffing options and exceptional candidate matching ensure that you find
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="benefits-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service-benefit-icon1.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <h4>
                                        <Link href="/service-details">Industry-Specific Expertise</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>We streamline the recruitment process, saving you time </p>
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
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="benefits-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service-benefit-icon2.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <h4>
                                        <Link href="/service-details">Talent Acquisition Expertise</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Discover the benefits of partnering with Recrute for all your staffing needs </p>
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
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="benefits-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service-benefit-icon3.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <h4>
                                        <Link href="/service-details">Flexible Staffing Options</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>With our extensive industry expertise and personalized approach, </p>
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
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="benefits-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service-benefit-icon4.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <h4>
                                        <Link href="/service-details">Personalized Staffing Solutions</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our dedicated team works closely with you to understand your unique </p>
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
                <img className="shape-left" src="assets/img/shapes/home2-shape2.png" alt="" />
            </div>
            {/*===== SERVICE BENEFITS AREA END =======*/}
        </>
    );
}
