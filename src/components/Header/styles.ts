import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 220px;
  & > img {
    margin-top: 30px;
    margin-right: auto;
  }
`;

export const Content = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 42px;
  }
  h2 {
    font-size: 24px;
  }
  h1 span {
    color: #00a7e1;
  }
`;
