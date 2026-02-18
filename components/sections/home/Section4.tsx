"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const serviceCards = [
    {
        image: "assets/img/service/service1-img1.png",
        title: "Employee on Record (EOR)",
        description: "Hire offshore talent without entity setup while we manage employment and compliance.",
        isActive: false,
    },
    {
        image: "assets/img/service/service1-img2.png",
        title: "Recruitment & Subcontracting",
        description: "Permanent, contract, and project-based hiring across key business functions.",
        isActive: true, // This maps to the center highlight in the image
    },
    {
        image: "assets/img/service/service1-img3.png",
        title: "Payroll & Management",
        description: "End-to-end payroll, contractor onboarding, and compliance governance.",
        isActive: false,
    },
];

export default function Section4() {

    // Shared Card Component for Consistency between Grid and Swiper
    const ServiceCard = ({ card }: { card: any }) => (
        <div
            className="service-card position-relative rounded-4 overflow-hidden"
            style={{
                height: "450px",
                border: card.isActive ? "2px solid var(--vtc-bg-main-bg-1)" : "1px solid var(--vtc-border-border-1)",
                boxShadow: card.isActive ? "0 20px 40px rgba(0, 188, 198, 0.15)" : "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                backgroundColor: "#000" // Fallback
            }}
        >
            {/* Background Image */}
            <img
                src={card.image}
                alt={card.title}
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{
                    transition: "transform 0.5s ease",
                    opacity: 0.9
                }}
            />

            {/* Gradient Overlay - Replaces the Orange Overlay with Professional Dark Fade */}
            <div
                className="position-absolute bottom-0 start-0 w-100 h-100"
                style={{
                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 40%, transparent 100%)",
                    zIndex: 1
                }}
            />

            {/* Content */}
            <div
                className="position-absolute bottom-0 start-0 w-100 p-4"
                style={{ zIndex: 2 }}
            >
                <h3
                    className="fw-bold mb-3"
                    style={{
                        color: "var(--vtc-text-text-white-text-1)",
                        fontSize: "24px",
                        lineHeight: "1.3"
                    }}
                >
                    {card.title}
                </h3>

                <p
                    className="mb-4"
                    style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "15px",
                        lineHeight: "1.6"
                    }}
                >
                    {card.description}
                </p>

                {/* Button only prominent on Active card, or simple link on others */}
                {card.isActive ? (
                    <Link
                        href="/service-details"
                        className="btn px-4 py-2 rounded-pill fw-semibold text-white d-inline-flex align-items-center gap-2"
                        style={{ backgroundColor: "var(--vtc-bg-main-bg-1)", border: "none" }}
                    >
                        View Solution
                        <i className="fa-solid fa-arrow-right" />
                    </Link>
                ) : (
                    <Link
                        href="/service-details"
                        className="text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                        style={{ fontSize: "14px" }}
                    >
                        Learn More <i className="fa-solid fa-arrow-right" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                    </Link>
                )}
            </div>
        </div>
    );

    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <section
                className="service1 sp overflow-hidden py-5"
                id="service"
                style={{ backgroundColor: "var(--vtc-bg-common-bg1)" }} // Light Cyan Tint Background
            >
                <div className="container py-lg-4">
                    {/* Header */}
                    <div className="row mb-5">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1-w">
                                <span
                                    className="d-inline-block px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                    data-aos="zoom-in-left"
                                    data-aos-duration={700}
                                    style={{
                                        backgroundColor: "rgba(0, 188, 198, 0.1)",
                                        color: "var(--vtc-bg-main-bg-1)",
                                        fontSize: "12px",
                                        letterSpacing: "1px"
                                    }}
                                >
                                    Our Services
                                </span>
                                <h2
                                    className="text-anime-style-3 fw-bold display-5 mb-3"
                                    style={{ color: "var(--vtc-text-heading-text-1)" }}
                                >
                                    Complete Workforce Solutions
                                </h2>
                                <p
                                    className="lead mx-auto"
                                    style={{ color: "var(--vtc-text-pera-text-1)", maxWidth: "600px" }}
                                    data-aos="fade-left"
                                    data-aos-duration={800}
                                >
                                    We provide integrated services that help you recruit, engage, and manage talent with
                                    strong compliance and operational clarity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="row d-none d-md-flex g-4 justify-content-center">
                        {serviceCards.map((card, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div data-aos="fade-up" data-aos-duration={700 + index * 100}>
                                    <ServiceCard card={card} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View (Swiper) */}
                    <div className="row d-md-none px-2">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            className="service1-mobile-slider pb-5"
                            data-aos="fade-up"
                            data-aos-duration={800}
                        >
                            {serviceCards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <ServiceCard card={card} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Bottom CTA */}
                    <div className="row mt-5">
                        <div className="col-12 text-center" data-aos="zoom-in-up" data-aos-duration={700}>
                            <Link
                                href="/service"
                                className="btn btn-lg px-5 py-3 rounded-3 fw-bold d-inline-flex align-items-center gap-2 text-white hover-elevate"
                                style={{
                                    backgroundColor: "var(--vtc-text-heading-text-1)", // Navy Button
                                    border: "none",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                View All Services
                                <i className="fa-solid fa-arrow-right" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}