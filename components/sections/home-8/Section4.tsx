import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work8 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading8">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/logo/span8.png" alt="" /> How we work
                                </span>
                                <h2 className="text-anime-style-3">Simple Staffing Procedures</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row _relative">
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1200}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon3.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Applicant Review</Link>
                                    </h4>
                                    <p>The applicant review process is vital step in ensuring that only.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow1.png" alt="" className="shape1" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon4.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Job Analysis</Link>
                                    </h4>
                                    <p>Job analysis is a critical process understanding defining specific.</p>
                                </div>
                                <img src="assets/img/shapes/work7-arrow2.png" alt="" className="shape2" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="work87-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                <div className="icon">
                                    <img src="assets/img/icons/service8-icon5.svg" alt="" />
                                </div>
                                <div className="heading">
                                    <h4>
                                        <Link href="/service-details">Job Place Check</Link>
                                    </h4>
                                    <p>Job Place Check is an essential component our best Recrute. </p>
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
