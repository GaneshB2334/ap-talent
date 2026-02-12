"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START=======*/}
            <div className="_relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".hero10-next-arrow",
                        prevEl: ".hero10-prev-arrow",
                    }}
                    loop={true}
                    className="hero10-sliders"
                >
                    <SwiperSlide className="hero10-single">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-10">
                                    <div className="main-heading">
                                        <span className="span">
                                            <img src="assets/img/icons/span10.png" alt="" /> Where Talent Meets Opportunity
                                        </span>
                                        <h1>
                                            Discover Strategies <br /> for Hiring And Talent Best Management
                                        </h1>
                                        <div className="space16" />
                                        <p>
                                            We specialize connecting top-tier talent with leading company <br /> across various industries. Our team of experienced recruiters.
                                        </p>
                                        <div className="space30" />
                                        <div className="button">
                                            <Link className="theme-btn16" href="/service">
                                                Request A Consultation
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="hero10-single">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-10">
                                    <div className="main-heading">
                                        <span className="span">
                                            <img src="assets/img/icons/span10.png" alt="" /> Where Talent Meets Opportunity
                                        </span>
                                        <h1>
                                            Discover Strategies <br /> for Hiring And Talent Best Management
                                        </h1>
                                        <div className="space16" />
                                        <p>
                                            We specialize connecting top-tier talent with leading company <br /> across various industries. Our team of experienced recruiters.
                                        </p>
                                        <div className="space30" />
                                        <div className="button">
                                            <Link className="theme-btn16" href="/service">
                                                Request A Consultation
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero10-btns z-2">
                    <button className="hero10-next-arrow">
                        <i className="fa-solid fa-arrow-left" />
                    </button>
                    <button className="hero10-prev-arrow">
                        <i className="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
