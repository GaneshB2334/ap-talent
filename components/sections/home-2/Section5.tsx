import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work3 sp overflow-hidden" id="work" style={{ backgroundImage: "url(assets/img/bg/work3-bg.png)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading3-w">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    How It Work
                                </span>
                                <h2 className="text-anime-style-3">Our Portfolio: Showcasing Successful Placements</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading3-w">
                                <p data-aos="fade-left" data-aos-duration={700}>
                                    Through our tailored staffing solutions and industry expertise, we've facilitated countless success stories, from small businesses to Fortune 500 companies Our portfolio highlights
                                </p>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={1000}>
                                    <Link className="theme-btn6" href="#">
                                        See Plans
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="work3-box work3-box2">
                                <div className="image">
                                    <img src="assets/img/work/work3-icon1.png" alt="" />
                                </div>
                                <div className="heading3-w">
                                    <h4>
                                        <Link href="/service-details">Employee On-Boarding Checklist</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>We offer a comprehensive suite of staffing solutions designed to meet your organization's evolving needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work3-box work3-box2">
                                <div className="image">
                                    <img src="assets/img/work/work3-icon2.png" alt="" />
                                </div>
                                <div className="heading3-w">
                                    <h4>
                                        <Link href="/service-details">Employee On-Boarding Checklist</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Browse our latest openings, explore new opportunities, and take the next step towards your professional goals</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work3-box">
                                <div className="image">
                                    <img src="assets/img/work/work3-icon3.png" alt="" />
                                </div>
                                <div className="heading3-w">
                                    <h4>
                                        <Link href="/service-details">Take Care of Employee’s Benefits</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>With our proven track record and commitment to excellence, we're here support your</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape" src="assets/img/shapes/work3-shape.png" alt="" />
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}
