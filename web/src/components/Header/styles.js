import styled from 'styled-components';



export const Container = styled.div`
  height: 64px;
background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
        margin-top: 85px;
      margin-right: 20px;
      padding-right: 20px;
      height: 150px;

    }
  }

  a {
    font-weight: bold;

  }

  aside {
    display: flex;
    align-items: center;
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

    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;

    }
  }

  img {

    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
