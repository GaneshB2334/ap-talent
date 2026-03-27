import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            <header>
                {/* --- Added Top Bar for Contact Info --- */}
                <div className="header-top-bar d-none d-lg-block" style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #eee", padding: "8px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end gap-4" style={{ fontSize: "14px" }}>
                                <Link href="mailto:accounts@aptalent.com.au" className="text-decoration-none text-muted">
                                    <i className="fa-solid fa-envelope me-2 text-info" /> 
                                    accounts@aptalent.com.au
                                </Link>
                                <Link href="tel:+61488838319" className="text-decoration-none text-muted">
                                    <i className="fa-solid fa-phone me-2 text-info" /> 
                                    +61 488 838 319
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- End Top Bar --- */}

                <div 
                    className={`header-area header-area1 header-area-all d-none d-lg-block ${scroll ? "sticky shadow-sm" : ""}`} 
                    id="header"
                    style={{ 
                        backgroundColor: "var(--vtc-bg-bg-white)",
                        transition: "all 0.3s ease-in-out",
                        padding: scroll ? "10px 0" : "15px 0" 
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements d-flex align-items-center justify-content-between">
                                    
                                    {/* 1. Logo Section */}
                                    <div className="site-logo">
                                        <Link href="/">
                                            <img 
                                                src="assets/img/logo/logo.png" 
                                                alt="AP Talent Solutions" 
                                                style={{ maxWidth: "180px", height: "auto" }}
                                            />
                                        </Link>
                                    </div>

                                    {/* 2. Main Menu (Centered) */}
                                    <div className="main-menu-ex main-menu-ex1">
                                        {!mainMenuStyle && <MainMenu />}
                                    </div>

                                    {/* 3. CTA Button (Right) */}
                                    <div className="header2-buttons">
                                        <div className="button">
                                            <Link 
                                                className="btn rounded-pill fw-bold d-flex align-items-center gap-2 px-4 py-2" 
                                                href="/contact"
                                                style={{ 
                                                    backgroundColor: "var(--vtc-bg-main-bg-1)", 
                                                    color: "#fff",
                                                    border: "none",
                                                    transition: "transform 0.3s ease"
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                                            >
                                                Get A Quote
                                                <span className="d-flex align-items-center justify-content-center bg-white text-info rounded-circle" style={{ width: "20px", height: "20px" }}>
                                                    <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px", color: "var(--vtc-bg-main-bg-1)" }} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </header>

            {/* Mobile Header */}
            <div 
                className="mobile-header mobile-header-main d-block d-lg-none py-3 shadow-sm"
                style={{ backgroundColor: "var(--vtc-bg-bg-white)" }}
            >
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements d-flex align-items-center justify-content-between">
                            <div className="mobile-logo">
                                <Link href="/">
                                    <img 
                                        src="assets/img/logo/logo.png" 
                                        alt="AP Talent Solutions" 
                                        style={{ maxWidth: "150px" }} 
                                    />
                                </Link>
                            </div>
                            <div 
                                className="mobile-nav-icon rounded p-2" 
                                onClick={handleMobileMenu}
                                style={{ 
                                    cursor: "pointer", 
                                    color: "var(--vtc-text-heading-text-1)",
                                    backgroundColor: "rgba(0, 188, 198, 0.1)"
                                }}
                            >
                                <i className="fa-solid fa-bars fs-4" />
                            </div>
                        </div>
                        {/* Added Phone link for mobile users below the logo row if needed */}
                        <div className="text-center mt-2 d-lg-none" style={{ fontSize: "12px" }}>
                             <Link href="tel:+61488838319" className="text-muted text-decoration-none">
                                <i className="fa-solid fa-phone me-1" /> +61 488 838 319
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
