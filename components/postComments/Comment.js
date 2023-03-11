import { useCreateCommentMutation } from "@/fetures/comment/commentApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlertMessage from "../ui/AlertMessage.styled";
import Button from "../ui/Button.styled";
import Textarea from "../ui/Textarea";
import CommentList from "./CommentList";
import {
    CommentBox,
    CommentListHeader,
    CommentListMain,
} from "./Comments.styled";

export default function Comment({ postId }) {
    const [commentText, setCommentText] = useState("");
    const [error, setError] = useState("");
    const { user } = useSelector((state) => state.auth);

    const [createComment, { isLoading, isSuccess, isError }] =
        useCreateCommentMutation();

    useEffect(() => {
        if (isSuccess) {
            setCommentText("");
        }

        if (isError) {
            setError("Somthing went wrong!");
        }
    }, [isSuccess, isError]);

    const commentHandler = (e) => {
        e.preventDefault();

        const commentData = {
            data: {
                posts_id: postId,
                auther: {
                    name: user?.username,
                },
                text: commentText,
            },
        };

        createComment(commentData);
    };

    return (
        <CommentListMain>
            <CommentListHeader>
                <h2>Comments (10)</h2>
            </CommentListHeader>

            {error && <AlertMessage error>{error}</AlertMessage>}

            <CommentBox>
                <Image src="/mypic.jpeg" alt="mypic" width={32} height={32} />
                <form onSubmit={commentHandler}>
                    <Textarea
                        placeholder="Add to the discussion"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button lg disabled={isLoading}>
                        Submit
                    </Button>
                </form>
            </CommentBox>

            <CommentList />
        </CommentListMain>
    );
}
