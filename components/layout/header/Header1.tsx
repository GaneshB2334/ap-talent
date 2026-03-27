import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            {/* Desktop Header */}
            <header 
                className={`header-area header-area1 header-area-all d-none d-lg-block ${scroll ? "sticky-header" : ""}`}
                style={{
                    position: scroll ? "fixed" : "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 1000,
                    backgroundColor: "var(--vtc-bg-bg-white)",
                    boxShadow: scroll ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: scroll ? "8px 0" : "15px 0"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="header-elements d-flex align-items-center justify-content-between">
                                
                                {/* 1. Logo Section */}
                                <div className="site-logo">
                                    <Link href="/" className="d-block">
                                        <img 
                                            src="assets/img/logo/logo.png" 
                                            alt="AP Talent Solutions" 
                                            style={{ 
                                                maxWidth: scroll ? "150px" : "180px", 
                                                height: "auto",
                                                transition: "max-width 0.3s ease" 
                                            }}
                                        />
                                    </Link>
                                </div>

                                {/* 2. Main Menu (Centered) */}
                                <div className="main-menu-ex">
                                    {!mainMenuStyle && <MainMenu />}
                                </div>

                                {/* 3. CTA Button (Right) */}
                                <div className="header-buttons">
                                    <Link 
                                        className="btn rounded-pill fw-bold d-flex align-items-center gap-2 px-4 py-2" 
                                        href="/contact"
                                        style={{ 
                                            backgroundColor: "var(--vtc-bg-main-bg-1)", 
                                            color: "#fff",
                                            border: "none",
                                            fontSize: "15px",
                                            transition: "all 0.3s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-3px)";
                                            e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 188, 198, 0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        Get A Quote
                                        <span className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "22px", height: "22px" }}>
                                            <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px", color: "var(--vtc-bg-main-bg-1)" }} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header - Improved layout and sticky logic */}
            <div 
                className={`mobile-header d-block d-lg-none py-3 ${scroll ? "fixed-top shadow-sm" : ""}`}
                style={{ 
                    backgroundColor: "var(--vtc-bg-bg-white)",
                    transition: "all 0.3s ease",
                    zIndex: 999
                }}
            >
                <div className="container">
                    <div className="mobile-header-elements d-flex align-items-center justify-content-between">
                        <div className="mobile-logo">
                            <Link href="/">
                                <img 
                                    src="assets/img/logo/logo.png" 
                                    alt="AP Talent Solutions" 
                                    style={{ maxWidth: "130px" }} 
                                />
                            </Link>
                        </div>
                        <div 
                            className="mobile-nav-icon rounded-circle d-flex align-items-center justify-content-center" 
                            onClick={handleMobileMenu}
                            style={{ 
                                cursor: "pointer", 
                                width: "45px",
                                height: "45px",
                                color: "var(--vtc-bg-main-bg-1)",
                                backgroundColor: "rgba(0, 188, 198, 0.1)",
                                border: "1px solid rgba(0, 188, 198, 0.2)"
                            }}
                        >
                            <i className="fa-solid fa-bars fs-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay Component */}
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
        </>
    );
}
