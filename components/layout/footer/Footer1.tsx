import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <div className="footer1 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo">
                                    <Link href="">
                                        <img src="assets/img/logo/footer-logo1.png" alt="" />
                                    </Link>
                                </div>
                                <div className="space20" />
                                <div className="heading1-w">
                                    <p>AP Talent Australia delivers compliant, scalable workforce solutions across recruitment, EOR, and payroll management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Quick Links</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="#">Employee on Record</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Recruitment</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Payroll Management</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Contractor Governance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Compliance Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items pl-5">
                                <h3>Explore</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/">Home </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact US</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space70" />
                </div>
                <div className="copyright-area _relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="coppyright">
                                    <p>© Copyright 2026 - AP Talent Australia. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== FOOTER AREA END =======*/}
        </>
    );
}
