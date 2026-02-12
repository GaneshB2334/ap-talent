import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home-8/Section1";
import Section2 from "@/components/sections/home-8/Section2";
import Section3 from "@/components/sections/home-8/Section3";
import Section4 from "@/components/sections/home-8/Section4";
import Section5 from "@/components/sections/home-8/Section5";
import Section6 from "@/components/sections/home-8/Section6";
import Section7 from "@/components/sections/home-8/Section7";
import Section8 from "@/components/sections/home-8/Section8";
import Section9 from "@/components/sections/home-8/Section9";
import Section10 from "@/components/sections/home-8/Section10";
export default function Home() {
    return (
        <>
            <Layout headerStyle={8} footerStyle={8}>
                <Section1 />
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Section9 />
                </div>
                <Section10 />
            </Layout>
        </>
    );
}
