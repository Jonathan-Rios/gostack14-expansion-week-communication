import { shade } from 'polished';
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

  padding: 20px;
  margin: 15px;
  border-radius: 0 20px 20px 0;
  width: 100%;
  height: 95%;
  background: #ecf9fd;

  p {
    font-size: 20px;
    color: #00171f;
  }
`;
