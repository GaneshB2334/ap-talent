import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className="team6 sp overflow-hidden" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> team members
                                </span>
                                <h2 className="text-anime-style-3">Get to Know Our Professionals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-box" data-aos="zoom-in-up" data-aos-duration={600}>
                                <div className="image image-anime">
                                    <img src="assets/img/team/team6-img1.png" alt="" />
                                    <div className="hover-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading-area">
                                    <div className="heading">
                                        <h4>
                                            <Link href="#">Jofra Archer</Link>
                                        </h4>
                                        <p>Founder Partner</p>
                                    </div>
                                    <div className="shere-icon">
                                        <Link href="#">
                                            <img src="assets/img/icons/shere-icon6.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="image image-anime">
                                    <img src="assets/img/team/team6-img2.png" alt="" />
                                    <div className="hover-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading-area">
                                    <div className="heading">
                                        <h4>
                                            <Link href="#">Mitchel Starc</Link>
                                        </h4>
                                        <p>Senior Advisor</p>
                                    </div>
                                    <div className="shere-icon">
                                        <Link href="#">
                                            <img src="assets/img/icons/shere-icon6.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="image image-anime">
                                    <img src="assets/img/team/team6-img3.png" alt="" />
                                    <div className="hover-area">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-x-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading-area">
                                    <div className="heading">
                                        <h4>
                                            <Link href="#">MD. Saifuddin</Link>
                                        </h4>
                                        <p>Web Developer</p>
                                    </div>
                                    <div className="shere-icon">
                                        <Link href="#">
                                            <img src="assets/img/icons/shere-icon6.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/img/shapes/team6-shape.png" alt="" className="sec-shape" />
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
