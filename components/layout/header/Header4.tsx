import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage4 from "../MainMenuOnePage4";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            <div className="header5-top d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="icon-text">
                                <Link href="#">
                                    <img src="assets/img/icons/header5-top-icon1.png" alt="" /> Demo@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="icon-text">
                                <Link href="#">
                                    <img src="assets/img/icons/header5-top-icon2.png" alt="" /> 73 Bridge St Brooklyn, USA.
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="icon-text">
                                <Link href="#">
                                    <img src="assets/img/icons/header5-top-icon3.png" alt="" /> Tuesday - Saturday 8:00 Am - 5:00 Pm
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="icon-text">
                                <Link href="tel:+92152226132">
                                    <img src="assets/img/icons/header5-top-icon4.png" alt="" /> Call Now: +921 5222 6132
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className={`header-area header-area5 header-area-all d-none d-lg-block ${scroll ? "sticky" : ""} `} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/">
                                            <img src="assets/img/logo/header-logo5.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1">
                                        {!mainMenuStyle && <MainMenu />}
                                        {mainMenuStyle == "one-page" ? <MainMenuOnePage4 /> : null}
                                    </div>
                                    <div className="header2-buttons">
                                        <div className="button">
                                            <Link className="theme-btn4" href="/contact">
                                                Get A Quote
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
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
            <div className="mobile-header mobile-header-main d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/index1">
                                    <img src="assets/img/logo/header-logo1.png" alt="" />
                                </Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-duotone fa-bars-staggered" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
