"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section1() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero7" style={{ backgroundImage: "url(assets/img/bg/hero7-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> Where Talent Meets Opportunity
                                </span>
                                <h1 className="text-anime-style-3">A Bridge Between Your Business And Exceptional Talent</h1>
                                <div className="space16" />
                                <p>At Recrute, we specialize connecting top-tier talent with industry-leading companies. Whether you're a business.</p>
                                <div className="space30" />
                                <Link className="theme-btn13" href="/service">
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero7-images">
                                <div className="cs_height_118 cs_height_lg_70" />
                                <div className="cs_case_study_1_list">
                                    <div className={`cs_case_study cs_style_1 cs_hover_active ${activeIndex === 0 ? "active" : ""}`} onMouseEnter={() => handleMouseEnter(0)}>
                                        <div className="cs_case_study_thumb cs_bg_filed" data-src="assets/img/hero/hero7-image1.png" />
                                    </div>
                                    <div className={`cs_case_study cs_style_1 cs_hover_active ${activeIndex === 1 ? "active" : ""}`} onMouseEnter={() => handleMouseEnter(1)}>
                                        <div className="cs_case_study_thumb cs_case_study_thumb2 cs_bg_filed" data-src="assets/img/about/about1-img1.png" />
                                    </div>
                                    <div className={`cs_case_study cs_style_1 cs_hover_active ${activeIndex === 2 ? "active" : ""}`} onMouseEnter={() => handleMouseEnter(2)}>
                                        <div className="cs_case_study_thumb cs_case_study_thumb3 cs_bg_filed" data-src="assets/img/about/about1-img1.png" />
                                    </div>
                                </div>
                                <img src="assets/img/shapes/hero7-shape.png" alt="" className="shape shape-animaiton4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
