"use client";
import { useState } from "react";
import Link from "next/link";
export default function Section4() {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMonthly(e.target.checked);
    };
    return (
        <>
            {/*===== PRIICING AREA START =======*/}
            <div className="pricing-plan-page pb120 _relative" id="pricing">
                <div className="container">
                    <div className="princing-plans">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading2">
                                        <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                            Pricing Plan
                                        </span>
                                        <h2 className="text-anime-style-3">Affordable Staffing Solutions</h2>
                                        <div className="space16" />
                                        <p data-aos="fade-left" data-aos-duration={900}>
                                            We understand that every business is unique, which is why we offer flexible pricing options to accommodate different budgets
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space60" />
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className={`plan-toggle-wrap ${!isMonthly ? "active" : ""}`}>
                                        <div className="toggle-inner toggle-inner2">
                                            <input id="ce-toggle" type="checkbox" checked={isMonthly} onChange={handleToggleChange} />
                                            <span className="custom-toggle" />
                                            <span className="t-month">Monthly</span>
                                            <span className="t-year">Yearly (Save 20%)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div id="monthly" style={{ display: isMonthly ? "block" : "none" }}>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={700}>
                                            <div className="pricing-box">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Temporary</h5>
                                                        <p>Our pricing is designed to be transparent and tailored to your specific needs.</p>
                                                        <h3>$259/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={900}>
                                            <div className="pricing-box active">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Contract</h5>
                                                        <p>Contact us today to discuss your staffing needs and receive a personalized quote</p>
                                                        <h3>$159/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={1100}>
                                            <div className="pricing-box">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Didact</h5>
                                                        <p>Whether you're looking for temporary staffing solutions, direct hire</p>
                                                        <h3>$59/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="yearly" style={{ display: isMonthly ? "none" : "block" }}>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="pricing-box active">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Temporary</h5>
                                                        <p>Our pricing is designed to be transparent and tailored to your specific needs.</p>
                                                        <h3>$59/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="pricing-box">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Contract</h5>
                                                        <p>Contact us today to discuss your staffing needs and receive a personalized quote</p>
                                                        <h3>$19/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="pricing-box">
                                                <div className="pricing-box-single">
                                                    <div className="heading2">
                                                        <h5>Didact</h5>
                                                        <p>Whether you're looking for temporary staffing solutions, direct hire</p>
                                                        <h3>$12/mo</h3>
                                                        <p>Billed Yearly</p>
                                                    </div>
                                                    <Link href="#" className="pricing-btn">
                                                        Get a Consultaion
                                                    </Link>
                                                    <p className="h-pera">Everything you get with Basic</p>
                                                    <ul className="list">
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Sourcing
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Resume Management
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Candidate Tracking
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i className="fa-solid fa-check" />
                                                            </span>
                                                            Integrations
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="shape-left" src="assets/img/shapes/home2-shape2.png" alt="" />
            </div>
            {/*===== PRIICING AREA END =======*/}
        </>
    );
}
