import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*=====CTA AREA START=======*/}
            <div className="cta2 pt120">
                <div className="container">
                    <div
                        className="cta2-bg"
                        style={{
                            background: "url(assets/img/bg/cta2-bg.png)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="main-image">
                                    <img src="assets/img/blog/cta2-image.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="heading2">
                                    <h2>Ready to Power up your Savings and Reliability?</h2>
                                    <div className="space16" />
                                    <p>Feel free to customize this paragraph to better reflect the specific services offered by your IT solution &amp; the unique </p>
                                    <div className="subscribe-area">
                                        <input type="email" placeholder="Email Address" />
                                        <div className="button">
                                            <button className="theme-btn4">
                                                Subscribe Now
                                                <span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </span>
                                            </button>
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
