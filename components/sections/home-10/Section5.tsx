import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work10 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading10">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span10.png" alt="" /> How it works
                                </span>
                                <h2 className="text-anime-style-3">Simple Staffing Procedures</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700}>
                                    <div className="work-box">
                                        <div className="image-area">
                                            <div className="image overlay-anim">
                                                <img src="assets/img/work/work10-img1.png" alt="" />
                                            </div>
                                            <div className="step">
                                                <p>Step 1</p>
                                            </div>
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                <Link href="/service-details">Job Analysis</Link>
                                            </h4>
                                            <p>Job analysis is a critical process understanding defining specific.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={900}>
                                    <div className="work-box top">
                                        <div className="image-area">
                                            <div className="image overlay-anim">
                                                <img src="assets/img/work/work10-img2.png" alt="" />
                                            </div>
                                            <div className="step">
                                                <p>Step 2</p>
                                            </div>
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                <Link href="/service-details">Job Place Check</Link>
                                            </h4>
                                            <p>Job Place Check is an essential component our best Recrute.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                                    <div className="work-box">
                                        <div className="image-area">
                                            <div className="image overlay-anim">
                                                <img src="assets/img/work/work10-img3.png" alt="" />
                                            </div>
                                            <div className="step">
                                                <p>Step 3</p>
                                            </div>
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                <Link href="/service-details">Applicant Review</Link>
                                            </h4>
                                            <p>The applicant review process is vital step in ensuring that only.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}
