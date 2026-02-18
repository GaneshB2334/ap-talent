import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <section 
                className="work1 sp overflow-hidden py-5" 
                id="work"
                style={{ backgroundColor: "var(--vtc-bg-bg-white)" }}
            >
                <div className="container py-lg-4">
                    <div className="row align-items-center">
                        
                        {/* LEFT COLUMN: Framed Image */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="position-relative pe-lg-5" data-aos="fade-right" data-aos-duration={700}>
                                
                                
                                {/* Main Image Frame */}
                                <div 
                                    className="position-relative bg-white p-3 rounded-4 shadow-sm"
                                    style={{ 
                                        zIndex: 1, 
                                        border: "1px solid var(--vtc-border-border-1)" 
                                    }}
                                >
                                    <div className="overflow-hidden rounded-3">
                                        <img 
                                            src="assets/img/work/work1-image.png" 
                                            alt="Team Collaboration" 
                                            className="img-fluid w-100 object-fit-cover"
                                            style={{ minHeight: "500px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Content & Cards */}
                        <div className="col-lg-6">
                            <div className="heading1 work1-heading ps-lg-4">
                                {/* Badge */}
                                <span 
                                    className="d-inline-block px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                    data-aos="zoom-in-left" 
                                    data-aos-duration={700}
                                    style={{ 
                                        backgroundColor: "rgba(0, 188, 198, 0.1)", 
                                        color: "var(--vtc-bg-main-bg-1)",
                                        fontSize: "12px",
                                        letterSpacing: "1px"
                                    }}
                                >
                                    How Our Services Work Together
                                </span>

                                <h2 
                                    className="text-anime-style-3 fw-bold display-6 mb-3"
                                    style={{ color: "var(--vtc-text-heading-text-1)" }}
                                >
                                    Flexible Workforce Solutions for Global Organizations
                                </h2>
                                
                                <p 
                                    className="mb-4 lead fs-6" 
                                    data-aos="fade-left" 
                                    data-aos-duration={900}
                                    style={{ color: "var(--vtc-text-pera-text-1)" }}
                                >
                                    Our services can be tailored to meet specific organisational needs.
                                </p>

                                {/* Service Cards Container */}
                                <div className="d-flex flex-column gap-3 mt-4">
                                    
                                    {/* Card 1 */}
                                    <div 
                                        className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-center gap-4 hover-elevate"
                                        data-aos="fade-left" 
                                        data-aos-duration={900}
                                        style={{ transition: "all 0.3s ease", borderColor: "var(--vtc-border-border-1)" }}
                                    >
                                        <div 
                                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                            style={{ 
                                                width: "60px", 
                                                height: "60px", 
                                                backgroundColor: "rgba(0, 188, 198, 0.1)",
                                                color: "var(--vtc-bg-main-bg-1)"
                                            }}
                                        >
                                            <img src="assets/img/icons/work1-icon1.png" alt="Icon" width={30} />
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                                                <Link href="/service-details" className="text-decoration-none" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                    Employee on Record (EOR)
                                                </Link>
                                            </h4>
                                            <p className="mb-0 small" style={{ color: "var(--vtc-text-pera-text-1)", lineHeight: "1.5" }}>
                                                Offshore workforce solutions without entity setup, with employment compliance managed by us.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div 
                                        className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-center gap-4 hover-elevate"
                                        data-aos="fade-left" 
                                        data-aos-duration={1000}
                                        style={{ transition: "all 0.3s ease", borderColor: "var(--vtc-border-border-1)" }}
                                    >
                                        <div 
                                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                            style={{ 
                                                width: "60px", 
                                                height: "60px", 
                                                backgroundColor: "rgba(0, 188, 198, 0.1)",
                                                color: "var(--vtc-bg-main-bg-1)"
                                            }}
                                        >
                                            <img src="assets/img/icons/work1-icon2.png" alt="Icon" width={30} />
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                                                <Link href="/service-details" className="text-decoration-none" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                    Recruitment &amp; Subcontracting
                                                </Link>
                                            </h4>
                                            <p className="mb-0 small" style={{ color: "var(--vtc-text-pera-text-1)", lineHeight: "1.5" }}>
                                                Permanent recruitment, contract staffing, and subcontracting across key professional sectors.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div 
                                        className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-center gap-4 hover-elevate"
                                        data-aos="fade-left" 
                                        data-aos-duration={1100}
                                        style={{ transition: "all 0.3s ease", borderColor: "var(--vtc-border-border-1)" }}
                                    >
                                        <div 
                                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                            style={{ 
                                                width: "60px", 
                                                height: "60px", 
                                                backgroundColor: "rgba(0, 188, 198, 0.1)",
                                                color: "var(--vtc-bg-main-bg-1)"
                                            }}
                                        >
                                            <img src="assets/img/icons/work1-icon3.png" alt="Icon" width={30} />
                                        </div>
                                        <div>
                                            <h4 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                                                <Link href="/service-details" className="text-decoration-none" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                    Payroll &amp; Contractor Management
                                                </Link>
                                            </h4>
                                            <p className="mb-0 small" style={{ color: "var(--vtc-text-pera-text-1)", lineHeight: "1.5" }}>
                                                Payroll processing, contractor onboarding, PAYG and superannuation compliance, and reporting.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*=====WORK AREA END=======*/}
        </>
    );
}