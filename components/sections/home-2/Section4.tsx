import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====CASE AREA START=======*/}
            <div className="case3 sp overflow-hidden" id="case">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading3">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    Case Studies
                                </span>
                                <h2 className="text-anime-style-3">Elevate Your Talent Strategy</h2>
                                <div className="space16" />
                                <p data-aos="zoom-in-up" data-aos-duration={900}>
                                    Our tailored services include talent acquisition, recruitment expertise, and industry-specific staffing solutions to help you build
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="image-area image-area2 active" data-aos="zoom-in-up" data-aos-duration={800}>
                                        <div className="image">
                                            <img src="assets/img/case-study/case3-image1.png" alt="" />
                                        </div>
                                        <div className="heading-area">
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                            <p>Staffing Service</p>
                                            <h4>
                                                <Link href="/project-details">HR Consulting &amp; Staffing Support</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="image-area image-area2" data-aos="zoom-in-up" data-aos-duration={1200}>
                                        <div className="image">
                                            <img src="assets/img/case-study/case3-image2.png" alt="" />
                                        </div>
                                        <div className="heading-area">
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                            <p>Staffing Service</p>
                                            <h4>
                                                <Link href="/project-details">
                                                    HR Consulting &amp; <br /> Staffing Support
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="image-area image-area2" data-aos="zoom-in-up" data-aos-duration={700}>
                                        <div className="image">
                                            <img src="assets/img/case-study/case3-image3.png" alt="" />
                                        </div>
                                        <div className="heading-area">
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                            <p>Staffing Service</p>
                                            <h4>
                                                <Link href="/project-details">
                                                    HR Consulting &amp; <br /> Staffing Support
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="image-area image-area2" data-aos="zoom-in-up" data-aos-duration={900}>
                                        <div className="image">
                                            <img src="assets/img/case-study/case3-image4.png" alt="" />
                                        </div>
                                        <div className="heading-area">
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                            <p>Staffing Service</p>
                                            <h4>
                                                <Link href="/project-details">HR Consulting &amp; Staffing Support</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="image-area image-area3" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="image">
                                    <img src="assets/img/case-study/case3-image5.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <Link href="/project-details" className="icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                    <p>Staffing Service</p>
                                    <h4>
                                        <Link href="/project-details">
                                            HR Consulting &amp; <br /> Staffing Support
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CASE AREA END=======*/}
        </>
    );
}
