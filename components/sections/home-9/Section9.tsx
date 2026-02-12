import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className="team9" id="team" style={{ backgroundImage: "url(assets/img/bg/team7-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> team members
                                </span>
                                <h2 className="text-anime-style-3">Introducing Our Team of Specialists</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row _relative">
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">Alex Robertson</Link>
                                </h5>
                                <p>Founder, Analysts</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box">
                                <h5>
                                    <Link href="#">Alex Robertson</Link>
                                </h5>
                                <p>Founder, Analysts</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">Alex Robertson</Link>
                                </h5>
                                <p>Founder, Analysts</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box">
                                <h5>
                                    <Link href="#">Alex Robertson</Link>
                                </h5>
                                <p>Founder, Analysts</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">Alex Robertson</Link>
                                </h5>
                                <p>Founder, Analysts</p>
                            </div>
                        </div>
                        <div className="main-image">
                            <img src="assets/img/team/team7-image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}
