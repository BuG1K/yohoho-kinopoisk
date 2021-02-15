import { FunctionComponent } from 'react';
import { XCircle } from 'react-bootstrap-icons';

import MediaListStyle from './MediaListStyle';
import DayPicker from './DayPicker';
import { deleteMedia, useMedia } from '~/state';
import { red } from '~/styles';

const MediaList: FunctionComponent = () => {
  const [state, dispatch] = useMedia();
  const { mediaList } = state;

  return (
    <MediaListStyle.Container>
      {mediaList.length === 0 ? (
        <MediaListStyle.Line>Список пустой</MediaListStyle.Line>
      ) : mediaList.map(({
        id, type, title, day,
      }) => (
        <MediaListStyle.Line key={id}>
          <button onClick={() => dispatch(deleteMedia(id))} type="button">
            <XCircle color={red} size={17} />
          </button>

          <DayPicker mediaId={id} day={day} />

          <MediaListStyle.Link href={`https://www.kinopoisk.ru/${type}/${id}`}>
            <span>{title}</span>
          </MediaListStyle.Link>
        </MediaListStyle.Line>
      ))}
    </MediaListStyle.Container>
  );
};

export default MediaList;
