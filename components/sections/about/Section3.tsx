import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*===== CTA AREA START =======*/}
            <div className="cta">
                <div className="container">
                    <div className="row cta-border align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <h2>Ready to Build a Compliant, Scalable Workforce?</h2>
                                <div className="space16" />
                                <p>
                                    Talk to our team about EOR, recruitment, and payroll solutions tailored to your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-area">
                                <form action="#">
                                    <input type="email" placeholder="Email Address" />
                                    <div className="button">
                                        <button type="submit" className="theme-btn1">
                                            Request a Call
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA START =======*/}
        </>
    );
}
