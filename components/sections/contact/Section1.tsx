'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Section1() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        // Contact Area Start
        <div 
            className="contact-page sp py-5" 
            style={{ backgroundColor: "var(--vtc-bg-common-bg2)" }} // Light Grey Background
        >
            <div className="container py-lg-4">
                <div className="row align-items-center">
                    
                    {/* LEFT COLUMN: Info & Cards */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="heading1 pe-lg-4">
                            <span 
                                className="d-inline-block px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                style={{ 
                                    backgroundColor: "rgba(0, 188, 198, 0.1)", 
                                    color: "var(--vtc-bg-main-bg-1)",
                                    fontSize: "12px",
                                    letterSpacing: "1px"
                                }}
                            >
                                Contact Us
                            </span>
                            <h2 
                                className="fw-bold display-5 mb-3" 
                                style={{ color: "var(--vtc-text-heading-text-1)" }}
                            >
                                Get in Touch Let's Start the Conversation
                            </h2>
                            <div className="space16"></div>
                            <p className="lead fs-6 mb-5" style={{ color: "var(--vtc-text-pera-text-1)" }}>
                                We're here to help you find the right staffing solutions for your needs. Whether you're a company looking to hire top talent or a candidate seeking your next career opportunity.
                            </p>
                        </div>

                        {/* Contact Cards Container */}
                        <div className="d-flex flex-column gap-4">
                            
                            {/* Card 1: Phone */}
                            <div 
                                className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-center gap-4 hover-elevate"
                                style={{ borderColor: "var(--vtc-border-border-1)", transition: "transform 0.3s ease" }}
                            >
                                <div 
                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                    style={{ 
                                        width: "60px", 
                                        height: "60px", 
                                        backgroundColor: "rgba(0, 188, 198, 0.1)" 
                                    }}
                                >
                                    <Image
                                        src="/assets/img/icons/contact-icon1.png"
                                        alt="phone"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <p className="mb-1 small fw-bold text-uppercase text-muted">Give us a Call</p>
                                    <h4 className="m-0 fw-bold">
                                        <Link 
                                            href="tel:+61488838319" 
                                            className="text-decoration-none hover-cyan"
                                            style={{ color: "var(--vtc-text-heading-text-1)" }}
                                        >
                                            +61 488 838 319
                                        </Link>
                                    </h4>
                                </div>
                            </div>

                            {/* Card 2: Email */}
                            <div 
                                className="bg-white p-4 rounded-4 shadow-sm border d-flex align-items-center gap-4 hover-elevate"
                                style={{ borderColor: "var(--vtc-border-border-1)", transition: "transform 0.3s ease" }}
                            >
                                <div 
                                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                    style={{ 
                                        width: "60px", 
                                        height: "60px", 
                                        backgroundColor: "rgba(0, 188, 198, 0.1)" 
                                    }}
                                >
                                    <Image
                                        src="/assets/img/icons/contact-icon2.png"
                                        alt="email"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <p className="mb-1 small fw-bold text-uppercase text-muted">Send us an Email</p>
                                    <h4 className="m-0 fw-bold">
                                        <Link 
                                            href="mailto:accounts@aptalent.com.au" 
                                            className="text-decoration-none hover-cyan"
                                            style={{ color: "var(--vtc-text-heading-text-1)" }}
                                        >
                                            accounts@aptalent.com.au
                                        </Link>
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Form Card */}
                    <div className="col-lg-6 offset-lg-1">
                        <div 
                            className="contact-form-card bg-white p-4 p-md-5 rounded-4 shadow-lg"
                            style={{ borderTop: "5px solid var(--vtc-bg-main-bg-1)" }}
                        >
                            <div className="heading1 mb-4">
                                <h3 className="fw-bold mb-2" style={{ color: "var(--vtc-text-heading-text-1)" }}>Send us a Message</h3>
                                <p className="small text-muted">
                                    Feel free to reach out to us with any questions, inquiries, or staffing requirements.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <input
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <textarea
                                                className="form-control bg-light border-0 p-3 rounded-3"
                                                rows={4}
                                                name="message"
                                                placeholder="Write your message here..."
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="button mt-3">
                                            <button 
                                                type="submit" 
                                                className="btn w-100 py-3 rounded-pill fw-bold text-white d-flex align-items-center justify-content-center gap-2 hover-elevate"
                                                style={{ backgroundColor: "var(--vtc-bg-main-bg-1)", border: "none" }}
                                            >
                                                Submit Now 
                                                <i className="fa-solid fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Styles for this component (can be moved to CSS module) */}
            <style jsx>{`
                .hover-elevate:hover {
                    transform: translateY(-5px) !important;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                .hover-cyan:hover {
                    color: var(--vtc-bg-main-bg-1) !important;
                }
                .form-control:focus {
                    box-shadow: none;
                    background-color: #fff !important;
                    border: 1px solid var(--vtc-bg-main-bg-1) !important;
                }
            `}</style>
        </div>
        // Contact Area End
    );
}