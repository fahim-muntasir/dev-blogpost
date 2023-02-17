import Image from "next/image";
import Button from "../ui/Button.styled";
import Textarea from "../ui/Textarea";
import {
    CommentBox,
    CommentListHeader,
    CommentListMain,
} from "./Comments.styled";
import SingleComment from "./SingleComment";

export default function CommentLists() {
    return (
        <CommentListMain>
            <CommentListHeader>
                <h2>Comments (10)</h2>
            </CommentListHeader>

            <CommentBox>
                <Image src="/mypic.jpeg" alt="mypic" width={32} height={32} />
                <div>
                    <Textarea placeholder="Add to the discussion" />
                    <Button>Submit</Button>
                </div>
            </CommentBox>

            <SingleComment />
            <SingleComment />
        </CommentListMain>
    );
}
