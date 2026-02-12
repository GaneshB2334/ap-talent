import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service9 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Our Service Areas
                                </span>
                                <h2 className="text-anime-style-3">Tailored Solutions For Your Hiring Needs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 01</span>
                                    <h4>
                                        <Link href="/service-details">Accounting Finance</Link>
                                    </h4>
                                    <p>Tailored solutions that align with their objectives. From temporary staffing.</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 02</span>
                                    <h4>
                                        <Link href="/service-details">Digital marketing</Link>
                                    </h4>
                                    <p>Our services encompass every stage of hiring process, from identifying.</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 03</span>
                                    <h4>
                                        <Link href="/service-details">BUsiness Consulting</Link>
                                    </h4>
                                    <p>We understand that every business is unique, which is why we take best .</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image4.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 04</span>
                                    <h4>
                                        <Link href="/service-details">technology services</Link>
                                    </h4>
                                    <p>We leverage our extensive network, industry expertise, and cutting-edge.</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image5.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 05</span>
                                    <h4>
                                        <Link href="/service-details">Logistics Services</Link>
                                    </h4>
                                    <p>Our team of expert recruiters works closely with you to understand your.</p>
                                    <Link href="/service-details" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image6.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 01</span>
                                    <h4>
                                        <Link href="/service-details">Front Line Support</Link>
                                    </h4>
                                    <p>We provide flexible staffing solutions that can scale with your business.</p>
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
                    <div className="space40" />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="text-center">
                                <Link className="theme-btn15" href="/service">
                                    view more services
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
