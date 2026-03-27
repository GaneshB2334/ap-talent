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
            
            {/* ... other menu items ... */}

            {/* Added Contact Details Section */}
            <li className="dropdown-menu-parrent">
                <Link href="/contact" className="main1">
                    Contact <i className="fa-solid fa-angle-down" />
                </Link>
                <ul>
                    <li>
                        <Link href="mailto:accounts@aptalent.com.au">
                            <i className="fa-solid fa-envelope" /> accounts@aptalent.com.au
                        </Link>
                    </li>
                    <li>
                        <Link href="tel:+61488838319">
                            <i className="fa-solid fa-phone" /> +61 488 838 319
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
