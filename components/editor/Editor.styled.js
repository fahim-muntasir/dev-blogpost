import styled from "styled-components";

export const EditorContainer = styled.div`
    margin-top: 50px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;
`;

export const EditorHeader = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
`;

export const TagInput = styled.div`
    margin-bottom: 20px;
    .selectedClass {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .tagClass {
        background-color: #ddd;
        padding: 0 8px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${(props) => props.theme.colors.text_gray};
    }
    .tagInputFieldClass {
        border: none;
        outline: none;
    }

    .removeClass {
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 20px;
        padding: 0;
        &:hover {
            color: red;
            cursor: pointer;
        }
    }
`;
