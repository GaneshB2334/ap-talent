import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="chosse1 sp overflow-hidden" id="choose">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="" data-aos="zoom-in-up" data-aos-duration={700}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon1.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">60</span>+
                                        </h3>
                                        <div className="space10" />
                                        <p>Global Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon2.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">6</span>
                                        </h3>
                                        <div className="space10" />
                                        <p>Countries Served</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="icon-box icon-box2">
                                    <div className="icon">
                                        <img src="assets/img/icons/choose1-icon3.png" alt="" />
                                    </div>
                                    <div className="heading1">
                                        <h3>
                                            <span className="counter">4</span>+
                                        </h3>
                                        <div className="space10" />
                                        <p>Core Focus Areas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image reveal overlay-anim">
                                <img src="assets/img/others/choose1-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="heading1 choose1-heading">
                                <span className="span" data-aos="fade-left" data-aos-duration={700}>
                                    Why Choose Us
                                </span>
                                <h2 className="text-anime-style-3">Global Strength, Local Compliance</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    As a subsidiary of NIAD Group Global, we combine international reach with Australian compliance and tailored workforce delivery.
                                </p>
                                <div className="space10" />
                                <div className="row" data-aos="fade-left" data-aos-duration={800}>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Compliance-First Delivery
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Flexible Workforce Models
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Global Talent Access
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="icon-list">
                                            <li>
                                                <span>
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Client-Centric Partnership
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <Link className="theme-btn1" href="/about">
                                        About US
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
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
