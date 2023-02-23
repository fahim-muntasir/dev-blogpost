import Layout from "@/components/Layout";
import LeftSection from "@/components/leftSection/LeftSection";
import Main from "@/components/main/Main";
import RightSection from "@/components/rightSection/RightSection";
import { MainSection } from "@/components/styles/Index.styled";
import { useGetPostsQuery } from "@/fetures/post/postApi";

export default function Home() {
    const { data } = useGetPostsQuery();
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
