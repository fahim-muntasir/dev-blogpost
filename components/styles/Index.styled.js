import styled from "styled-components";

export const MainSection = styled.section`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    margin-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;
