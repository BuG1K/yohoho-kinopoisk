import { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

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
}) => (showPlayer && mediaId ? createPortal((
  <PlayerStyle.Container onClick={onClose}>
    <PlayerStyle.IframeLoading>
      <PlayerStyle.Iframe
        src={`https://4h0y.gitlab.io/#${mediaId}`}
        allowFullScreen
        {...iFrameSize}
      />
    </PlayerStyle.IframeLoading>
  </PlayerStyle.Container>
), modalElement) : null);

export default Player;
