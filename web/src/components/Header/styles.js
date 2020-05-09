import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 68px;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    nav {
        display: flex;
        margin-top: 19px;
        font-size: 18px;
    }

    img {
        width: 40px;
        height: 30px;
        margin-right: 10px;
        margin-top: -2px;
    }

    a {
        font-weight: bold;
        color: #f5f5f5;
    }

    aside {
        display: flex;
        margin-top: 19px;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #223;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
    }

    img {
        margin-top: 0px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
`;
