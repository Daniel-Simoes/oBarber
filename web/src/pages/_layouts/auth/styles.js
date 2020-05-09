import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(#036885, #504758);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: -330px;

        input {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            height: 50px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            transition: border 0.2s;

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }

            &:focus {
            }
        }

        span {
            color: rgba(255, 255, 255, 0.5);
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 50px;
            background: #fc0061;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: border 0.2s;

            &:hover {
                background: ${darken(0.03, '#fc0061')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
            }
        }
    }
`;
