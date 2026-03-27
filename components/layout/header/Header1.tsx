import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            <header 
                className={`header-area header-area1 header-area-all d-none d-lg-block ${scroll ? "sticky-header" : ""}`}
                style={{
                    position: scroll ? "fixed" : "relative",
                    top: 0,
                    width: "100%",
                    zIndex: 1000,
                    backgroundColor: "var(--vtc-bg-bg-white)",
                    boxShadow: scroll ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.4s ease-in-out",
                    padding: scroll ? "10px 0" : "20px 0"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="header-elements d-flex align-items-center justify-content-between">
                                
                                {/* 1. Logo */}
                                <div className="site-logo">
                                    <Link href="/">
                                        <img 
                                            src="assets/img/logo/logo.png" 
                                            alt="Logo" 
                                            style={{ maxWidth: scroll ? "140px" : "170px", transition: "0.3s" }} 
                                        />
                                    </Link>
                                </div>

                                {/* 2. Navigation Links */}
                                <div className="main-menu-ex">
                                    {!mainMenuStyle && <MainMenu />}
                                </div>

                                {/* 3. Contact Details & CTA Combo */}
                                <div className="header-contact-area d-flex align-items-center gap-4">
                                    
                                    {/* Integrated Contact Info */}
                                    <div className="d-none d-xl-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="icon-box rounded-circle d-flex align-items-center justify-content-center" 
                                                 style={{ width: "40px", height: "40px", backgroundColor: "rgba(0, 188, 198, 0.1)" }}>
                                                <i className="fa-solid fa-phone-volume" style={{ color: "var(--vtc-bg-main-bg-1)" }}></i>
                                            </div>
                                            <div>
                                                <p className="mb-0 small fw-medium text-muted" style={{ fontSize: "12px" }}>Call Anytime</p>
                                                <a href="tel:+123456789" className="fw-bold text-dark text-decoration-none" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>
                                                    +1 (234) 567-890
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="icon-box rounded-circle d-flex align-items-center justify-content-center" 
                                                 style={{ width: "40px", height: "40px", backgroundColor: "rgba(0, 188, 198, 0.1)" }}>
                                                <i className="fa-solid fa-envelope" style={{ color: "var(--vtc-bg-main-bg-1)" }}></i>
                                            </div>
                                            <div>
                                                <p className="mb-0 small fw-medium text-muted" style={{ fontSize: "12px" }}>Email Us</p>
                                                <a href="mailto:info@example.com" className="fw-bold text-dark text-decoration-none" style={{ fontSize: "15px", whiteSpace: "nowrap" }}>
                                                    info@example.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider Line (Optional) */}
                                    <div style={{ width: "1px", height: "30px", backgroundColor: "#eee" }} className="d-none d-xl-block"></div>

                                    {/* CTA Button */}
                                    <div className="header-button">
                                        <Link 
                                            className="btn rounded-pill fw-bold d-flex align-items-center gap-2 px-4 py-2" 
                                            href="/contact"
                                            style={{ 
                                                backgroundColor: "var(--vtc-bg-main-bg-1)", 
                                                color: "#fff",
                                                border: "none"
                                            }}
                                        >
                                            Get A Quote
                                            <span className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
                                                <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px", color: "var(--vtc-bg-main-bg-1)" }} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <div className={`mobile-header d-block d-lg-none py-3 ${scroll ? "fixed-top bg-white shadow-sm" : ""}`}>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <Link href="/"><img src="assets/img/logo/logo.png" alt="Logo" style={{ maxWidth: "120px" }} /></Link>
                        <div className="d-flex align-items-center gap-3">
                             {/* Small icons for mobile users to tap immediately */}
                             <a href="mailto:info@example.com" className="text-dark"><i className="fa-solid fa-envelope"></i></a>
                             <a href="tel:+123456789" className="text-dark"><i className="fa-solid fa-phone"></i></a>
                             <div onClick={handleMobileMenu} className="fs-3"><i className="fa-solid fa-bars"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
        </>
    );
}
