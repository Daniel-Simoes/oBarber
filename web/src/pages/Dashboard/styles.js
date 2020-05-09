import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: rgba(0, 0, 0, 0.5);
            font-size: 24px;
            margin: 0 15px;
        }
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;
export const Time = styled.li`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
    opacity: ${props => (props.past ? 0.3 : 1)};

    strong {
        display: block;
        color: ${props => (props.available ? 'rgba(00,00, 00, 0.5)' : '#999')};
        font-size: 20px;
        font-weight: bold;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${props => (props.available ? 'rgba(00,00, 00, 0.3)' : '#999')};
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 2px solid;
    }
`;
