"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    },
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
};

export default function Section8() {
    return (
        <>
            {/*=====LOGO SLIDER AREA START=======*/}
            <div className="logo-slider-area sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="slider-pera">
                            <p> More Than 5K+ Brands With Work Recrute</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-all">
                                <Swiper {...swiperOptions} modules={[Autoplay, Navigation]} autoplay={{ delay: 5000, disableOnInteraction: false }} centeredSlides={true} className="logo-slider3">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo1.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo2.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo3.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo4.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo5.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo6.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo7.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo8.png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper {...swiperOptions} className="logo-slider4">
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo8.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo7.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo6.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo5.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo4.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo3.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo2.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide className="single-slider">
                                        <img src="assets/img/logo/slider3-logo1.png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====LOGO SLIDER AREA END=======*/}
        </>
    );
}
