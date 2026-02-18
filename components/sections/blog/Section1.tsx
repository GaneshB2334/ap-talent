import Link from "next/link";

export default function Section1() {
    // Helper data array to cleaner code and easier updates
    const blogPosts = [
        {
            id: 1,
            image: "assets/img/blog/blog2-img1.png",
            date: "16 August 2023",
            author: "Ben Stokes",
            title: "Career Compass: Navigating Your Professional Path",
            excerpt: "Our blog covers a wide range of topics, from tips for optimizing your hiring process."
        },
        {
            id: 2,
            image: "assets/img/blog/blog2-img2.png",
            date: "18 August 2023",
            author: "Sarah Jenkins",
            title: "Talent Chronicles: Stories from the Hiring Frontline",
            excerpt: "Whether you're a hiring manager looking to stay ahead of industry trends or a candidate."
        },
        {
            id: 3,
            image: "assets/img/blog/blog2-img3.png",
            date: "20 August 2023",
            author: "Mike Ross",
            title: "Recruitology: Where Recruitment Meets Technology",
            excerpt: "Stay tuned for regular updates and valuable insights from our team of staffing experts."
        },
        {
            id: 4,
            image: "assets/img/blog/blog2-img4.png",
            date: "22 August 2023",
            author: "Ben Stokes",
            title: "Remote Work Revolution: Adapting to the New Normal",
            excerpt: "Explore strategies for managing remote teams and maintaining company culture virtually."
        },
        {
            id: 5,
            image: "assets/img/blog/blog2-img5.png",
            date: "24 August 2023",
            author: "Jessica Lee",
            title: "The Staffing Scoop: Expert Advice and Industry News",
            excerpt: "Whether you're a hiring manager seeking strategies to streamline your recruitment."
        },
        {
            id: 6,
            image: "assets/img/blog/blog2-img6.png",
            date: "26 August 2023",
            author: "David Kim",
            title: "HR Insights: Unlocking the Secrets of Staffing",
            excerpt: "Stay tuned for regular updates and expert insights from our team of staffing professionals."
        },
        {
            id: 7,
            image: "assets/img/blog/blog2-img7.png",
            date: "28 August 2023",
            author: "Emily White",
            title: "The Staffing Strategist: Your Guide to Talent Acquisition",
            excerpt: "We believe that knowledge is power, and our blog serves as a platform to provide insights."
        },
        {
            id: 8,
            image: "assets/img/blog/blog2-img8.png",
            date: "30 August 2023",
            author: "Chris Martin",
            title: "Recruitology 101: Tips and Trends for Hiring Success",
            excerpt: "Information you need to make informed decisions & navigate the ever-evolving market."
        },
        {
            id: 9,
            image: "assets/img/blog/blog2-img9.png",
            date: "01 September 2023",
            author: "Anna Bell",
            title: "Building Bridges: Connecting Talent with Opportunity",
            excerpt: "Staffing professionals, as we strive to help you succeed in your staffing endeavors."
        }
    ];

    return (
        <>
            {/*===== BLOG AREA START =======*/}
            <section 
                className="blog-page sp py-5" 
                style={{ backgroundColor: "var(--vtc-bg-common-bg2)" }} // Light Grey Background
            >
                <div className="container py-lg-4">
                    
                    {/* Header (Optional Context) */}
                    <div className="row mb-5">
                        <div className="col-lg-8 m-auto text-center">
                            <span 
                                className="d-inline-block px-3 py-1 rounded-pill fw-bold text-uppercase mb-3"
                                style={{ 
                                    backgroundColor: "rgba(0, 188, 198, 0.1)", 
                                    color: "var(--vtc-bg-main-bg-1)",
                                    fontSize: "12px",
                                    letterSpacing: "1px"
                                }}
                            >
                                Our Blog
                            </span>
                            <h2 className="fw-bold display-5 mb-3" style={{ color: "var(--vtc-text-heading-text-1)" }}>
                                Insights & Industry News
                            </h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        {blogPosts.map((post) => (
                            <div className="col-lg-4 col-md-6" key={post.id}>
                                <div 
                                    className="blog2-box bg-white rounded-4 overflow-hidden shadow-sm h-100 border hover-elevate"
                                    style={{ transition: "all 0.3s ease", borderColor: "var(--vtc-border-border-1)" }}
                                >
                                    {/* Image Container */}
                                    <div className="image position-relative overflow-hidden" style={{ height: "240px" }}>
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="img-fluid w-100 h-100 object-fit-cover"
                                            style={{ transition: "transform 0.5s ease" }}
                                        />
                                        <div 
                                            className="position-absolute bottom-0 start-0 bg-white px-3 py-1 rounded-top-end fw-bold small m-3"
                                            style={{ color: "var(--vtc-bg-main-bg-1)" }}
                                        >
                                            {post.date}
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="heading5 p-4 d-flex flex-column h-100">
                                        <div className="tags mb-3 d-flex align-items-center gap-3 text-muted small">
                                            <span className="d-flex align-items-center gap-2">
                                                <i className="fa-regular fa-user" style={{ color: "var(--vtc-bg-main-bg-1)" }}></i>
                                                {post.author}
                                            </span>
                                        </div>
                                        
                                        <h4 className="fw-bold mb-3 flex-grow-0">
                                            <Link 
                                                href="/blog-details" 
                                                className="text-decoration-none hover-cyan"
                                                style={{ 
                                                    color: "var(--vtc-text-heading-text-1)",
                                                    fontSize: "20px",
                                                    lineHeight: "1.4"
                                                }}
                                            >
                                                {post.title}
                                            </Link>
                                        </h4>
                                        
                                        <p className="mb-4 text-muted small flex-grow-1" style={{ lineHeight: "1.6" }}>
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="mt-auto pt-3 border-top" style={{ borderColor: "var(--vtc-bg-common-bg1)" }}>
                                            <Link 
                                                href="/blog-details" 
                                                className="learn fw-bold text-decoration-none d-flex align-items-center gap-2"
                                                style={{ color: "var(--vtc-bg-main-bg-1)", fontSize: "14px" }}
                                            >
                                                Read More
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space30" />
                    
                    {/* Pagination */}
                    <div className="row mt-5">
                        <div className="col-12 m-auto">
                            <div className="theme-pagination text-center">
                                <ul className="list-unstyled d-inline-flex gap-2">
                                    <li>
                                        <Link href="#" className="btn btn-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                            <i className="fa-solid fa-angle-left" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: "40px", height: "40px", backgroundColor: "var(--vtc-bg-main-bg-1)" }}>
                                            01
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn btn-light rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: "40px", height: "40px" }}>02</Link>
                                    </li>
                                    <li className="d-flex align-items-center fw-bold text-muted px-2">...</li>
                                    <li>
                                        <Link href="#" className="btn btn-light rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: "40px", height: "40px" }}>12</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="btn btn-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                                            <i className="fa-solid fa-angle-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*===== BLOG AREA END =======*/}
        </>
    );
}