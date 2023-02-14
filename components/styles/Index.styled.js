import styled from "styled-components";

export const MainSection = styled.section`
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;
