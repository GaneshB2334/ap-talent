import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service-details-left/Section1";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Recruitment & Subcontracting Services" group_page="" current_page="Recruitment & Subcontracting Services" display="d-none" />
                <Section1 />
            </Layout>
        </>
    );
}
