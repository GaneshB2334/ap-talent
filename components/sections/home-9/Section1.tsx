import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero9" style={{ backgroundImage: "url(assets/img/bg/hero9-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Where Talent Meets Opportunity
                                </span>
                                <h1 className="text-anime-style-3">Discover Strategies For Hiring And Talent Best Management</h1>
                                <div className="space16" />
                                <p>
                                    At Recrute, we specialize connecting top-tier talent with <br /> industry-leading companies. Whether you're a business.
                                </p>
                                <div className="space30" />
                                <Link className="theme-btn15" href="/service">
                                    Schedule a Consultation
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-images">
                                <div className="image1" data-aos="zoom-out" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image1.png" alt="" />
                                </div>
                                <div className="image2" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
