import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 15px;
    .input {
        width: 100%;
        font-weight: 400;
        font-size: 16px;
        line-height: 45px;
        color: black;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 0 12px;
        height: 45px;
        &:focus {
            outline: none;
        }
        &.error {
            border: 1px solid red;
        }
    }
`;
export const Alert = styled.p`
    color: #8B0000;
    margin: 5px 0 0 0;
`;
