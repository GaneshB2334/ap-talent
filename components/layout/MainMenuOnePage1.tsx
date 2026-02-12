import Link from "next/link";

export default function MainMenu() {
    return (
        <div className="main-menu-ex main-menu-ex1">
            <ul id="list-example">
                <li>
                    <Link className="list-group-item list-group-item-action" href="#choose">
                        Choose
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item list-group-item-action" href="#service">
                        Service
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item list-group-item-action" href="#project">
                        Project
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item list-group-item-action" href="#work">
                        Works
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item list-group-item-action" href="#contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className="list-group-item list-group-item-action" href="#blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </div>
    );
}
