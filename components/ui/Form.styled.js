import styled from "styled-components";

const Form = styled.form`
    input {
        margin-bottom: 20px;
        margin-top: 5px;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
        display: grid;
        gap: 0;
    }
`;

export default Form;
