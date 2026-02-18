import Link from "next/link";
import React from "react";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START=======*/}
            <section 
                className="hero-area1 position-relative overflow-hidden" 
                style={{ 
                    backgroundColor: "var(--vtc-bg-common-bg2)", 
                    padding: "80px 0",
                    minHeight: "80vh", // Reduced height slightly for better compactness
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {/* Background Decor */}
                <div 
                    className="position-absolute top-0 end-0 h-100" 
                    style={{ 
                        width: "35%", 
                        background: "linear-gradient(to left, rgba(0, 188, 198, 0.05), transparent)", 
                        zIndex: 0 
                    }} 
                />

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row align-items-center">
                        
                        {/* LEFT CONTENT */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="main-heading pe-lg-5">
                                {/* Badge */}
                                <span 
                                    className="d-inline-block px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                    data-aos="fade-right" 
                                    data-aos-duration={800}
                                    style={{ 
                                        backgroundColor: "rgba(0, 188, 198, 0.1)", 
                                        color: "var(--vtc-bg-main-bg-1)",
                                        fontSize: "12px",
                                        letterSpacing: "1px"
                                    }}
                                >
                                    AP Talent
                                </span>

                                {/* Heading - Reduced Size */}
                                <h1 
                                    className="fw-bold mb-3 text-anime-style-3" 
                                    style={{ 
                                        color: "var(--vtc-text-heading-text-1)", 
                                        lineHeight: "1.2",
                                        fontSize: "3.2rem" // Reduced from display-4 (~4.5rem)
                                    }}
                                >
                                    Complete Workforce Solutions for <span style={{ color: "var(--vtc-bg-main-bg-1)" }}>Global</span> Businesses
                                </h1>
                                
                                <p 
                                    className="mb-4" 
                                    data-aos="fade-right" 
                                    data-aos-duration={1000}
                                    style={{ 
                                        color: "var(--vtc-text-pera-text-1)", 
                                        fontSize: "18px",
                                        lineHeight: "1.6",
                                        maxWidth: "90%"
                                    }}
                                >
                                    We provide integrated workforce services that help organisations attract, engage,
                                    and manage skilled professionals locally and globally.
                                </p>
                                
                                <div className="d-flex flex-wrap gap-3 mb-5" data-aos="fade-right" data-aos-duration={1200}>
                                    <Link 
                                        href="/service" 
                                        className="btn px-4 py-3 rounded-3 d-flex align-items-center gap-2 fw-semibold text-white shadow-sm hover-elevate"
                                        style={{ backgroundColor: "var(--vtc-bg-main-bg-1)", border: "none" }}
                                    >
                                        Our Services
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                    
                                    <Link 
                                        href="/about" 
                                        className="btn px-4 py-3 rounded-3 d-flex align-items-center gap-2 fw-semibold"
                                        style={{ 
                                            backgroundColor: "transparent", 
                                            border: "1px solid var(--vtc-text-heading-text-1)",
                                            color: "var(--vtc-text-heading-text-1)" 
                                        }}
                                    >
                                        About Us
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>

                                {/* Trust Metrics */}
                                <div className="row g-4 pt-3 border-top" style={{ borderColor: "var(--vtc-border-border-2)" }}>
                                    <div className="col-auto">
                                        <h3 className="fw-bold m-0" style={{ color: "var(--vtc-text-heading-text-1)", fontSize: "24px" }}>500+</h3>
                                        <p className="small m-0 text-muted">Successful Placements</p>
                                    </div>
                                    <div className="col-auto border-start ps-4" style={{ borderColor: "var(--vtc-border-border-2)" }}>
                                        <h3 className="fw-bold m-0" style={{ color: "var(--vtc-text-heading-text-1)", fontSize: "24px" }}>98%</h3>
                                        <p className="small m-0 text-muted">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT - Clean Framed Look */}
                        <div className="col-lg-6">
                            <div className="position-relative text-center text-lg-end ps-lg-5">

                                {/* 2. Main Image Frame */}
                                <div 
                                    className="position-relative d-inline-block rounded-4 overflow-hidden shadow-lg"
                                    style={{ zIndex: 1, borderRadius: "24px", width: "100%", maxWidth: "550px" }}
                                    data-aos="zoom-in" 
                                    data-aos-duration={1000}
                                >
                                    <img 
                                        src="assets/img/hero/hero7-image2.png" // Ensure this is a rectangular image, not a cutout
                                        alt="Professional Team" 
                                        className="img-fluid" 
                                        style={{ objectFit: "cover", width: "100%", height: "auto" }} 
                                    />
                                    
                                    {/* Overlay Gradient (Optional, for text readability if needed) */}
                                    <div style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "30%",
                                        background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
                                    }}></div>
                                </div>

                                {/* 3. Floating Badge: Verified Talent (Top Left overlapping) */}
                                <div 
                                    className="position-absolute bg-white rounded-3 shadow p-3 d-flex align-items-center gap-3"
                                    style={{ top: "40px", left: "20px", zIndex: 2, minWidth: "200px", textAlign: "left" }}
                                    data-aos="fade-down" 
                                    data-aos-delay="200"
                                >
                                    <div className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0" 
                                         style={{ width: "40px", height: "40px", backgroundColor: "var(--vtc-bg-main-bg-1)" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <div style={{ lineHeight: "1.2" }}>
                                        <span className="d-block fw-bold text-dark" style={{ fontSize: "14px" }}>Verified Talent</span>
                                        <small className="text-muted" style={{ fontSize: "12px" }}>Expertly Vetted</small>
                                    </div>
                                </div>

                                {/* 4. Floating Badge: Team count (Bottom Right overlapping) */}
                                <div 
                                    className="position-absolute bg-white rounded-3 shadow p-3"
                                    style={{ bottom: "30px", right: "-10px", zIndex: 3, textAlign: "left" }}
                                    data-aos="fade-up" 
                                    data-aos-delay="400"
                                >
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="d-flex">
                                            {/* Small avatars */}
                                            <span className="rounded-circle bg-light border border-2 border-white" style={{width:"30px", height:"30px", overflow:"hidden", display:"inline-block"}}><img src="assets/img/others/1.png" style={{width:"100%"}} alt=""/></span>
                                            <span className="rounded-circle bg-light border border-2 border-white" style={{width:"30px", height:"30px", overflow:"hidden", display:"inline-block", marginLeft: "-10px"}}><img src="assets/img/others/2.png" style={{width:"100%"}} alt=""/></span>
                                            <span className="rounded-circle bg-light border border-2 border-white" style={{width:"30px", height:"30px", overflow:"hidden", display:"inline-block", marginLeft: "-10px"}}><img src="assets/img/others/3.png" style={{width:"100%"}} alt=""/></span>
                                        </div>
                                        <div>
                                            <span className="d-block fw-bold text-dark" style={{ fontSize: "14px" }}>2k+ Experts</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*=====HERO AREA END=======*/}
        </>
    );
}