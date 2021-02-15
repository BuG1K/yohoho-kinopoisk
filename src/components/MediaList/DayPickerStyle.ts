import styled from 'styled-components';

import { orange, hoverBackground } from '~/styles';

const DayPickerStyle = {
  Container: styled.div`
    user-select: none;
  `,

  Input: styled.button<{ today?: boolean }>`
    width: 40px;
    font-size: 16px;
    color: ${({ today }) => (today ? orange : 'rgb(255, 255, 255)')};
  `,

  Days: styled.ul`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 30px;
    background-color: ${hoverBackground};
  `,

  Day: styled.li`
    margin: 0 4px;
    font-size: 16px;

    &:hover {
      color: ${orange};

      svg {
        fill: ${orange};
      }
    }
  `,
};

export default DayPickerStyle;
