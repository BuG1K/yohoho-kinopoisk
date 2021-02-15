import {
  FunctionComponent, useEffect, useRef, useState,
} from 'react';
import {
  List, ListNested, SuitHeart,
  SuitHeartFill, FilePlay,
} from 'react-bootstrap-icons';

import ToolbarStyle from './ToolbarStyle';
import MediaList from '../MediaList';
import Player from '../Player';
import {
  useMedia, deleteMedia, addMedia, sortingList,
} from '~/state';
import { orange } from '~/styles';

const Toolbar: FunctionComponent = () => {
  const [state, dispatch] = useMedia();
  const { mediaList, media, favorite } = state;
  const [showList, setShowList] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const isSortingList = useRef(false);
  const iconProps = { color: orange, size: 20 };

  useEffect(() => {
    dispatch(sortingList());
  }, []);
  useEffect(() => {
    if (!isSortingList.current) isSortingList.current = true;
  }, [mediaList]);
  useEffect(() => {
    if (isSortingList.current && !showList) {
      isSortingList.current = false;
      dispatch(sortingList());
    }
  }, [showList]);

  return (
    <ToolbarStyle.Container>
      <button type="button" onClick={() => setShowList(!showList)}>
        {showList ? <ListNested {...iconProps} /> : <List {...iconProps} />}
      </button>

      {media && (
        <>
          <button
            type="button"
            onClick={() => dispatch(favorite
              ? deleteMedia(media.id) : addMedia())}
          >
            {favorite
              ? <SuitHeartFill {...iconProps} />
              : <SuitHeart {...iconProps} />}
          </button>

          <button type="button" onClick={() => setShowPlayer(true)}>
            <FilePlay {...iconProps} />
          </button>
        </>
      )}

      {showList && <MediaList />}

      <Player
        showPlayer={showPlayer}
        onClose={() => setShowPlayer(false)}
        mediaId={media?.id}
      />
    </ToolbarStyle.Container>
  );
};

export default Toolbar;
