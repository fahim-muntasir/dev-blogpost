import styled from "styled-components";

const InputBox = styled.input`
    box-sizing: border-box;
    padding: 5px 20px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 2px solid #94a3b8;
    &:focus {
        border: 2px solid #4f46e5;
        transition: 0.5s;
    }
`;

export default InputBox;
