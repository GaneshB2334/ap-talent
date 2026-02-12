import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/Section1";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";
import Section7 from "@/components/sections/home/Section7";
export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section3 />
                <Section4 />
                <Section7 />
            </Layout>
        </>
    );
}
