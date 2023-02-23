import styled from "styled-components";

export const MenuContainer = styled.div`
    position: absolute;
    right: 0;
    top: 58px;
    background-color: ${(props) => props.theme.colors.secondary};
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 8px;
    width: 250px;
`;

export const NameHeader = styled.div`
    padding: 8px 10px;
    color: ${(props) => props.theme.colors.text_gray};
    margin-bottom: 8px;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary_hover};
        border-radius: 5px;
        cursor: pointer;
        text-decoration: underline;
    }
    h3 {
        font-size: 17px;
        margin-bottom: -5px;
    }
    span {
        font-size: 15px;
    }
`;

export const MenuItems = styled.ul`
    border-top: 1px solid #ddd;
    padding-top: 8px;

    button,
    a {
        padding: 8px 10px;
        display: block;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.text_gray};
        &:hover {
            background-color: ${(props) => props.theme.colors.primary_hover};
            color: ${(props) => props.theme.colors.primary};
            text-decoration: underline;
        }
    }

    button {
        border: none;
        background-color: #eef2ff;
        width: 100%;
        cursor: pointer;
    }
`;
