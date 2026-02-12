import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/testimonial/Section1";
import Section2 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Testimonials" group_page="" current_page="Testimonials" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
