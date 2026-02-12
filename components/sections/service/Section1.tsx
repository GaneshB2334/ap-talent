import Link from "next/link";

const services = [
    {
        image: "assets/img/service/service1-img1.png",
        icon: "assets/img/icons/service1-icon1.png",
        title: "Employee on Record (EOR)",
        description: "Offshore workforce solutions without entity setup, with employment compliance managed by us.",
    },
    {
        image: "assets/img/service/service1-img2.png",
        icon: "assets/img/icons/service1-icon2.png",
        title: "Recruitment & Subcontracting",
        description: "Permanent recruitment, contract staffing, and subcontracting across key professional sectors.",
        isActive: true,
    },
    {
        image: "assets/img/service/service1-img3.png",
        icon: "assets/img/icons/service1-icon3.png",
        title: "Payroll & Contractor Management",
        description: "Payroll processing, contractor onboarding, PAYG and superannuation compliance, and reporting.",
    },
];

export default function Section1() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 service-page-service sp">
                <div className="container">
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-lg-4 col-md-6" key={service.title}>
                                <div className={`service1-box${service.isActive ? " active" : ""}`}>
                                    <div className="image overlay-anim">
                                        <img src={service.image} alt="" />
                                    </div>
                                    <div className="hover-area">
                                        <div className="icon">
                                            <img src={service.icon} alt="" />
                                        </div>
                                        <div className="space16" />
                                        <div className="heading1-w">
                                            <h4>
                                                <Link href="/service-details">{service.title}</Link>
                                            </h4>
                                            <div className="space16" />
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
