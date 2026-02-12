"use client";
import { DataBg } from "@/util/data-bg";
import { useOffcanvasMenu } from "@/util/offcanvasMenu";
import { useAccordion } from "@/util/useAccordion";
import { useCircleText } from "@/util/useCircleText";
import { useOdometerCounter } from "@/util/useOdometerCounter";
import { useParallaxEffect } from "@/util/useParallaxEffect";
import useTextAnimation2 from "@/util/useTextAnimation2";
import useTextAnimation3 from "@/util/useTextAnimation3";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import ScrollToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Footer5 from "./footer/Footer5";
import Footer6 from "./footer/Footer6";
import Footer7 from "./footer/Footer7";
import Footer8 from "./footer/Footer8";
import Footer9 from "./footer/Footer9";
import Footer10 from "./footer/Footer10";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";
import Header6 from "./header/Header6";
import Header7 from "./header/Header7";
import Header8 from "./header/Header8";
import Header9 from "./header/Header9";
import Header10 from "./header/Header10";
import "wowjs/css/libs/animate.css";
import { useRevealAnimation } from "@/util/useRevealAnimation";

// Define the props interface (same as above)
interface BootstrapComponentsProps {}

// Type the dynamic import
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
    () => import("@/util/useBootstrap"),
    { ssr: false } // Disable SSR since this is client-side only
) as FC<BootstrapComponentsProps>;

interface LayoutProps {
    headerStyle?: Number;
    mainMenuStyle?: string;
    footerStyle?: Number;
    children?: React.ReactNode;
    bodyName?: string;
}

export default function Layout({ headerStyle, mainMenuStyle, footerStyle, children, bodyName }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const handleMobileMenu = (): void => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
            });

            const handleScroll = (): void => {
                const scrollCheck: boolean = window.scrollY > 100;
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck);
                }
            };

            document.addEventListener("scroll", handleScroll);

            return () => {
                document.removeEventListener("scroll", handleScroll);
            };
        }
    }, [scroll]);

    DataBg();
    useTextAnimation2();
    useTextAnimation3();
    useOffcanvasMenu();
    useAccordion();
    useCircleText();
    useOdometerCounter();
    useParallaxEffect();
    useRevealAnimation();
    return (
        <div className={`body ${bodyName ? bodyName : ""}`}>
            <div id="top" />
            <BootstrapComponents />
            {!headerStyle && <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 2 ? <Header2 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 3 ? <Header3 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 4 ? <Header4 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 5 ? <Header5 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 6 ? <Header6 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 7 ? <Header7 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 8 ? <Header8 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 9 ? <Header9 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 10 ? <Header10 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}

            <main>{children}</main>

            {!footerStyle && <Footer1 />}
            {footerStyle == 1 ? <Footer1 /> : null}
            {footerStyle == 2 ? <Footer2 /> : null}
            {footerStyle == 3 ? <Footer3 /> : null}
            {footerStyle == 4 ? <Footer4 /> : null}
            {footerStyle == 5 ? <Footer5 /> : null}
            {footerStyle == 6 ? <Footer6 /> : null}
            {footerStyle == 7 ? <Footer7 /> : null}
            {footerStyle == 8 ? <Footer8 /> : null}
            {footerStyle == 9 ? <Footer9 /> : null}
            {footerStyle == 10 ? <Footer10 /> : null}

            <ScrollToTop />
        </div>
    );
}
