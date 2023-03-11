import { useGetCommentsQuery } from "@/fetures/comment/commentApi";
import SingleComment from "./SingleComment";

export default function CommentList() {
    const { data, isLoading, isError } = useGetCommentsQuery();
    const comments = data?.data;

    let content = null;
    if (comments) {
        content = comments?.map((comment) => (
            <SingleComment key={comment.id} data={comment} />
        ));
    }

    if (!comments && isLoading) {
        content = <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        content = <div>Error!</div>;
    }

    return content;
}
