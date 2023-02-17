import styled from "styled-components";

export const CloseBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text_gray};
`;
