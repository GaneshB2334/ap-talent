import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/blog/Section1";
import Section2 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Our Blogs" group_page="" current_page="Our Blogs" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
