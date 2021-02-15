import styled from 'styled-components';

import { zIndexApp } from '~/styles';

const ToolbarStyle = {
  Container: styled.div`
    z-index: ${zIndexApp};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
  `,

  Background: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .9);
  `,
};

export default ToolbarStyle;
