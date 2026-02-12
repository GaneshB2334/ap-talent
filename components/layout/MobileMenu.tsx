"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpenSubMenus({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggleSubMenu = (key: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}
            {/*=====Mobile header start=======*/}
            <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logo-m">
                    <Link href="/">
                        <img src="assets/img/logo/header-logo1.png" alt="" />
                    </Link>
                </div>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    Service
                                </Link>
                                <span className={`submenu-button${openSubMenus["service"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("service")}>
                                    <em />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ display: openSubMenus["service"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/service">Service</Link>
                                </li>
                                <li>
                                    <Link href="/service-details">Service Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    Pages
                                </Link>
                                <span className={`submenu-button${openSubMenus["pages"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("pages")}>
                                    <em />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ display: openSubMenus["pages"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/team">Team</Link>
                                </li>
                                <li>
                                    <Link href="/testimonial">Testimonial</Link>
                                </li>
                                <li>
                                    <Link href="/terms">Terms</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    Blog
                                </Link>
                                <span className={`submenu-button${openSubMenus["blog"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("blog")}>
                                    <em />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ display: openSubMenus["blog"] ? "block" : "none" }}>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
