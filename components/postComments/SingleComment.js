import {
    useCreateReplyMutation,
    useGetReplyQuery,
} from "@/fetures/comment/reply/replyApi";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { useSelector } from "react-redux";
import AlertMessage from "../ui/AlertMessage.styled";
import CommentForm from "./CommentForm";
import {
    CommentAction,
    CommentContent,
    CommentMain,
    CommentText,
} from "./Comments.styled";
import Reply from "./Reply";

export default function SingleComment({ comment, parentId }) {
    const [isCreateReply, setIsCreateReply] = useState(false);

    const [commentText, setCommentText] = useState("");
    const [error, setError] = useState("");
    const [replies, setReplies] = useState([]);
    const { user } = useSelector((state) => state.auth);

    const [createReply, { isLoading, isSuccess, isError }] =
        useCreateReplyMutation();

    const { data: replies2, isSuccess: replySuccess } =
        useGetReplyQuery(parentId);

    useEffect(() => {
        axios
            .get(
                `http://localhost:1337/api/replies?filters[parent][$eq]=${parentId}&&populate=*`
            )
            .then((response) => {
                setReplies(response.data);
            })
            .catch((error) => console.log(error));
    }, [parentId]);

    useEffect(() => {
        if (isSuccess) {
            setCommentText("");
            setIsCreateReply(false);
        }

        if (isError) {
            setError("Somthing went wrong!");
        }
    }, [isSuccess, isError]);

    const commentHandler = (e) => {
        e.preventDefault();

        const replyData = {
            data: {
                parent: parentId,
                auther: {
                    name: user?.username,
                },
                text: commentText,
            },
        };

        // create reply
        createReply(replyData);
    };

    return (
        <CommentMain>
            <Image src="/mypic.jpeg" alt="mypic" width={32} height={32} />
            <CommentContent>
                <CommentText>
                    <p>{comment}</p>
                </CommentText>
                <CommentAction>
                    <button>
                        <AiOutlineHeart />
                        <span>10 Like</span>
                    </button>
                    <button onClick={() => setIsCreateReply(true)}>
                        <BsReply />
                        <span>Reply</span>
                    </button>
                </CommentAction>

                {error && <AlertMessage error>{error}</AlertMessage>}

                {replies2?.data?.length > 0 && (
                    <div>
                        {replies2.data.map((reply) => (
                            // <div key={reply.id}>{reply?.attributes?.text}</div>
                            <Reply
                                key={reply.id}
                                comment={reply?.attributes?.text}
                                parentId={reply?.id}
                            />
                        ))}
                    </div>
                )}

                {isCreateReply && (
                    <CommentForm
                        commentHandler={commentHandler}
                        setCommentText={setCommentText}
                        commentText={commentText}
                        isLoading={isLoading}
                    />
                )}
            </CommentContent>
        </CommentMain>
    );
}
