import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <section 
                className="service-details-all sp py-5" 
                style={{ backgroundColor: "var(--vtc-bg-common-bg2)" }} // Light Grey Background
            >
                <div className="container py-lg-4">
                    <div className="row">
                        
                        {/* SIDEBAR */}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="details-sidebar position-sticky" style={{ top: "100px" }}>
                                <div 
                                    className="details-box3 bg-white p-4 rounded-4 shadow-sm border"
                                    style={{ borderColor: "var(--vtc-border-border-1)" }}
                                >
                                    <h3 className="fw-bold mb-4" style={{ color: "var(--vtc-text-heading-text-1)" }}>Our Services</h3>
                                    <ul className="service-list list-unstyled p-0 m-0">
                                        <li className="mb-3">
                                            <Link 
                                                href="/service-details" 
                                                className="d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none fw-semibold"
                                                style={{ 
                                                    backgroundColor: "var(--vtc-bg-common-bg1)", // Active/Light Cyan
                                                    color: "var(--vtc-text-heading-text-1)",
                                                    borderLeft: "4px solid var(--vtc-bg-main-bg-1)"
                                                }}
                                            >
                                                Recruitment &amp; Subcontracting
                                                <i className="fa-solid fa-arrow-right" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link 
                                                href="/service-details" 
                                                className="d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none text-muted hover-bg-light"
                                                style={{ transition: "all 0.2s ease" }}
                                            >
                                                Employee on Record (EOR)
                                                <i className="fa-solid fa-arrow-right opacity-50" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link 
                                                href="/service-details" 
                                                className="d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none text-muted hover-bg-light"
                                                style={{ transition: "all 0.2s ease" }}
                                            >
                                                Payroll &amp; Contractor Management
                                                <i className="fa-solid fa-arrow-right opacity-50" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Optional Help Box */}
                                <div className="mt-4 bg-navy p-4 rounded-4 text-white text-center" style={{ backgroundColor: "var(--vtc-text-heading-text-1)" }}>
                                    <h4 className="fw-bold text-white mb-3">Need Help?</h4>
                                    <p className="small opacity-75 mb-4">Contact our team for a free consultation.</p>
                                    <Link href="/contact" className="btn btn-light rounded-pill fw-bold w-100" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="col-lg-8">
                            <div className="service-details-area ps-lg-4">
                                <article>
                                    <div className="heading1">
                                        {/* Main Image */}
                                        <div className="image mb-4 rounded-4 overflow-hidden shadow-sm">
                                            <img src="assets/img/service/service-details-img1.png" alt="Recruitment" className="img-fluid w-100 object-fit-cover" style={{ height: "400px" }} />
                                        </div>
                                        
                                        <h2 className="fw-bold display-6 mb-3" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                            Recruitment &amp; Subcontracting Services
                                        </h2>
                                        
                                        <p className="lead fs-6 mb-4" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            Finding the right professionals at the right time is critical for business success. We help organisations worldwide source and
                                            deploy high-quality white-collar talent across IT, Finance, Business Operations, and Human Resources.
                                        </p>

                                        {/* Focus Areas Card */}
                                        <div className="bg-white p-4 rounded-4 border mb-4" style={{ borderColor: "var(--vtc-bg-common-bg1)" }}>
                                            <h4 className="fw-bold mb-3" style={{ color: "var(--vtc-text-heading-text-1)" }}>Service Focus Areas</h4>
                                            <div className="d-flex flex-wrap gap-2">
                                                {["Information Technology", "Finance & Accounting", "Business Operations", "Human Resources"].map((tag, i) => (
                                                    <span key={i} className="badge rounded-pill px-3 py-2 fw-normal" style={{ backgroundColor: "var(--vtc-bg-common-bg1)", color: "var(--vtc-text-heading-text-1)" }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="fw-bold mb-3" style={{ color: "var(--vtc-text-heading-text-1)" }}>What We Offer</h3>
                                        <p className="mb-3" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            Permanent recruitment, contract and temporary staffing, and subcontracting workforce solutions tailored to project and operational needs.
                                        </p>
                                        <p className="mb-5" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            End-to-end recruitment management, access to pre-screened talent pools, and compliance aligned to local regulations.
                                        </p>
                                    </div>
                                </article>

                                <article>
                                    <div className="heading1">
                                        <h3 className="fw-bold mb-3" style={{ color: "var(--vtc-text-heading-text-1)" }}>Our Recruitment Approach</h3>
                                        <p className="mb-3" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            We follow a structured process: requirements discovery, targeted sourcing, screening and assessment, interview support, onboarding, and ongoing engagement.
                                        </p>
                                        
                                        <div className="row g-4 mt-2">
                                            <div className="col-lg-6">
                                                <div className="bg-white p-3 rounded-4 border h-100 shadow-sm hover-elevate">
                                                    <div className="image mb-3 rounded-3 overflow-hidden">
                                                        <img src="assets/img/service/service-details-img2.png" alt="Permanent" className="img-fluid w-100" />
                                                    </div>
                                                    <p className="mb-0 small fw-bold" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                        Permanent recruitment solutions aligned to role requirements, culture, and long-term goals.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="bg-white p-3 rounded-4 border h-100 shadow-sm hover-elevate">
                                                    <div className="image mb-3 rounded-3 overflow-hidden">
                                                        <img src="assets/img/service/service-details-img3.png" alt="Contract" className="img-fluid w-100" />
                                                    </div>
                                                    <p className="mb-0 small fw-bold" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                        Contract and project-based staffing with flexible engagement and compliance oversight.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                {/* FAQ Section */}
                                <div className="mt-5">
                                    <h3 className="fw-bold mb-4" style={{ color: "var(--vtc-text-heading-text-1)" }}>Common Questions</h3>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        
                                        {/* FAQ Item 1 */}
                                        <div className="accordion-item mb-3 rounded-3 border overflow-hidden">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button 
                                                    className="accordion-button fw-semibold" 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target="#flush-collapseOne" 
                                                    aria-expanded="true" 
                                                    aria-controls="flush-collapseOne"
                                                    style={{ backgroundColor: "var(--vtc-bg-bg-white)", color: "var(--vtc-text-heading-text-1)" }}
                                                >
                                                    Need permanent recruitment for key roles?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body text-muted">
                                                    We align skills, experience, and culture fit with structured screening and placement management.
                                                </div>
                                            </div>
                                        </div>

                                        {/* FAQ Item 2 */}
                                        <div className="accordion-item mb-3 rounded-3 border overflow-hidden">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button 
                                                    className="accordion-button collapsed fw-semibold" 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target="#flush-collapseTwo" 
                                                    aria-expanded="false" 
                                                    aria-controls="flush-collapseTwo"
                                                    style={{ backgroundColor: "var(--vtc-bg-bg-white)", color: "var(--vtc-text-heading-text-1)" }}
                                                >
                                                    Require contract or project-based resources?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body text-muted">
                                                    We provide flexible staffing and subcontracting support with compliance handled end-to-end.
                                                </div>
                                            </div>
                                        </div>

                                        {/* FAQ Item 3 */}
                                        <div className="accordion-item mb-3 rounded-3 border overflow-hidden">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button 
                                                    className="accordion-button collapsed fw-semibold" 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target="#flush-collapseThree" 
                                                    aria-expanded="false" 
                                                    aria-controls="flush-collapseThree"
                                                    style={{ backgroundColor: "var(--vtc-bg-bg-white)", color: "var(--vtc-text-heading-text-1)" }}
                                                >
                                                    Need access to pre-screened talent pools?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body text-muted">
                                                    Our networks across IT, Finance, Operations, and HR reduce time-to-hire and improve quality.
                                                </div>
                                            </div>
                                        </div>

                                        {/* FAQ Item 4 */}
                                        <div className="accordion-item rounded-3 border overflow-hidden">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button 
                                                    className="accordion-button collapsed fw-semibold" 
                                                    type="button" 
                                                    data-bs-toggle="collapse" 
                                                    data-bs-target="#flush-collapseFour" 
                                                    aria-expanded="false" 
                                                    aria-controls="flush-collapseFour"
                                                    style={{ backgroundColor: "var(--vtc-bg-bg-white)", color: "var(--vtc-text-heading-text-1)" }}
                                                >
                                                    Need compliance and workforce governance?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body text-muted">
                                                    We align placements with local employment, taxation, and workplace compliance requirements across all markets.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}