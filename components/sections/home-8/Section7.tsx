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
        nextEl: ".tes8-next-arrow",
        prevEl: ".tes8-prev-arrow",
    },
};

export default function Section7() {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className="tes8 sp overflow-hidden" id="tes" style={{ backgroundColor: "#F7F5FB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <div className="heading8">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/logo/span8.png" alt="" /> testimonials
                                </span>
                                <h2 className="text-anime-style-3">Stories From Our Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="big-image" data-aos="fade-up" data-aos-duration={900}>
                                <img src="assets/img/testimonial/tes8-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tes8-slider-area" data-aos="fade-up" data-aos-duration={900}>
                                <Swiper {...swiperOptions} className="tes8-slider">
                                    <SwiperSlide className="single-slider">
                                        <div className="qute">
                                            <img src="assets/img/icons/qute8.svg" alt="" />
                                        </div>
                                        <p>“I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a best greater artist than now. The lovely valley teems with vapor around me, &amp; the meridian sun strikes.</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes8-smoll-img.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <h5>
                                                    <Link href="#">Shakib Mahmud</Link>
                                                </h5>
                                                <span>Operating Officer</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <div className="qute">
                                            <img src="assets/img/icons/qute8.svg" alt="" />
                                        </div>
                                        <p>“I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a best greater artist than now. The lovely valley teems with vapor around me, &amp; the meridian sun strikes.</p>
                                        <div className="bottom-area">
                                            <div className="image">
                                                <img src="assets/img/testimonial/tes8-smoll-img.png" alt="" />
                                            </div>
                                            <div className="heading">
                                                <h5>
                                                    <Link href="#">Shakib Mahmud</Link>
                                                </h5>
                                                <span>Operating Officer</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="arrows-button">
                                    <button className="tes8-next-arrow">
                                        <i className="fa-solid fa-angle-left" />
                                    </button>
                                    <button className="tes8-prev-arrow">
                                        <i className="fa-solid fa-angle-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
