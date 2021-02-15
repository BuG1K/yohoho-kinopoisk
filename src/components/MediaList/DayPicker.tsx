import { FunctionComponent, useState } from 'react';
import { CalendarPlus } from 'react-bootstrap-icons';

import DayPickerStyle from './DayPickerStyle';
import { changeDayMovie, useMedia, days } from '~/state';

const DayPicker: FunctionComponent<{
  mediaId: string;
  day: string;
}> = ({ mediaId, day }) => {
  const [, dispatch] = useMedia();
  const [showDays, setShowDays] = useState(false);
  const today = days[new Date().getDay()] === day;

  const onShowDays = () => setShowDays(true);
  const onHideDays = () => setShowDays(false);

  const onMouseUp = (newDay: typeof day) => {
    dispatch(changeDayMovie(mediaId, newDay));
    onHideDays();
  };

  const renderCalendarPlus = () => (
    <CalendarPlus size="16" color="rgb(255, 255, 255)" />
  );

  return (
    <DayPickerStyle.Container onMouseLeave={onHideDays}>
      <DayPickerStyle.Input onMouseDown={onShowDays} today={today}>
        {day || renderCalendarPlus()}
      </DayPickerStyle.Input>

      {showDays && (
        <DayPickerStyle.Days onMouseUp={onHideDays}>
          {days.map((elDay) => elDay !== day && (
            <DayPickerStyle.Day key={elDay} onMouseUp={() => onMouseUp(elDay)}>
              {elDay}
            </DayPickerStyle.Day>
          ))}

          <DayPickerStyle.Day onMouseUp={() => onMouseUp('')}>
            {renderCalendarPlus()}
          </DayPickerStyle.Day>
        </DayPickerStyle.Days>
      )}
    </DayPickerStyle.Container>
  );
};

export default DayPicker;
