import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*===== BLOG AREA START =======*/}
            <div className="blog2 pb120 _relative" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Blog &amp; News
                                </span>
                                <h2 className="text-anime-style-3">Latest Trends in Talent Acquisition</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    Whether you're looking to navigate your career path or enhance your organization's hiring practices, our blog is your go-to destination for valuable insights
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="blog2-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog2-img1.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Career Compass: Navigating Your Professional Path</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Our blog covers a wide range of topics, from tips for optimizing your hiring process </p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                            <div className="blog2-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog2-img2.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Talent Chronicles: Stories from the Hiring Frontline</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Whether you're a hiring manager looking to stay ahead of industry trends or a candidate </p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                            <div className="blog2-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/blog/blog2-img3.png" alt="" />
                                </div>
                                <div className="heading2">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Recruitology: Where Recruitment Meets Technology</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Stay tuned for regular updates and valuable insights from our team of staffing experts. </p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape-right" src="assets/img/shapes/home2-shape1.png" alt="" />
            </div>
            {/*===== BLOG AREA END =======*/}
        </>
    );
}
