import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #00a7e1;
  display: flex;
  border-radius: 20px;

  aside {
    background-color: #00171f;
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;

    border-radius: 20px 0 0 20px;

    h1 {
      margin: 100px 60px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
