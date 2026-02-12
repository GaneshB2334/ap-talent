import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/project-details-right/Section1";
import Section2 from "@/components/sections/project-details/Section2";
import Section3 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="HR Consulting & Staffing Support" group_page="" current_page="HR Consulting & Staffing Support" display="d-none" />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
