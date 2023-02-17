import styled from "styled-components";

const Button = styled.button`
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) =>
        props.outline ? "transparent" : props.theme.colors.primary};
    border-radius: 5px;
    color: ${(props) =>
        props.outline
            ? props.theme.colors.primary
            : props.theme.colors.secondary};
    cursor: pointer;
    font-size: 15px;
    padding: 0 8px;
    align-items: center;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
        text-decoration: ${(props) => props.outline && "underline"};
    }
`;

export default Button;
