import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  iframe {
    margin-bottom: 20px;
  }

  p {
    color: #fff;
  }
`;
