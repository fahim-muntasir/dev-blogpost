import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import Container from "../Container.styled";
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

const suggestions = [
    {
        id: "Bangladesh",
        text: "Bangladesh",
    },
    {
        id: "India",
        text: "India",
    },
    {
        id: "Pakistan",
        text: "Pakistan",
    },
    {
        id: "Thiland",
        text: "Thiland",
    },
];

export default function Editor() {
    const [tags, setTags] = useState([]);

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

    return (
        <Container>
            <EditorContainer>
                <EditorHeader>Create Post</EditorHeader>
                <InputBox placeholder="Add title..." lg />
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
                    />
                </TagInput>
                {/* description box */}
                <SimpleMDEEditor placeholder="Description" />
                <Button lg>Create</Button>
            </EditorContainer>
        </Container>
    );
}
