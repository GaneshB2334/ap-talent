"use client";
import Link from "next/link";
import { useState } from "react";
export default function Section3() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about10 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="about10-images">
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
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="heading10">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span10.png" alt="" /> About recrute
                                </span>
                                <h2 className="text-anime-style-3">Driving Success With A Expert Finance Staffing</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={700}>
                                    At Recrute, we understand that key to business success lies in having the right people on your team. That's why a we're committed to connecting you with top-tier talent.
                                </p>
                                <div className="row" data-aos="fade-left" data-aos-duration={900}>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>1K+</h3>
                                            <p>Expert Team</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>98%</h3>
                                            <p>Client Satisfaction</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="counter-box">
                                            <h3>99%</h3>
                                            <p>Success Rate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                                    <Link className="theme-btn16" href="/about">
                                        Join Our Network
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
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
