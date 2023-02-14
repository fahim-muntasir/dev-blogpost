import Layout from "@/components/Layout";
import LeftSection from "@/components/leftSection/LeftSection";
import Main from "@/components/main/Main";
import RightSection from "@/components/rightSection/RightSection";
import { MainSection } from "@/components/styles/Index.styled";

export default function Home() {
    return (
        <Layout>
            <MainSection>
                <LeftSection />
                <Main />
                <RightSection />
            </MainSection>
        </Layout>
    );
}
