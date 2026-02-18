import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <section 
                className="about-page-sec1 sp overflow-hidden py-5" 
                style={{ backgroundColor: "var(--vtc-bg-bg-white)" }}
            >
                <div className="container py-lg-4">
                    <div className="row align-items-center">
                        
                        {/* LEFT COLUMN: Staggered Image Grid */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="about3-images pe-lg-4">
                                <div className="row g-4 align-items-center">
                                    {/* Column 1: Top Image + Bottom Stat */}
                                    <div className="col-6">
                                        <div 
                                            className="image overlay-anim mb-4 rounded-4 overflow-hidden shadow"
                                            data-aos="fade-down"
                                            data-aos-duration={800}
                                        >
                                            <img 
                                                src="assets/img/about/about3-img1.png" 
                                                alt="Office Team" 
                                                className="img-fluid w-100 object-fit-cover" 
                                                style={{ height: "280px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <div 
                                            className="conter-box bg-white p-4 rounded-4 shadow border text-center"
                                            data-aos="fade-up"
                                            data-aos-duration={1000}
                                            style={{ borderColor: "var(--vtc-border-border-1)" }}
                                        >
                                            <h3 className="fw-bold mb-1 display-6" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                <span className="counter">60</span>+
                                            </h3>
                                            <p className="mb-0 small fw-bold text-uppercase" style={{ color: "var(--vtc-bg-main-bg-1)", letterSpacing: "1px" }}>Global Clients</p>
                                        </div>
                                    </div>

                                    {/* Column 2: Top Stat + Bottom Image */}
                                    <div className="col-6 mt-5">
                                        <div 
                                            className="conter-box bg-white p-4 rounded-4 shadow border text-center mb-4"
                                            data-aos="fade-down"
                                            data-aos-duration={1000}
                                            style={{ borderColor: "var(--vtc-border-border-1)" }}
                                        >
                                            <h3 className="fw-bold mb-1 display-6" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                <span className="counter">6</span>
                                            </h3>
                                            <p className="mb-0 small fw-bold text-uppercase" style={{ color: "var(--vtc-bg-main-bg-1)", letterSpacing: "1px" }}>Countries Served</p>
                                        </div>
                                        <div 
                                            className="image overlay-anim rounded-4 overflow-hidden shadow"
                                            data-aos="fade-up"
                                            data-aos-duration={800}
                                        >
                                            <img 
                                                src="assets/img/about/about3-img2.png" 
                                                alt="Team Meeting" 
                                                className="img-fluid w-100 object-fit-cover"
                                                style={{ height: "280px", objectFit: "cover", objectPosition: "top" }} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Content */}
                        <div className="col-lg-6 ps-lg-5">
                            <div className="heading1 about3-heading">
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
                                    About Us
                                </span>

                                <h2 
                                    className="fw-bold display-6 mb-3" 
                                    style={{ color: "var(--vtc-text-heading-text-1)" }}
                                    data-aos="fade-left"
                                    data-aos-duration={800}
                                >
                                    AP Talent: Global Workforce Solutions, Delivered Right
                                </h2>
                                
                                <p 
                                    className="lead fs-6 mb-5" 
                                    style={{ color: "var(--vtc-text-pera-text-1)" }}
                                    data-aos="fade-left"
                                    data-aos-duration={900}
                                >
                                    AP Talent helps organisations build high-performing, scalable, and compliant teams across emerging markets and globally. As a
                                    subsidiary of NIAD Group Global, we bring international capability with local compliance and governance.
                                </p>

                                {/* Feature 1 */}
                                <div className="d-flex align-items-start mb-4" data-aos="fade-left" data-aos-duration={1000}>
                                    <div 
                                        className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3"
                                        style={{ 
                                            width: "50px", 
                                            height: "50px", 
                                            backgroundColor: "rgba(0, 188, 198, 0.1)"
                                        }}
                                    >
                                        <img src="assets/img/icons/about3-icon1.png" alt="Icon" width={24} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-2">
                                            <Link href="#" className="text-decoration-none" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                Global Strength, Local Delivery
                                            </Link>
                                        </h5>
                                        <p className="mb-0 small" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            Supported by a network across six countries and over 60 clients worldwide.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="d-flex align-items-start mb-5" data-aos="fade-left" data-aos-duration={1100}>
                                    <div 
                                        className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3"
                                        style={{ 
                                            width: "50px", 
                                            height: "50px", 
                                            backgroundColor: "rgba(0, 188, 198, 0.1)"
                                        }}
                                    >
                                        <img src="assets/img/icons/about3-icon2.png" alt="Icon" width={24} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-2">
                                            <Link href="#" className="text-decoration-none" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                                Compliance-Driven Solutions
                                            </Link>
                                        </h5>
                                        <p className="mb-0 small" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                            We deliver flexible recruitment, EOR, and payroll services aligned with local and international regulations.
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <div data-aos="fade-up" data-aos-duration={1200}>
                                    <Link 
                                        className="btn btn-lg px-4 py-3 rounded-pill fw-bold d-inline-flex align-items-center gap-2 text-white hover-elevate"
                                        href="/service"
                                        style={{ 
                                            backgroundColor: "var(--vtc-bg-main-bg-1)", 
                                            border: "none"
                                        }}
                                    >
                                        Explore Services
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