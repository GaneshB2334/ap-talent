"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section7() {
    return (
        <>
            {/*=====PROJECT AREA START=======*/}
            <div className="case6">
                <section className="project-two d-lg-block d-lg-none">
                    <div className="project-two__bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading6">
                                        <span className="span">
                                            <img src="assets/img/icons/span6.svg" alt="" /> Case Studies
                                        </span>
                                        <h2 className="text-anime-style-3">Our Success All Project</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="project-two__carousel-container">
                                <Swiper {...swiperOptions} className="project-two__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1">
                                    {/*Portfolio Two Single Start*/}
                                    <SwiperSlide className="project-two__single-box">
                                        <ul className="project-two__box project-two__box2 list-unstyled">
                                            <li className="active">
                                                <div className="project-two__box-content project-two__box-content2">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/project/project1-img1.png)",
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
                                        </ul>
                                    </SwiperSlide>
                                    {/*Portfolio Two Single End*/}
                                    {/*Portfolio Two Single Start*/}
                                    <SwiperSlide className="project-two__single-box">
                                        <ul className="project-two__box project-two__box2 list-unstyled">
                                            <li className="active">
                                                <div className="project-two__box-content project-two__box-content2">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/project/project1-img2.png)",
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
                                        <ul className="project-two__box project-two__box2 list-unstyled">
                                            <li className="active">
                                                <div className="project-two__box-content project-two__box-content2">
                                                    <div
                                                        className="single-project-two__bg"
                                                        style={{
                                                            backgroundImage: "url(assets/img/project/project1-img3.png)",
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
                                    <div className="swiper-pagination"></div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*=====PROJECT AREA END=======*/}
        </>
    );
}
