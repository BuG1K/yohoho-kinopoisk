export const LOCAL_STORAGE_KEY = 'yohoho-kinopoisk';
export const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

export interface MediaType {
  id: string;
  type: string;
  title: string;
  day: string;
}
export interface InitialStateType {
  media: MediaType | null;
  mediaList: MediaType[];
  favorite: boolean;
}

export const ADD_MEDIA = 'ADD_MEDIA';
export interface ActionAddMediaType {
  type: typeof ADD_MEDIA;
}

export const DELETE_MEDIA = 'DELETE_MEDIA';
export interface ActionDeleteMediaType {
  type: typeof DELETE_MEDIA;
  payload: { mediaId: string };
}

export const CHANGE_DAY_IN_MOVIE = 'CHANGE_DAY_IN_MOVIE';
export interface ActionChangeDayMovieType {
  type: typeof CHANGE_DAY_IN_MOVIE;
  payload: {
    mediaId: string;
    newDay: string;
  };
}

export const SORTING_LIST = 'SORTING_LIST';
export interface ActionSortingListType {
  type: typeof SORTING_LIST;
}

export type ActionsType =
  ActionAddMediaType |
  ActionDeleteMediaType |
  ActionChangeDayMovieType |
  ActionSortingListType;
