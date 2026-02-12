"use client";
import Link from "next/link";
import { useState } from "react";

export default function Section2() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about8 sp overflow-hidden" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="heading8">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/logo/span8.png" alt="" /> About recrute
                                </span>
                                <h2 className="text-anime-style-3">Elevate Your Workforce, Elevate Best Business</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={600}>
                                    At Recrute, we believe that the success of any business to hinges on having the right people in place. Our mission is to empower companies by providing access to top-tier.
                                </p>
                                <div className="space10" />
                                <div className="row" data-aos="fade-right" data-aos-duration={900}>
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Tailored Staffing Solutions
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Streamlined Hiring Process
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list">
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Ongoing Support
                                            </li>
                                            <li>
                                                <span className="check">
                                                    <i className="fa-solid fa-check" />
                                                </span>
                                                Experience Team
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="button" data-aos="fade-right" data-aos-duration={1200}>
                                    <Link className="theme-btn14" href="/about">
                                        Join Our Network
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about8-images">
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
                    </div>
                </div>
            </div>
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}
