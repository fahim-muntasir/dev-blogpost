import styled from "styled-components";

const Textarea = styled.textarea`
    border: 2px solid #ddd;
    border-radius: 5px;
    width: 100%;
    outline: none;
    padding: 10px;
    resize: none;
    height: 180px;
    &:focus {
        border: 2px solid ${(props) => props.theme.colors.primary};
    }
`;

export default Textarea;
