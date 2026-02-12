import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero-area2" style={{ backgroundImage: "url(assets/img/bg/hero2-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    World Top #1 Staffing Agency
                                </span>
                                <h1 className="text-anime-style-3">Seamless Staffing Solutions Where Success Begins</h1>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Our tailored staffing solutions streamline the hiring process, <br /> saving you time and resources while ensuring the perfect fit.
                                </p>
                                <div className="space30" />
                                <div className="hero2-buttons" data-aos="fade-left" data-aos-duration={1000}>
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
                            <div className="images">
                                <div className="image1" data-aos="zoom-in-up" data-aos-duration={700}>
                                    <img src="assets/img/bg/hero2-main-shape-bg.png" alt="" />
                                </div>
                                <div className="image2" data-aos="zoom-in-up" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero2-main-img.png" alt="" />
                                </div>
                                <div className="image3 animate4">
                                    <img src="assets/img/shapes/hero2-main-shape.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape1 animate1" src="assets/img/shapes/hero2-span.png" alt="" />
                <img className="shape2 animate2" src="assets/img/shapes/hero2-span.png" alt="" />
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
