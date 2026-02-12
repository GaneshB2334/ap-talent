import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section2 from "@/components/sections/contact/Section2";
export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Contact Us" group_page="" current_page="Contact Us" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
