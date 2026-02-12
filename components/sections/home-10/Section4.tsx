import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service10 sp overflow-hidden" id="service" style={{ backgroundColor: "#F7F5FB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading10">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span10.png" alt="" /> Service areas
                                </span>
                                <h2 className="text-anime-style-3">Driving Success With A Expert Finance Staffing</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon1.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Accounting Finance</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon2.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Digital marketing</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon3.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Business consulting</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon4.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">technology services</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon5.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">logistic services</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-mg-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="service-box">
                                <div className="icon">
                                    <img src="assets/img/icons/service10-icon6.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">front line support</Link>
                                    </h4>
                                    <p>We excel in connected highly best skilled accounting &amp; finance professionals with organizations that demand precision</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
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
