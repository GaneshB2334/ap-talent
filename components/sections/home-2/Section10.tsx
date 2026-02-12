import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog3 sp overflow-hidden" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading3">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    Latest News
                                </span>
                                <h2 className="text-anime-style-3">Explore Our Latest News &amp; Update</h2>
                                <div className="space16" />
                                <p data-aos="fade-up" data-aos-duration={800}>
                                    Our team of industry experts is dedicated to understanding your unique needs and delivering tailored solutions that propel your business forward.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="blog3-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="image">
                                    <img src="assets/img/blog/blog3-img1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="/blog-details">Get the Scoop: Our Latest News &amp; Announcements</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking to navigate your career path or enhance</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
                                            Learn More
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog3-box" data-aos="zoom-in-up" data-aos-duration={1100}>
                                <div className="image">
                                    <img src="assets/img/blog/blog3-img2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date.png" alt="" /> Apl 2,2025
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user.png" alt="" /> By Ethan Smith
                                        </Link>
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="/blog-details">The Hiring Handbook: Your Guide to Talent Shaping</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Whether you're looking to navigate your career path or enhance</p>
                                        <div className="blog1-border" />
                                        <Link href="/blog-details" className="learn">
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
                </div>
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}
