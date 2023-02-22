import styled from "styled-components";

export const RegistrationMain = styled.div`
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

export const Registration_hr = styled.div`
    margin-top: 20px;
    text-align: center;
    span {
        font-size: 14px;
        position: relative;
        a {
            color: ${(props) => props.theme.colors.primary};
            margin-left: 5px;
        }
    }
`;
