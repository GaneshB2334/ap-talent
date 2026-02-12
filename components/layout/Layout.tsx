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
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
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

    useEffect(() => {
        if (typeof window !== "undefined") {
            const timeoutId = window.setTimeout(() => {
                AOS.refreshHard();
            }, 0);

            return () => {
                window.clearTimeout(timeoutId);
            };
        }
    }, [pathname]);

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
            <Header1 mainMenuStyle={mainMenuStyle} scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

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
