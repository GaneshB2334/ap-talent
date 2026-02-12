import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero6" style={{ backgroundImage: "url(assets/img/bg/hero6-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> Where Talent Meets Opportunity
                                </span>
                                <h1 className="text-anime-style-3">A Bridge Between Your Business And Exceptional Talent</h1>
                                <div className="space16" />
                                <p>At Recrute, we specialize connecting top-tier talent with industry-leading companies. Whether you're a business.</p>
                                <div className="space30" />
                                <Link className="theme-btn11" href="/service">
                                    Request A Consultation
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="images-all" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="image1">
                                    <img src="assets/img/hero/hero6-img1.png" alt="" />
                                </div>
                                <div className="image2">
                                    <img src="assets/img/hero/hero6-img2.png" alt="" />
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
