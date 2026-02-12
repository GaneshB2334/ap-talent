"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section6() {
    return (
        <>
            {/*===== TESTIMONIAL AREA START =======*/}
            <div className="tes2 pb120" id="testimonial">
                <div className="container">
                    <div className="row align-items-center tes5-bg" style={{ backgroundImage: "url(assets/img/bg/tes5-bg.png)" }}>
                        <div className="col-lg-6">
                            <div className="image overlay-anim">
                                <img src="assets/img/testimonial/testimonial2-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    Clients Testimonials
                                </span>
                                <h2 className="text-anime-style-3">
                                    What Our Customer’s <br /> Say About Us
                                </h2>
                            </div>
                            <div className="space40" />
                            <Swiper {...swiperOptions} className="tes2-slider owl-carousel">
                                <SwiperSlide className="tes2-signle-slider">
                                    <div className="icon">
                                        <img src="assets/img/icons/tes2-icon.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <p>“Hear directly from our satisfied clients about their experiences working with us. Our dedication to finding the right talent, streamlining the hiring process, and fostering”</p>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="image-bottom">
                                            <img src="assets/img/testimonial/tes2-img.png" alt="" />
                                        </div>
                                        <div className="heading-bottom">
                                            <h5>
                                                Matthew C. Lansberry <span>/ CEO &amp; Founder</span>
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="tes2-signle-slider">
                                    <div className="icon">
                                        <img src="assets/img/icons/tes2-icon.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <p>“Hear directly from our satisfied clients about their experiences working with us. Our dedication to finding the right talent, streamlining the hiring process, and fostering”</p>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="image-bottom">
                                            <img src="assets/img/testimonial/tes2-img.png" alt="" />
                                        </div>
                                        <div className="heading-bottom">
                                            <h5>
                                                Matthew C. Lansberry <span>/ CEO &amp; Founder</span>
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="tes2-signle-slider">
                                    <div className="icon">
                                        <img src="assets/img/icons/tes2-icon.png" alt="" />
                                    </div>
                                    <div className="heading">
                                        <p>“Hear directly from our satisfied clients about their experiences working with us. Our dedication to finding the right talent, streamlining the hiring process, and fostering”</p>
                                    </div>
                                    <div className="bottom-area">
                                        <div className="image-bottom">
                                            <img src="assets/img/testimonial/tes2-img.png" alt="" />
                                        </div>
                                        <div className="heading-bottom">
                                            <h5>
                                                Matthew C. Lansberry <span>/ CEO &amp; Founder</span>
                                            </h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== TESTIMONIAL AREA END =======*/}
        </>
    );
}
