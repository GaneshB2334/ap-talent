import Link from "next/link";
import React from "react";

export default function Section3() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <section 
                className="chosse1 sp overflow-hidden py-5" 
                id="choose" 
                style={{ backgroundColor: "var(--vtc-bg-common-bg2)" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* COLUMN 1: STATS CARDS */}
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            <div className="d-flex flex-column justify-content-center h-100">
                                
                                {/* Card 1 */}
                                <div 
                                    className="rounded-4 shadow-sm p-4 text-center mb-4" 
                                    data-aos="fade-up" 
                                    data-aos-duration={700}
                                    style={{ 
                                        backgroundColor: "var(--vtc-bg-bg-white)",
                                        border: "1px solid var(--vtc-border-border-1)"
                                    }}
                                >
                                    <div className="mb-3 d-inline-block">
                                        <img src="assets/img/icons/choose1-icon1.png" alt="Clients" width={40} />
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-1 display-6" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                            <span className="counter">60</span>+
                                        </h3>
                                        <p className="small fw-medium mb-0" style={{ color: "var(--vtc-text-pera-text-3)" }}>Clients Worldwide</p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div 
                                    className="rounded-4 shadow-sm p-4 text-center mb-4" 
                                    data-aos="fade-up" 
                                    data-aos-duration={900}
                                    style={{ 
                                        backgroundColor: "var(--vtc-bg-bg-white)",
                                        border: "1px solid var(--vtc-border-border-1)"
                                    }}
                                >
                                    <div className="mb-3 d-inline-block">
                                        <img src="assets/img/icons/choose1-icon2.png" alt="Countries" width={40} />
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-1 display-6" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                            <span className="counter">6</span>
                                        </h3>
                                        <p className="small fw-medium mb-0" style={{ color: "var(--vtc-text-pera-text-3)" }}>Countries Served</p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div 
                                    className="rounded-4 shadow-sm p-4 text-center" 
                                    data-aos="fade-up" 
                                    data-aos-duration={1100}
                                    style={{ 
                                        backgroundColor: "var(--vtc-bg-bg-white)",
                                        border: "1px solid var(--vtc-border-border-1)"
                                    }}
                                >
                                    <div className="mb-3 d-inline-block">
                                        <img src="assets/img/icons/choose1-icon3.png" alt="Services" width={40} />
                                    </div>
                                    <div>
                                        <h3 className="fw-bold mb-1 display-6" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                            <span className="counter">3</span>
                                        </h3>
                                        <p className="small fw-medium mb-0" style={{ color: "var(--vtc-text-pera-text-3)" }}>Core Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 2: CENTER IMAGE */}
                        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 text-center">
                            <div className="image reveal overlay-anim d-flex align-items-center justify-content-center h-100">
                                <img 
                                    src="assets/img/others/choose1-img.png" 
                                    alt="Team working" 
                                    className="img-fluid rounded-4 shadow"
                                    style={{ objectFit: "cover", maxHeight: "600px", width: "100%" }} 
                                />
                            </div>
                        </div>

                        {/* COLUMN 3: CONTENT TEXT */}
                        <div className="col-lg-4 col-md-12 ps-lg-4">
                            <div className="heading1 choose1-heading">
                                {/* Badge */}
                                <span 
                                    className="badge px-3 py-2 rounded-pill mb-3 fw-bold text-uppercase"
                                    style={{ 
                                        backgroundColor: "var(--vtc-bg-common-bg1)", 
                                        color: "var(--vtc-bg-main-bg-1)",
                                        letterSpacing: "1px"
                                    }} 
                                    data-aos="fade-left" 
                                    data-aos-duration={700}
                                >
                                    Why Choose Us
                                </span>

                                <h2 className="fw-bold mb-3 lh-sm" style={{ fontSize: "2.5rem", color: "var(--vtc-text-heading-text-1)" }}>
                                    Why Choose AP Talent
                                </h2>
                                
                                <p className="mb-4 lead fs-6" style={{ color: "var(--vtc-text-pera-text-1)" }} data-aos="fade-left" data-aos-duration={900}>
                                    We deliver flexible workforce solutions with strong compliance, governance, and global talent access.
                                </p>
                                
                                <div className="row g-3 mb-4" data-aos="fade-left" data-aos-duration={800}>
                                    {[
                                        "Industry-Focused Workforce Expertise",
                                        "Compliance-Driven Service Delivery",
                                        "Flexible Workforce Solutions",
                                        "Global Talent Access"
                                    ].map((item, index) => (
                                        <div className="col-12" key={index}>
                                            <div className="d-flex align-items-center">
                                                <span 
                                                    className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                                                    style={{ 
                                                        width: "24px", 
                                                        height: "24px", 
                                                        backgroundColor: "var(--vtc-bg-common-bg1)", 
                                                        color: "var(--vtc-bg-main-bg-1)" 
                                                    }}
                                                >
                                                    <i className="fa-solid fa-check" style={{ fontSize: "12px" }} />
                                                </span>
                                                <span className="fw-bold" style={{ color: "var(--vtc-text-heading-text-3)" }}>{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div data-aos="fade-left" data-aos-duration={1100}>
                                    <Link 
                                        href="/about" 
                                        className="btn btn-lg px-4 py-3 rounded-3 d-inline-flex align-items-center gap-2 fw-semibold"
                                        style={{ 
                                            backgroundColor: "var(--vtc-bg-main-bg-1)", 
                                            color: "var(--vtc-text-text-white-text-1)",
                                            border: "none"
                                        }}
                                    >
                                        About US
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}