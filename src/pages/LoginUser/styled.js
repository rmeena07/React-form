import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    padding: 40px 60px;
    border-radius: 10px;
    background: #B39200;
    max-width: 570px;
    width: 100%;
`;

export const Forms = styled.div`
    margin-top: 30px;
`;

export const ForgotPassLink = styled(Link)`
    font-size: 16px;
    line-height: 1.5;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 15px;
    text-align: right;
    color:white;
`;