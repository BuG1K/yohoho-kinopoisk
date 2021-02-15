import {
  ActionAddMediaType, ADD_MEDIA,
  ActionDeleteMediaType, DELETE_MEDIA,
  ActionChangeDayMovieType, CHANGE_DAY_IN_MOVIE,
  ActionSortingListType, SORTING_LIST,
} from './types';

export const addMedia = (): ActionAddMediaType => ({ type: ADD_MEDIA });

export const deleteMedia = (mediaId: string): ActionDeleteMediaType => ({
  type: DELETE_MEDIA,
  payload: { mediaId },
});

export const changeDayMovie = (
  mediaId: string,
  newDay: string,
): ActionChangeDayMovieType => ({
  type: CHANGE_DAY_IN_MOVIE,
  payload: { mediaId, newDay },
});

export const sortingList = (): ActionSortingListType => ({
  type: SORTING_LIST,
});
