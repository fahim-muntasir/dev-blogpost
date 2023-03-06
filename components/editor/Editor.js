import { postApi } from "@/fetures/post/postApi";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WithContext as ReactTags } from "react-tag-input";
import Container from "../Container.styled";
import AlertMessage from "../ui/AlertMessage.styled";
import Button from "../ui/Button.styled";
import InputBox from "../ui/Input.styled";
import { EditorContainer, EditorHeader, TagInput } from "./Editor.styled";

const SimpleMDEEditor = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
});

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const suggestions = [];

export default function Editor() {
    const [tags, setTags] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    // tag delete handler
    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    // drag handler
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    // add new handler
    const handleAddition = (tag) => {
        if (tags.length < 4) {
            setTags([...tags, tag]);
        }
    };

    let placeHolderText = null;
    if (tags.length > 0 && tags.length < 4) {
        placeHolderText = "Add another...";
    }
    if (tags.length === 4) {
        placeHolderText = "Only 4 tags allowed.";
    }
    if (tags.length === 0) {
        placeHolderText = "Add up to 4 tags..";
    }

    const reset = () => {
        setTitle("");
        setDescription("");
        setTags([]);
        setAvatar("");
    };

    // create post handler
    const postCreateHandler = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        setIsLoading(true);

        if (tags.length < 4) {
            return alert("4 tags is required!");
        }

        if (!description) {
            return alert("Description is required field!");
        }

        const formData = new FormData();
        formData.append("files", avatar[0]);

        try {
            // avatar upload action despatch
            const response = await dispatch(
                postApi.endpoints.upload.initiate(formData)
            );

            const imageId = response.data[0].id;
            const data = {
                data: {
                    title: title,
                    description: description,
                    avatar: imageId,
                    author: user.username,
                    tags: tags,
                },
            };

            // create post action despatch;
            dispatch(postApi.endpoints.createPost.initiate(data));
            setIsLoading(false);
            setSuccess(true);
            reset();
        } catch (error) {
            console.log(error);
            setError(true);
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <EditorContainer>
                <form onSubmit={postCreateHandler}>
                    <EditorHeader>Create Post</EditorHeader>

                    {success && (
                        <AlertMessage success>
                            Post create successful!
                        </AlertMessage>
                    )}
                    {error && (
                        <AlertMessage error>
                            Something went wrong please try again!
                        </AlertMessage>
                    )}

                    <InputBox
                        lg
                        type="file"
                        onChange={(e) => setAvatar(e.target.files)}
                    />

                    <InputBox
                        placeholder="Add title..."
                        lg
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                    <TagInput>
                        <ReactTags
                            placeholder={placeHolderText}
                            tags={tags}
                            suggestions={suggestions}
                            delimiters={delimiters}
                            handleAddition={handleAddition}
                            handleDelete={handleDelete}
                            handleDrag={handleDrag}
                            autocomplete
                            editable
                            autofocus={false}
                            classNames={{
                                tags: "tagsClass",
                                tagInput: "tagInputClass",
                                tagInputField: "tagInputFieldClass",
                                selected: "selectedClass",
                                tag: "tagClass",
                                remove: "removeClass",
                                suggestions: "suggestionsClass",
                                activeSuggestion: "activeSuggestionClass",
                                editTagInput: "editTagInputClass",
                                editTagInputField: "editTagInputField",
                                clearAll: "clearAllClass",
                            }}
                            required
                        />
                    </TagInput>
                    {/* description box */}
                    <SimpleMDEEditor
                        placeholder="Description"
                        onChange={(value) => setDescription(value)}
                        value={description}
                        required
                    />
                    <Button lg type="submit" disable={isLoading}>
                        Create
                    </Button>
                </form>
            </EditorContainer>
        </Container>
    );
}
