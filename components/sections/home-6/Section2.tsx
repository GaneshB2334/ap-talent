import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about6 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images-all" data-aos="zoom-out" data-aos-duration={900}>
                                <div className="image1">
                                    <img src="assets/img/about/about6-img1.png" alt="" />
                                </div>
                                <div className="image2">
                                    <img src="assets/img/about/about6-img2.png" alt="" />
                                </div>
                                <div className="image3 animate3">
                                    <img src="assets/img/about/about6-img3.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> About recrute
                                </span>
                                <h2 className="text-anime-style-3">Empowering Businesses With A Best Right Talent</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    At Recrute, we believe that the success of any business to hinges on having the right people in place. Our mission is to empower companies by providing access to top-tier.
                                </p>
                                <div className="space10" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list" data-aos="fade-left" data-aos-duration={1000}>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Tailored Staffing Solutions
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Streamlined Hiring Process
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list" data-aos="fade-left" data-aos-duration={1200}>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Ongoing Support
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Experience Team
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="button" data-aos="fade-left" data-aos-duration={900}>
                                    <Link className="theme-btn11" href="/about">
                                        Join Our Network
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
