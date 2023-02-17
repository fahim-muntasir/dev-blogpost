import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import Container from "../Container.styled";
import Button from "../ui/Button.styled";
import { EditorContainer, EditorHeader } from "./Editor.styled";

const SimpleMDEEditor = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
});

export default function Editor() {
    return (
        <Container>
            <EditorContainer>
                <EditorHeader>Create Post</EditorHeader>
                <SimpleMDEEditor />
                <Button lg>Create</Button>
            </EditorContainer>
        </Container>
    );
}
