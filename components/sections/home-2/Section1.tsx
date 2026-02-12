"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="Y8XpQpW5OVY" onClose={() => setIsOpen(false)} />

            {/*=====HERO AREA START =======*/}
            <div className="hero-area3" style={{ backgroundImage: "url(assets/img/bg/hero3-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-right" data-aos-duration={700}>
                                    Staffing Power Your Success
                                </span>
                                <h1 className="text-anime-style-3">Power Your Success Where Talent Meets Opportunity</h1>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={700}>
                                    Our tailored staffing solutions streamline the hiring process, <br /> saving you time and resources while ensuring the perfect fit.
                                </p>
                                <div className="space30" />
                                <div className="buttons" data-aos="fade-right" data-aos-duration={900}>
                                    <Link className="theme-btn6" href="/service">
                                        Start Your Search
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link className="theme-btn7" href="/service">
                                        Discover More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="reating-area" data-aos="fade-right" data-aos-duration={1100}>
                                    <p className="pera">Trusted By 5,789 Users</p>
                                    <div className="reating">
                                        <div className="stars">
                                            <ul>
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
                                        </div>
                                        <div className="reating-h">
                                            <p>
                                                <span>4K</span> Happy Client
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img className="arrow-shape" src="assets/img/shapes/heading3-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images-all">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="image">
                                            <img src="assets/img/hero/hero3-img1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="image">
                                            <img src="assets/img/hero/hero3-img2.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <div className="image video-area">
                                            <img src="assets/img/hero/hero3-img3.png" alt="" />
                                            <div className="video-buttton play-btn">
                                                <Link href="#" onClick={() => setIsOpen(true)} id="play-video play-btn" className="video-play-button">
                                                    <span />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}
