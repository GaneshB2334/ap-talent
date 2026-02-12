import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero-area5" style={{ backgroundImage: "url(assets/img/bg/hero5-bg.png)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-right" data-aos-duration={700}>
                                    Staffing Power Your Success
                                </span>
                                <h1 className="text-anime-style-3">Seamless Staffing Solutions Where Success Begins</h1>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Our tailored staffing solutions streamline the hiring process, <br /> saving you time and resources while ensuring the perfect fit.
                                </p>
                                <div className="space30" />
                                <div className="hero2-buttons" data-aos="fade-left" data-aos-duration={900}>
                                    <Link className="theme-btn4" href="/service">
                                        Start Your Search
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link className="theme-btn5" href="/service">
                                        Discover More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images-all">
                                <div className="image1">
                                    <img src="assets/img/bg/hero5-main-image-bg.png" alt="" />
                                </div>
                                <div className="image2">
                                    <img src="assets/img/hero/hero5-main-image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape" src="assets/img/shapes/hero5-bottom-shape.png" alt="" />
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
