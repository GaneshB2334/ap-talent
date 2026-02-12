import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/team/Section1";
import Section2 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Our Team" group_page="" current_page="Team" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
