import SinglePost from "../singlePost/SinglePost";
import { MainSection } from "./Main.styled";

export default function Main() {
    return (
        <MainSection>
            <SinglePost />
            <SinglePost />
        </MainSection>
    );
}
