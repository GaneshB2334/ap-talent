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
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
};

export default function Section6() {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className="tes3 sp overflow-hidden" id="team">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading3">
                                <span className="span" data-aos-duration={800} data-aos="zoom-in-left">
                                    Testimonial
                                </span>
                                <h2 className="text-anime-style-3">Real Stories, Real Results </h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={900}>
                                    Discover why businesses trust us to find the right talent and candidates trust us to find the perfect fit.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tes7-buttons" data-aos="fade-left" data-aos-duration={800}>
                                <button className="testimonial-prev-arrow1">
                                    <i className="fa-regular fa-arrow-left" />
                                </button>
                                <button className="testimonial-next-arrow1">
                                    <i className="fa-regular fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <Swiper {...swiperOptions} className="tes1-slider" data-aos="fade-up" data-aos-duration={800}>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>"Discover what our clients have to say about their experience with Recrute. From small businesses to Fortune 500 companies, our tailored staffing solutions have left a lasting impact on organizations across industries. With a focus on excellence”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img1.png" alt="" />
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="#">Junaid Hasan</Link>
                                        </h4>
                                        <p>Vp,Daily Naws</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>“From startups seeking their first hires to established corporations aiming to expand their teams, our tailored staffing solutions have consistently exceeded expectations. With testimonials highlighting our ability to find the perfect , our tailored staffing solutions”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img2.png" alt="" />
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="#">Amir Jamil</Link>
                                        </h4>
                                        <p>Co Funder</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>"Discover what our clients have to say about their experience with Recrute. From small businesses to Fortune 500 companies, our tailored staffing solutions have left a lasting impact on organizations across industries. With a focus on excellence”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img1.png" alt="" />
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="#">Junaid Hasan</Link>
                                        </h4>
                                        <p>Vp,Daily Naws</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>“From startups seeking their first hires to established corporations aiming to expand their teams, our tailored staffing solutions have consistently exceeded expectations. With testimonials highlighting our ability to find the perfect , our tailored staffing solutions”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img2.png" alt="" />
                                    </div>
                                    <div className="heading3">
                                        <h4>
                                            <Link href="#">Amir Jamil</Link>
                                        </h4>
                                        <p>Co Funder</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
