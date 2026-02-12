import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work1 sp overflow-hidden" id="work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-img reveal overlay-anim">
                                <img src="assets/img/work/work1-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 work1-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    How Our Services Work Together
                                </span>
                                <h2 className="text-anime-style-3">Flexible Workforce Solutions for Australian Businesses</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Our services can be tailored to meet specific organisational needs.
                                </p>
                                <div className="space10" />
                                <div className="" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Employee on Record (EOR)</Link>
                                            </h4>
                                            <p>Offshore workforce solutions without entity setup, with employment compliance managed by us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={700}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Recruitment &amp; Subcontracting</Link>
                                            </h4>
                                            <p>Permanent recruitment, contract staffing, and subcontracting across key professional sectors.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="work1-box">
                                        <div className="">
                                            <div className="icon">
                                                <img src="assets/img/icons/work1-icon3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="heading1">
                                            <h4>
                                                <Link href="/service-details">Payroll &amp; Contractor Management</Link>
                                            </h4>
                                            <p>Payroll processing, contractor onboarding, PAYG and superannuation compliance, and reporting.</p>
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
