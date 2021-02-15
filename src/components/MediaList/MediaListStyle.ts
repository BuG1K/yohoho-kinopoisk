import styled from 'styled-components';

import { hoverBackground } from '~/styles';

const headerHeight = document.querySelector('header')?.clientHeight;

const MediaListStyle = {
  Container: styled.div`
    position: fixed;
    top: ${headerHeight ? `${headerHeight}px` : '54px'};
    left: 0;
    display: flex;
    flex-direction: column;
  `,

  Line: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 300px;
    height: 30px;
    padding: 0 3px;
    border-bottom: solid rgba(255, 255, 255, .15) 1px;
    background-color: rgb(36, 36, 36);
    color: rgb(255, 255, 255);

    &:hover {
      background-color: ${hoverBackground};
    }
  `,

  Link: styled.a`
    width: 100%;
    color: rgb(255, 255, 255);
  `,
};

export default MediaListStyle;
