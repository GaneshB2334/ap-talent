import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====OUR MISSION AREA START=======*/}
            <div className="mission sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span">Our Mission</span>
                                <h2>Empowering Australian Businesses</h2>
                                <div className="space16" />
                                <p>We deliver flexible, cost-effective, and compliant workforce solutions that help organisations grow, scale, and perform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Mission</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Provide high-quality workforce solutions with strong governance and service reliability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon2.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Vision</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Be a trusted workforce partner for Australian organisations through scalable talent services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                                        <Link href="#">Global Strength</Link>
                                    </h5>
                                    <div className="space16" />
                                    <p>Backed by NIAD Group Global with experience across six countries and 60+ clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====OUR MISSION AREA END=======*/}
        </>
    );
}
