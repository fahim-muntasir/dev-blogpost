import styled from "styled-components";

export const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 80px auto 28%;
    @media (max-width: 1000px) {
        grid-template-columns: 80px auto;
    }
    @media (max-width: 768px) {
        grid-template-columns: auto;
        padding-bottom: 80px;
    }
`;

export const PostMain = styled.div`
    margin-top: 20px;
`;

export const PostContent = styled.div`
    padding: 15px;
`;

export const SinglePostBanner = styled.div`
    margin-bottom: 30px;
    img {
        border-radius: 5px;
        width: 100%;
        @media (max-width: 768px) {
            height: 210px;
        }
    }
    @media (max-width: 768px) {
        margin-bottom: 5px;
    }
`;

export const PostActionContainer = styled.div`
    position: relative;
    margin-top: 50px;
    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.secondary};
        align-items: center;
        padding: 10px 0;
    }
`;

export const PostAction = styled.div`
    text-align: center;
    position: sticky;
    top: 75px;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        gap: 80px;
    }
`;

export const SingleActionBtn = styled.div`
    display: grid;
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.text_gray};
    svg {
        font-size: 23px;
    }
    span {
        font-size: 14px;
    }
    div {
        padding: 6px;
        border-radius: 100%;
        cursor: pointer;
        &:hover {
            background-color: ${(props) => props.theme.colors.primary_hover};
            color: ${(props) => props.theme.colors.primary};
        }
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 0;
    }
`;

export const PostDescription = styled.div`
    margin-top: 30px;
    p {
        font-size: 19px;
        line-height: 33px;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

export const CommentSection = styled.div``;

export const PostAuthorInfo = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
`;
