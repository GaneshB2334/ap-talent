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
    },
    {
        image: "assets/img/service/service1-img2.png",
        title: "Recruitment & Subcontracting",
        description: "Permanent, contract, and project-based hiring across key business functions.",
    },
    {
        image: "assets/img/service/service1-img3.png",
        title: "Payroll & Management",
        description: "End-to-end payroll, contractor onboarding, and compliance governance.",
    },
    {
        image: "assets/img/service/service1-img4.png",
        title: "Global Talent Access",
        description: "Connect with verified professionals from emerging markets ready to deploy.",
    },
];

export default function Section1() {

    // Shared Card Component for Consistency
    const ServiceCard = ({ card }: { card: any }) => (
        <div
            className="service-card position-relative rounded-4 overflow-hidden"
            style={{
                height: "450px",
                border: "1px solid var(--vtc-border-border-1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                backgroundColor: "#000"
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

            {/* Gradient Overlay */}
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

                <Link
                    href="/service-details"
                    className="text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                    style={{ fontSize: "14px" }}
                >
                    Learn More <i className="fa-solid fa-arrow-right" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                </Link>
            </div>
        </div>
    );

    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <section
                className="service1 sp overflow-hidden py-5"
                id="service"
                style={{ backgroundColor: "var(--vtc-bg-common-bg1)" }}
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

                    {/* Services Grid */}
                    <div className="row g-4 justify-content-center" data-aos="fade-up" data-aos-duration={1000}>
                        {serviceCards.map((card, index) => (
                            <div className="col-lg-3 col-md-6 col-12" key={index}>
                                <ServiceCard card={card} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
