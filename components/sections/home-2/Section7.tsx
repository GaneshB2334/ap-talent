import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className="team3 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading3">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    Our Team
                                </span>
                                <h2 className="text-anime-style-3">Meet the Minds Behind Our Success</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={900}>
                                    Comprised of industry experts, dedicated recruiters, and passionate professionals, we are committed to delivering exceptional staffing solutions tailored to your unique needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team3-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="image-area">
                                    <div className="image">
                                        <img src="assets/img/team/team3-img1.png" alt="" />
                                    </div>
                                    <div className="icons">
                                        <ul>
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
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="#">Siam Ayes</Link>
                                    </h4>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team3-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="image-area">
                                    <div className="image">
                                        <img src="assets/img/team/team3-img2.png" alt="" />
                                    </div>
                                    <div className="icons">
                                        <ul>
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
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="#">Sandeep Sharma </Link>
                                    </h4>
                                    <p>Senior Consultant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team3-box" data-aos="zoom-in-up" data-aos-duration={900}>
                                <div className="image-area">
                                    <div className="image">
                                        <img src="assets/img/team/team3-img3.png" alt="" />
                                    </div>
                                    <div className="icons">
                                        <ul>
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
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="heading3">
                                    <h4>
                                        <Link href="#">Riyan Parag</Link>
                                    </h4>
                                    <p>VP, Finance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
