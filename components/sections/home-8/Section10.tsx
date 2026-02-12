import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*===== CTA AREA START =======*/}
            <div className="cta8" style={{ backgroundImage: "url(assets/img/bg/cta8-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto text-center">
                            <div className="heading6-w">
                                <h2>Ready To Power Up Your Savings And Reliability?</h2>
                                <div className="space16" />
                                <p>Feel free to customize this paragraph to better reflect the specific services offered by your IT solution &amp; the unique </p>
                                <div className="form-area">
                                    <form action="#">
                                        <input type="email" placeholder="Your Email Address" />
                                        <div className="button">
                                            <button className="theme-btn14" type="submit">
                                                subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA END =======*/}
        </>
    );
}
