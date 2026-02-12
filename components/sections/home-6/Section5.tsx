"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".owl-next",
        prevEl: ".owl-prev",
    },
};

export default function Section5() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/*=====CASE AREA START=======*/}
            <div className="case6" id="case" style={{ backgroundImage: "url(assets/img/bg/service6-bg.jpg)" }}>
                <div className="project-two d-none d-lg-block">
                    <div className="project-two__bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="heading6">
                                        <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                            <img src="assets/img/icons/span6.svg" alt="" /> Case Studies
                                        </span>
                                        <h2 className="text-anime-style-3">Our Success All Project</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="project-two__carousel-container position-relative" data-aos="fade-up" data-aos-duration={900}>
                                <Swiper {...swiperOptions} className="project-there__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1">
                                    {/*Portfolio Two Single Start*/}
                                    <SwiperSlide className="project-two__single-box">
                                        <ul className="project-two__box list-unstyled">
                                            <li className={activeIndex === 0 ? "active" : ""} onMouseEnter={() => handleMouseEnter(0)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img1.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="#" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 1 ? "active" : ""} onMouseEnter={() => handleMouseEnter(1)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img2.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 2 ? "active" : ""} onMouseEnter={() => handleMouseEnter(2)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img3.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                    {/*Portfolio Two Single End*/}
                                    {/*Portfolio Two Single Start*/}
                                    <SwiperSlide className="project-two__single-box">
                                        <ul className="project-two__box list-unstyled">
                                            <li className={activeIndex === 0 ? "active" : ""} onMouseEnter={() => handleMouseEnter(0)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img1.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="#" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 1 ? "active" : ""} onMouseEnter={() => handleMouseEnter(1)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img2.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 2 ? "active" : ""} onMouseEnter={() => handleMouseEnter(2)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img3.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                    {/*Portfolio Two Single End*/}
                                    {/*Portfolio Two Single Start*/}
                                    <SwiperSlide className="project-two__single-box">
                                        <ul className="project-two__box list-unstyled">
                                            <li className={activeIndex === 0 ? "active" : ""} onMouseEnter={() => handleMouseEnter(0)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img1.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="#" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 1 ? "active" : ""} onMouseEnter={() => handleMouseEnter(1)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img2.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={activeIndex === 2 ? "active" : ""} onMouseEnter={() => handleMouseEnter(2)}>
                                                <div className="project-two__box-content">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/case-study/case6-img3.png)",
                                                        }}
                                                    ></div>
                                                    <div className="img-holder-img-bg" />
                                                    <div className="project-two__box-content-inner-icon">
                                                        <Link href="assets/img/service/service1-img1.png" className="img-popup">
                                                            <i className="icon-next" />
                                                        </Link>
                                                    </div>
                                                    <div className="project-two__box-content-inner">
                                                        <div className="project-two__box-content-inner-wrapper">
                                                            <p>Staffing Service </p>
                                                            <h4>
                                                                <Link href="/project-details">Demonstrating Our Expertise</Link>
                                                            </h4>
                                                        </div>
                                                        <div className="icon">
                                                            <Link href="/project-details">
                                                                <i className="fa-solid fa-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SwiperSlide>
                                    {/*Portfolio Two Single End*/}
                                </Swiper>
                                <div className="owl-nav">
                                    <button className="border-0 owl-prev">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </button>
                                    <button className="border-0 owl-next">
                                        <i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CASE AREA END=======*/}
        </>
    );
}
