"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const serviceCards = [
    {
        image: "assets/img/service/service1-img1.png",
        icon: "assets/img/icons/service1-icon1.png",
        title: "Employee on Record (EOR)",
        description: "Hire offshore talent without entity setup while we manage employment and compliance.",
    },
    {
        image: "assets/img/service/service1-img2.png",
        icon: "assets/img/icons/service1-icon2.png",
        title: "Recruitment & Subcontracting",
        description: "Permanent, contract, and project-based hiring across key business functions.",
        isActive: true,
    },
    {
        image: "assets/img/service/service1-img3.png",
        icon: "assets/img/icons/service1-icon3.png",
        title: "Payroll & Contractor Management",
        description: "End-to-end payroll, contractor onboarding, and compliance governance.",
    },
];

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1-w">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Our Service
                                </span>
                                <h2 className="text-anime-style-3">Complete Workforce Solutions for Australia</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={800}>
                                    We provide integrated services that help you recruit, engage, and manage talent with
                                    strong compliance and operational clarity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row d-none d-md-flex">
                        {serviceCards.map((card, index) => (
                            <div className="col-lg-4 col-md-6" key={card.title}>
                                <div className={`service1-box${card.isActive ? " active" : ""}`} data-aos="zoom-in-up" data-aos-duration={700 + index * 200}>
                                    <div className="image overlay-anim">
                                        <img src={card.image} alt="" />
                                    </div>
                                    <div className="hover-area">
                                        <div className="icon">
                                            <img src={card.icon} alt="" />
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1-w">
                                            <h4>
                                                <Link href="/service-details">{card.title}</Link>
                                            </h4>
                                            <div className="space16" />
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="space50" />
                        <div className="col-lg-12">
                            <div className="text-center" data-aos="zoom-in-up" data-aos-duration={700}>
                                <Link className="theme-btn3" href="/service">
                                    Let’s get started
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row d-md-none">
                        <Swiper autoplay={{ delay: 3000 }} slidesPerView={1} spaceBetween={20} className="service1-mobile-slider" data-aos="fade-up" data-aos-duration={800}>
                            {serviceCards.map((card) => (
                                <SwiperSlide key={card.title}>
                                    <div className={`service1-box${card.isActive ? " active" : ""}`}>
                                        <div className="image overlay-anim">
                                            <img src={card.image} alt="" />
                                        </div>
                                        <div className="hover-area">
                                            <div className="icon">
                                                <img src={card.icon} alt="" />
                                            </div>
                                            <div className="space16" />
                                            <div className="heading1-w">
                                                <h4>
                                                    <Link href="/service-details">{card.title}</Link>
                                                </h4>
                                                <div className="space16" />
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="space50" />
                        <div className="col-12">
                            <div className="text-center" data-aos="zoom-in-up" data-aos-duration={700}>
                                <Link className="theme-btn3" href="/service">
                                    Let’s get started
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
