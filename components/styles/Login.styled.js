import styled from "styled-components";

export const LoginMain = styled.div`
    background-color: ${(props) => props.theme.colors.secondary};
    width: 65%;
    margin: auto;
    margin-top: 30px;
    padding: 50px 35px;

    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Heading = styled.h2`
    text-align: center;
    font-size: 30px;
    margin-bottom: 35px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
