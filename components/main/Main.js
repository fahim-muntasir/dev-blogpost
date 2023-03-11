import { useGetPostsQuery } from "@/fetures/post/postApi";
import SinglePost from "../singlePost/SinglePost";
import { MainSection } from "./Main.styled";

export default function Main() {
    const { data: posts, isLoading, isError } = useGetPostsQuery();
    const { data } = posts || {};
    console.log(data);

    let content = null;
    if (data) {
        content = data.map((post) => (
            <SinglePost key={post.id} data={post?.attributes} id={post.id} />
        ));
    }

    if (!data && isLoading) {
        content = <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        content = <div>Error!</div>;
    }

    return <MainSection>{content}</MainSection>;
}
