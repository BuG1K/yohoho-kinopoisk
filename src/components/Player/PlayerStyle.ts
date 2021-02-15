import styled from 'styled-components';

import { zIndexApp } from '~/styles';

export const iFrameSize = { width: '768px', height: '370px' };

const PlayerStyle = {
  Container: styled.div`
    z-index: ${zIndexApp + 1};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .9);
  `,

  IframeLoading: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${iFrameSize.width};
    height:${iFrameSize.height};
    box-shadow: 0 19px 38px rgba(0, 0, 0, .30), 0 15px 12px rgba(0, 0, 0, .22);
    background-color: rgb(42, 52, 64);
  `,

  Iframe: styled.iframe`
    border: none;
    animation: loading 1s ease-out;

    @keyframes loading {
      0% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  `,
};

export default PlayerStyle;
