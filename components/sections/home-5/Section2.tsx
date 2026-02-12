import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about2 sp2 _relative" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="image reveal overlay-anim">
                                <img src="assets/img/about/about2-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    About Us
                                </span>
                                <h2 className="text-anime-style-3">Transforming Businesses, Elevating Careers </h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={1000}>
                                    With a steadfast commitment to excellence, we specialize in connecting exceptional professionals with top-tier companies, fostering mutually beneficial
                                </p>
                                <div className="space10" />
                                <div className="about1-box" data-aos="fade-left" data-aos-duration={800}>
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about1-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading2">
                                        <h5>
                                            <Link href="/service-details">Empowering Careers, Driving Growth</Link>
                                        </h5>
                                        <div className="space10" />
                                        <p>Whether you're a company seeking to build performing teams or a talented individual ready to take the next</p>
                                    </div>
                                </div>
                                <div className="about1-box" data-aos="fade-left" data-aos-duration={1200}>
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about1-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading2">
                                        <h5>
                                            <Link href="/service-details">Connecting Talent, Powering Success</Link>
                                        </h5>
                                        <div className="space10" />
                                        <p>Our team of industry experts is dedicated understanding your unique needs and delivering tailored solution</p>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <Link className="theme-btn4" href="/about">
                                        Learn More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape-left" src="assets/img/shapes/home2-shape2.png" alt="" />
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
