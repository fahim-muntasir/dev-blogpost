import styled from "styled-components";

const InputBox = styled.input`
    box-sizing: border-box;
    padding: ${(props) => (props.lg ? "12px 20px" : "5px 20px")};
    margin-bottom: ${(props) => (props.lg ? "20px" : "0")};
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
