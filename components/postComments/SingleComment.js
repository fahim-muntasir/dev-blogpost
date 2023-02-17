import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import {
    CommentAction,
    CommentContent,
    CommentMain,
    CommentText,
} from "./Comments.styled";

export default function SingleComment() {
    return (
        <CommentMain>
            <Image src="/mypic.jpeg" alt="mypic" width={32} height={32} />
            <CommentContent>
                <CommentText>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Labore ad nesciunt expedita dolore exercitationem,
                        consequuntur voluptatum ex non recusandae, laboriosam
                        suscipit eius dignissimos aperiam architecto, quis vitae
                        quisquam iusto? Fugit!
                    </p>
                </CommentText>
                <CommentAction>
                    <button>
                        <AiOutlineHeart />
                        <span>10 Like</span>
                    </button>
                    <button>
                        <BsReply />
                        <span>Reply</span>
                    </button>
                </CommentAction>
            </CommentContent>
        </CommentMain>
    );
}
