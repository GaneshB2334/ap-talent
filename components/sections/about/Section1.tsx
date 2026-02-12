import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about-page-sec1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about3-images">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img1.png" alt="" />
                                        </div>
                                        <div className="conter-box conter-box1">
                                            <h3>
                                                <span className="counter">60</span>+
                                            </h3>
                                            <p>Global Clients</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="conter-box conter-box2">
                                            <h3>
                                                <span className="counter">6</span>
                                            </h3>
                                            <p>Countries Served</p>
                                        </div>
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 about3-heading">
                                <span className="span">About Us</span>
                                <h2>AP Talent Australia: Workforce Solutions, Delivered Right</h2>
                                <div className="space16" />
                                <p>
                                    AP Talent Australia helps organisations build high-performing, scalable, and compliant teams across Australia and offshore. As a
                                    subsidiary of NIAD Group Global, we bring international capability with local compliance and governance.
                                </p>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Global Strength, Local Delivery</Link>
                                        </h5>
                                        <p>Supported by a network across six countries and over 60 clients worldwide.</p>
                                    </div>
                                </div>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                                            <Link href="#">Compliance-Driven Workforce Solutions</Link>
                                        </h5>
                                        <p>We deliver flexible recruitment, EOR, and payroll services aligned with Australian regulations.</p>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="">
                                    <Link className="theme-btn1" href="/service">
                                        Explore Services
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
