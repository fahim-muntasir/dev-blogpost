import styled from "styled-components";

const Button = styled.button`
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: transparent;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 15px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
        text-decoration: underline;
    }
`;

export default Button;
