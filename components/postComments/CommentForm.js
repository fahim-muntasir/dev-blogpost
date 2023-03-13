import Button from "../ui/Button.styled";
import Textarea from "../ui/Textarea";

export default function CommentForm({
    commentHandler,
    isLoading,
    commentText,
    setCommentText = (e) => e,
}) {
    return (
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
    );
}
