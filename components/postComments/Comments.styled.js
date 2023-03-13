import styled from "styled-components";

export const CommentMain = styled.div`
    display: flex;
    gap: 8px;
    img {
        border-radius: 100%;
    }
    margin-bottom: 20px;
`;

export const CommentContent = styled.div``;

export const CommentAction = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    button {
        display: flex;
        border: none;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        background-color: transparent;
        border-radius: 5px;
        &:hover {
            background-color: ${(props) => props.theme.colors.secondary_hover};
        }

        span {
            font-size: 14px;
            font-weight: 200;
        }
    }
`;

export const CommentText = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
`;

export const CommentListHeader = styled.div`
    margin-bottom: 18px;
    h2 {
        font-size: 20px;
    }
`;

export const CommentListMain = styled.div`
    padding: 0 15px;
    margin-top: 20px;
`;

export const CommentBox = styled(CommentMain)`
    form {
        width: 100%;
    }
`;
