// import { useGetReplyQuery } from "@/fetures/comment/reply/replyApi";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import {
    CommentAction,
    CommentContent,
    CommentMain,
    CommentText,
} from "./Comments.styled";

const Reply = ({ comment }) => {
    // const { data: replies } = useGetReplyQuery(parentId);

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
                </CommentAction>
            </CommentContent>
        </CommentMain>
    );
};

export default Reply;
