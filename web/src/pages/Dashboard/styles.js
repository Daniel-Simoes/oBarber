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
            color: #fff;
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
    background: rgba(0, 0, 0, 0.3);
    opacity: ${props => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        color: ${props => (props.available ? '#666' : '#7159c1')};
        font-size: 20px;
        font-weight: normal;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${props => (props.available ? '#9BCD' : '#FF6347')};
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 2px solid;
    }
`;
