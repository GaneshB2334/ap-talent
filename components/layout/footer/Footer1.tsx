import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <footer 
                className="footer1 _relative pt-5 pb-4" 
                style={{ backgroundColor: "var(--vtc-bg-main-bg-5)", color: "white" }} // Navy Background
            >
                <div className="container">
                    <div className="row justify-content-between">
                        
                        {/* COLUMN 1: Logo & About */}
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo mb-4">
                                    <Link href="/">
                                        <img src="assets/img/logo/logo.png" alt="AP Talent" style={{ maxWidth: "250px" }} />
                                    </Link>
                                </div>
                                <div className="heading1-w mb-4">
                                    <p className="text-white" style={{ opacity: 0.9, lineHeight: "1.6" }}>
                                        AP Talent delivers compliant, scalable workforce solutions across recruitment, EOR, and payroll management globally.
                                    </p>
                                </div>
                                {/* Social Media Icons */}
                                <div className="social-icons d-flex gap-3">
                                    <Link href="#" className="text-white fs-5"><i className="fa-brands fa-linkedin-in" /></Link>
                                    <Link href="#" className="text-white fs-5"><i className="fa-brands fa-facebook-f" /></Link>
                                    <Link href="#" className="text-white fs-5"><i className="fa-brands fa-twitter" /></Link>
                                </div>
                            </div>
                        </div>

                        {/* COLUMN 2: Quick Links */}
                        <div className="col-lg-2 col-md-6 col-12 mb-4">
                            <div className="single-footer-items">
                                <h3 className="text-white fw-bold mb-4" style={{ fontSize: "20px" }}>Quick Links</h3>
                                <ul className="menu-list list-unstyled p-0">
                                    {[
                                        { name: "Employee on Record", link: "/service" },
                                        { name: "Recruitment", link: "/service" },
                                        { name: "Payroll Management", link: "/service" },
                                        { name: "Contractor Governance", link: "/service" },
                                        { name: "Compliance Support", link: "/service" }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-3">
                                            <Link href={item.link} className="text-white text-decoration-none d-flex align-items-center gap-2 hover-cyan">
                                                {item.name}
                                                <i className="fa-solid fa-chevron-right" style={{ fontSize: "12px", color: "var(--vtc-bg-main-bg-1)" }} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* COLUMN 3: Explore */}
                        <div className="col-lg-2 col-md-6 col-12 mb-4">
                            <div className="single-footer-items">
                                <h3 className="text-white fw-bold mb-4" style={{ fontSize: "20px" }}>Explore</h3>
                                <ul className="menu-list list-unstyled p-0">
                                    {[
                                        { name: "Home", link: "/" },
                                        { name: "About Us", link: "/about" },
                                        { name: "Service", link: "/service" },
                                        { name: "Testimonial", link: "/testimonial" },
                                        { name: "Contact US", link: "/contact" }
                                    ].map((item, index) => (
                                        <li key={index} className="mb-3">
                                            <Link href={item.link} className="text-white text-decoration-none d-flex align-items-center gap-2 hover-cyan">
                                                {item.name}
                                                <i className="fa-solid fa-chevron-right" style={{ fontSize: "12px", color: "var(--vtc-bg-main-bg-1)" }} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* COLUMN 4: Contact Us & CTA */}
                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="single-footer-items">
                                <h3 className="text-white fw-bold mb-4" style={{ fontSize: "20px" }}>Contact Us</h3>
                                <ul className="contact-list list-unstyled p-0 mb-4">
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <i className="fa-solid fa-envelope mt-1" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                                        <a href="mailto:accounts@aptalent.com.au" className="text-white text-decoration-none">accounts@aptalent.com.au</a>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <i className="fa-solid fa-phone mt-1" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                                        <a href="tel:+61488838319" className="text-white text-decoration-none">+61 488 838 319</a>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-3">
                                        <i className="fa-solid fa-location-dot mt-1" style={{ color: "var(--vtc-bg-main-bg-1)" }} />
                                        <span className="text-white" style={{ opacity: 0.9 }}>
                                            Global Headquarters, Serving 50+ Countries Worldwide
                                        </span>
                                    </li>
                                </ul>
                                
                                {/* Get A Quote Button */}
                                <Link 
                                    href="/contact" 
                                    className="btn px-4 py-3 rounded-pill fw-bold d-inline-flex align-items-center gap-2"
                                    style={{ 
                                        backgroundColor: "var(--vtc-bg-main-bg-1)", // Cyan Button
                                        color: "white",
                                        border: "none"
                                    }}
                                >
                                    Get A Quote
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright Area */}
                <div className="copyright-area _relative pt-4 mt-4 border-top" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 text-center">
                                <div className="coppyright">
                                    <p className="mb-0 text-white" style={{ opacity: 0.8 }}>
                                        © Copyright 2026 - AP Talent. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*===== FOOTER AREA END =======*/}
        </>
    );
}
