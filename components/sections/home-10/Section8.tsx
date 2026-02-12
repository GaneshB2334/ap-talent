import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog10 sp overflow-hidden" id="blog" style={{ backgroundColor: "#F7F5FB" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="heading10">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span10.png" alt="" /> Contact us now
                                </span>
                                <h2 className="text-anime-style-3">Our Latest Blog &amp; News</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={800}>
                                    At Recrute, we understand that key to business success lies in having the right people on your team. That's why a we're committed to connecting you with top-tier talent.
                                </p>
                                <div className="space30" />
                                <div className="" data-aos="fade-right" data-aos-duration={900}>
                                    <Link className="theme-btn16" href="/blog">
                                        Read more blog
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="blog-box">
                                    <div className="">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/blog/blog7-image1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <Link href="#" className="date">
                                            <img src="assets/img/icons/date7.svg" alt="" /> 8 December 2025
                                        </Link>
                                        <h4>
                                            <Link href="/blog-details">How To Create An Recruitment Strategy For Your Best Business</Link>
                                        </h4>
                                        <Link href="/blog-details" className="learn">
                                            learn more
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="fade-up" data-aos-duration={700}>
                                <div className="blog-box">
                                    <div className="">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/blog/blog7-image2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <Link href="#" className="date">
                                            <img src="assets/img/icons/date7.svg" alt="" /> 8 December 2025
                                        </Link>
                                        <h4>
                                            <Link href="/blog-details">How Retain In Talent: Strategies for Best Employee Engagement</Link>
                                        </h4>
                                        <Link href="/blog-details" className="learn">
                                            learn more
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
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
