import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====CASE AREA START=======*/}
            <div className="case10 sp overflow-hidden" id="case" style={{ backgroundColor: "#F7F5FB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading10">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span10.png" alt="" /> case studies
                                </span>
                                <h2 className="text-anime-style-3">Our Success All Project</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="case-box">
                                <div className="image">
                                    <img src="assets/img/case-study/case10-image1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <h6>staffing solution</h6>
                                    <h3>
                                        <Link href="/service-details">Real Results: Case Studies in Accounting &amp; Finance</Link>
                                    </h3>
                                    <p>Our commitment to excellence reflected in the success stories of clients. Through tailored an staffing solutions, we’ve businesses across.</p>
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="case-box">
                                <div className="image">
                                    <img src="assets/img/case-study/case10-image2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <h6>staffing solution</h6>
                                    <h3>
                                        <Link href="/service-details">Case Studies: How We Have Deliver Top Finance To Talent</Link>
                                    </h3>
                                    <p>Our commitment to excellence reflected in the success stories of clients. Through tailored an staffing solutions, we’ve businesses across.</p>
                                    <Link href="/service-details" className="arrow">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CASE AREA END=======*/}
        </>
    );
}
