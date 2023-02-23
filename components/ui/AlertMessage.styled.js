import styled from "styled-components";

const AlertMessage = styled.div`
    padding: 8px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
        font-size: 20px;
    }
    ${(props) => {
        if (props.error) {
            return "background-color: #fee2e2;border: 1px solid #f87171;color: #991b1b;";
        }

        if (props.success) {
            return "background-color: #ccfbf1;border: 1px solid #14b8a6;color: #0d9488;";
        }
    }}
`;

export default AlertMessage;
