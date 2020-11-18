import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  max-width: 400px;
  padding: 15px 30px;
  margin: 20px auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  border: 2px solid #00a7e1;
  border-radius: 30px;

  box-shadow: 4px 4px 3px 0px #00000036;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      list-style-type: none;

      a {
        border-radius: 50%;
        border: 0;
        padding: 1px;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          border-radius: 50%;
          background-color: #c4c4c4;
          color: #fff;
        }

        &.active {
          svg {
            background-color: #00a7e1;
            color: #00a7e1;
          }
        }

        &:hover {
          svg {
            background: ${shade(0.2, '#00a7e1')};
          }
        }
      }
    }
  }
`;
