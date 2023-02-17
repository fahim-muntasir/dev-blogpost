import styled from "styled-components";

export const NavBar = styled.header`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const NavLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 500px;
    @media (max-width: 768px) {
        width: 150px;
    }
`;

export const NavBrand = styled.div`
    margin-right: 30px;
    h2 {
        background-color: black;
        color: ${(props) => props.theme.colors.secondary};
        border-radius: 5px;
        padding: 0 5px;
    }
`;

export const SearchBox = styled.div`
    width: 100%;
    position: relative;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchIcon_M = styled.div`
    background-color: #dddddd8f;
    display: none;
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary_hover};
        transition: 0.5s;
    }
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

export const SearchIcon = styled.div`
    font-size: 20px;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary_hover};
        transition: 0.5s;
    }
`;

export const NavRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ProfileImg = styled.div`
    margin-left: 20px;
    img {
        border-radius: 100%;
        border: 3px solid #dddddd8f;
        cursor: pointer;
        &:hover {
            border: 3px solid ${(props) => props.theme.colors.primary_hover};
            transition: 0.1s;
        }
    }
`;

export const NavMain = styled.div`
    border-bottom: 1px solid #ddd;
    background-color: ${(props) => props.theme.colors.secondary};
    position: sticky;
    top: 0;
    z-index: 50;
`;

export const MobileMenuIcon = styled.div`
    font-size: 25px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-color: #dddddd8f;
    padding: 0 5px;
    border-radius: 5px;
    display: none;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary_hover};
        transition: 0.1s;
    }
    svg {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;
