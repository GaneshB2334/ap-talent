import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====OTHERS AREA START=======*/}
            <div className="others6 sp overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> Recruitment Technologies
                                </span>
                                <h2 className="text-anime-style-3">Discover the Advantages A Best Partners with Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="" data-aos="fade-right" data-aos-duration={800}>
                                <div className="others-boxs">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/others6-icon1.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading6">
                                        <h4>
                                            <Link href="/service-details">Sourcing the Best</Link>
                                        </h4>
                                        <p>Stay tuned for regular updates and valuable insights from our team of staffing experts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="fade-right" data-aos-duration={1000}>
                                <div className="others-boxs">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/others6-icon2.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading6">
                                        <h4>
                                            <Link href="/service-details">Volume Hiring</Link>
                                        </h4>
                                        <p>Remember to keep your blog informative, engaging &amp; relevant your target audience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="" data-aos="fade-right" data-aos-duration={1200}>
                                <div className="others-boxs">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/others6-icon3.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading6">
                                        <h4>
                                            <Link href="/service-details">Partners In Team Building</Link>
                                        </h4>
                                        <p>This will help drive traffic to your website &amp; establish your agency as a trusted authority</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="images-all">
                                <div className="image1" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/others/others6-img1.png" alt="" />
                                </div>
                                <div className="image2" data-aos="zoom-out" data-aos-duration={1000}>
                                    <img src="assets/img/others/others6-img2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/img/shapes/team6-shape.png" alt="" className="sec-shape" />
            </div>
            {/*=====OTHERS AREA END=======*/}
        </>
    );
}
