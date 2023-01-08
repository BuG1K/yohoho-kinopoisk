import { FunctionComponent } from 'react';
import { createPortal, useEffect } from 'react-dom';

import PlayerStyle, { iFrameSize } from './PlayerStyle';

const modalElement = document.createElement('div');
document.body.appendChild(modalElement);

const Player: FunctionComponent<{
  showPlayer: boolean;
  onClose: VoidFunction;
  mediaId: string | undefined;
}> = ({
  showPlayer,
  onClose,
  mediaId,
}) => {
  useEffect(() => {
      const script = document.createElement("script");

      script.src = "//yohoho.cc/yo.js";
      script.async = true;

      document.body.appendChild(script);
  }, [])
  return (showPlayer && mediaId ? createPortal((
    <PlayerStyle.Container onClick={onClose}>
      <PlayerStyle.IframeLoading>
        <div id="yohoho" data-kinopoisk={mediaId}></div>
      </PlayerStyle.IframeLoading>
    </PlayerStyle.Container>
), modalElement) : null);

};

export default Player;
