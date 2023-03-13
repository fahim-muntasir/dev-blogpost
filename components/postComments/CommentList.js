import { useGetCommentsQuery } from "@/fetures/comment/commentApi";
import { useEffect } from "react";
import SingleComment from "./SingleComment";

export default function CommentList({ postId }) {
    const { data, isLoading, isError, error } = useGetCommentsQuery(postId);
    const comments = data?.data;

    useEffect(() => {
        if (isError) {
            console.log(error);
        }
    }, [isError, error]);

    let content = null;
    if (comments) {
        content = comments?.map((comment) => {
            return (
                <SingleComment
                    key={comment.id}
                    comment={comment?.attributes?.text}
                    parentId={comment?.id}
                />
            );
        });
    }

    if (!comments && isLoading) {
        content = <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        content = <div>Error!</div>;
    }

    return content;
}
