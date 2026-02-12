"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import Link from "next/link";

export default function Section7() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    return (
        <>
            {/*===== testimonials  starts=======*/}
            <div className="testimonial4-section-area sp2 _relative" id="tes" style={{ backgroundColor: "#F8F7FF" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading7">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span7.png" alt="" /> testimonials
                                </span>
                                <h2 className="text-anime-style-3">Stories From Our Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="scetion-background">
                                <img src="assets/img/testimonial/tes7-bg.png" alt="" />
                            </div>
                            <div className="testimonial-sliders">
                                <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-8">
                                        <Swiper
                                            modules={[Navigation, Thumbs]}
                                            navigation={{
                                                nextEl: ".testimonial-next-arrow2",
                                                prevEl: ".testimonial-prev-arrow2",
                                            }}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            className="slider-galeria"
                                        >
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img2.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img3.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img4.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img2.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img3.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img4.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-slider-content-area">
                                                <div className="testimonial3-author-area">
                                                    <ul>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">
                                                                <i className="fa-solid fa-star" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/icons/qute7.svg" alt="" />
                                                </div>
                                                <p>
                                                    "I cannot express how grateful I am for the legal has <br /> expertise and support provided by Your Law Firm to <br /> Name. Facing criminal charges was a nightmare, but <br /> their team was a beacon of hope my darkest”
                                                </p>
                                                <div className="testimonial3-man-info-area">
                                                    <div className="mans-img">
                                                        <img src="assets/img/testimonial/tes7-img2.png" alt="" />
                                                    </div>
                                                    <div className="man3-text">
                                                        <Link href="">Ben Stokes</Link>
                                                        <p>Owner Taxfirm</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="testimonial-arrows2">
                                            <div>
                                                <button className="testimonial-prev-arrow2">
                                                    <i className="fa-solid fa-angle-left" />
                                                </button>
                                            </div>
                                            <div>
                                                <button className="testimonial-next-arrow2">
                                                    <i className="fa-solid fa-angle-right" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <Swiper onSwiper={setThumbsSwiper} direction="vertical" spaceBetween={10} slidesPerView={4} style={{ height: "450px" }} className="slider-galeria-thumbs d-lg-block d-none text-center">
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img2.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img3.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img4.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img1.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img2.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img3.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img4.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="testimonial3-sliders-img">
                                                <img src="assets/img/testimonial/tes7-img4.png" alt="" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== testimonials  end=======*/}
        </>
    );
}
