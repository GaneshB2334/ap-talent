import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about/Section1";
import Section3 from "@/components/sections/about/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="About Us" group_page="" current_page="About Us" display="d-none" />
                <Section1 />
                <Section3 />
            </Layout>
        </>
    );
}
