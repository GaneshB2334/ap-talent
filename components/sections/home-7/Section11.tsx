import Link from "next/link";

export default function Section11() {
    return (
        <>
            {/*=====CTA AREA START=======*/}
            <div className="cta7" style={{ backgroundImage: "url(assets/img/bg/cta7-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="heading6-w">
                                <h2>Ready To Power Up Your Savings And Reliability?</h2>
                                <div className="space16" />
                                <p>Feel free to customize this paragraph to better reflect the specific services offered by your IT solution &amp; the unique </p>
                                <div className="form-area">
                                    <form action="#">
                                        <input type="email" placeholder="Your Email Address" />
                                        <div className="button">
                                            <button className="theme-btn12" type="submit">
                                                subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="cta-contact-area">
                                <div className="row">
                                    <div className="col-lg-2" />
                                    <div className="col-lg-5">
                                        <div className="contact-box">
                                            <div className="">
                                                <div className="icon">
                                                    <img src="assets/img/icons/cta7-icon1.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <h6>Call Us 24/7</h6>
                                                <Link href="tel:+1234567890">+123 456 7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="contact-box">
                                            <div className="">
                                                <div className="icon">
                                                    <img src="assets/img/icons/cta7-icon2.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="heading">
                                                <h6>Mail Us Anytime</h6>
                                                <Link href="mailto:recrute@gmail.com">recrute@gmail.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CTA AREA END=======*/}
        </>
    );
}
