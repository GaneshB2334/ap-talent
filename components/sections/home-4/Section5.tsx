"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

export default function Section5() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="Y8XpQpW5OVY" onClose={() => setIsOpen(false)} />

            {/*===== VIDEO AREA START =======*/}
            <div className="video-area5" style={{ backgroundImage: "url(assets/img/bg/video-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="video-area-button">
                                <Link href="#" onClick={() => setIsOpen(true)} className="play-btn">
                                    <i className="fa-solid fa-play" />
                                </Link>
                                <p>Watch Our Working Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== VIDEO AREA END =======*/}
        </>
    );
}
