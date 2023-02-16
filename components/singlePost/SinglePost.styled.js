import styled from "styled-components";

export const MainDiv = styled.div`
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ddd;
    background-color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 20px;
`;

export const PostBanner = styled.div`
    margin-bottom: 30px;
`;

export const PostInfo = styled.div`
    display: flex;
    padding: 0 20px;
    margin-bottom: 30px;
`;

export const PostAdminImg = styled.div`
    margin-right: 10px;
    display: flex;
    gap: 8px;
    img {
        border-radius: 100%;
    }
`;

export const PostAuthor = styled.h3`
    color: ${(props) => props.theme.colors.text_gray};
    font-size: 17px;
    margin-bottom: -6px;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const PostDate = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_gray};
`;

export const PostTitle = styled.h1`
    color: ${(props) => props.theme.colors.dark};
    margin-top: 15px;
    margin-bottom: 15px;
    &:hover {
        text-decoration: ${(props) => (props.ul ? "underline" : "none")};
    }
    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const TagBtn = styled.button`
    background-color: ${(props) => props.theme.colors.bodyColor};
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
`;

export const PostFooter = styled.div`
    display: flex;
    gap: 8px;
`;
