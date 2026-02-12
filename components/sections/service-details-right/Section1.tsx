import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-area right-padding">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>Recruitment &amp; Subcontracting Services</h2>
                                        <div className="space16" />
                                        <p>
                                            Finding the right professionals at the right time is critical for business success. We help Australian organisations source and
                                            deploy high-quality white-collar talent across IT, Finance, Business Operations, and Human Resources.
                                        </p>
                                        <div className="space30" />
                                        <h3>Service Focus Areas</h3>
                                        <div className="space16" />
                                        <p>Information Technology, Finance &amp; Accounting, Business Operations, and Human Resources.</p>
                                        <div className="space30" />
                                        <h3>What We Offer</h3>
                                        <div className="space16" />
                                        <p>Permanent recruitment, contract and temporary staffing, and subcontracting workforce solutions tailored to project and operational needs.</p>
                                        <div className="space16" />
                                        <p>End-to-end recruitment management, access to pre-screened talent pools, and compliance aligned to Australian regulations.</p>
                                    </div>
                                </article>
                                <div className="space30" />
                                <article>
                                    <div className="heading1">
                                        <h3>Our Recruitment Approach</h3>
                                        <div className="space16" />
                                        <p>We follow a structured process: requirements discovery, targeted sourcing, screening and assessment, interview support, onboarding, and ongoing engagement.</p>
                                        <div className="space16" />
                                        <p>This service is ideal for organisations needing specialised expertise, rapid scaling, or project-based support.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Permanent recruitment solutions aligned to role requirements, culture, and long-term goals.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Contract and project-based staffing with flexible engagement and compliance oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="space20" />
                                <div className="faq-all-area">
                                    <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item active">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Need permanent recruitment for key roles?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">We align skills, experience, and culture fit with structured screening and placement management.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Require contract or project-based resources?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">We provide flexible staffing and subcontracting support with compliance handled end-to-end.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Need access to pre-screened talent pools?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Our networks across IT, Finance, Operations, and HR reduce time-to-hire and improve quality.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    Need compliance and workforce governance?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">We align placements with Australian employment, taxation, and workplace compliance requirements.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-sidebar">
                                <div className="details-box3">
                                    <h3>Our Services</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/service-details">
                                                Employee on Record (EOR)
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Recruitment &amp; Subcontracting
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Payroll &amp; Contractor Management
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Compliance &amp; Governance
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                Offshore Workforce Expansion
                                                <span>
                                                    <i className="fa-regular fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-box-call">
                                    <h3>If You Need Any Help Contact With Us</h3>
                                    <div className="space10" />
                                    <Link href="tel:+917052101786" className="call-btn">
                                        <img src="assets/img/icons/details-call.png" alt="" /> +91 705 2101 786
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Download Brochure</h3>
                                    <p>Join us on this journey as we share our expertise, ignite conversations</p>
                                    <div className="space10" />
                                    <Link href="#" className="download-btn1">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                    <Link href="#" className="download-btn2">
                                        <img src="assets/img/icons/download-icon.png" alt="" /> Pdf Download
                                    </Link>
                                </div>
                                <div className="details-box2">
                                    <h3>Follow Us</h3>
                                    <div className="space10" />
                                    <ul className="icons">
                                        <li>
                                            <Link href="#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
