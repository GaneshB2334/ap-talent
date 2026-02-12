import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Service <i className="fa-solid fa-angle-down" />
                </Link>
                <ul>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <Link href="/service-details">Service Details</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Pages <i className="fa-solid fa-angle-down" />
                </Link>
                <div className="mega-menu-all">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mega-menu-single dis1">
                                <h3>Our Services</h3>
                                <ul>
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">Service Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>News / Blog</h3>
                                <ul>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mega-menu-single">
                                <h3>Pages</h3>
                                <ul>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonial">Testimonial</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Blog <i className="fa-solid fa-angle-down" />
                </Link>
                <ul>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
