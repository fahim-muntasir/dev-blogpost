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

// export async function getServerSideProps() {
//     return {
//     //   redirect: {
//     //     permanent: false,
//     //     destination: "/login",
//     //   },
//       props:{}
//     }
//   }
