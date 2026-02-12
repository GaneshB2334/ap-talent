import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero8" style={{ backgroundImage: "url(assets/img/bg/hero8-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> Where Talent Meets Opportunity
                                </span>
                                <h1 className="text-anime-style-3">Discover Strategies For Hiring And Talent Best Management</h1>
                                <div className="space30" />
                                <Link className="theme-btn14" href="/service">
                                    Schedule a Consultation
                                </Link>
                                <div className="shape animate3">
                                    <img src="assets/img/shapes/hero8-shape1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/img/hero/hero8-image1.png" alt="" className="image1" />
                <img src="assets/img/hero/hero8-image2.png" alt="" className="image2" />
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
