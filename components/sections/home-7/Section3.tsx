"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: false,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".service7-next-arrow1",
        prevEl: ".service7-prev-arrow1",
    },
};

export default function Section3() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service7 sp overflow-hidden" id="service" style={{ backgroundColor: "#F8F7FF" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading7">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span7.png" alt="" /> Our Service Areas
                                </span>
                                <h2 className="text-anime-style-3">Our Specialized Industries</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="arrows-button">
                                <button className="service7-next-arrow1">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button className="service7-prev-arrow1">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper {...swiperOptions} className="service7-slider" data-aos="fade-up" data-aos-duration={700}>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img1.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon1.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Accounting Finance</Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img2.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon2.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Digital marketing</Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img3.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon3.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Business Consulting </Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img1.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon1.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Accounting Finance</Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img2.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon2.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Digital marketing</Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="image">
                                    <img src="assets/img/case-study/case7-img3.png" alt="" />
                                    <Link href="/service-details" className="hover-icon">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service7-icon3.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h3>
                                            <Link href="/service-details">Business Consulting </Link>
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
