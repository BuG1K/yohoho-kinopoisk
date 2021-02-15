import { Reducer } from 'react';

import {
  LOCAL_STORAGE_KEY, days,
  MediaType, InitialStateType, ActionsType,
  ADD_MEDIA, DELETE_MEDIA, CHANGE_DAY_IN_MOVIE, SORTING_LIST,
} from './types';

export const initialState = (() => {
  const [, type, id, nextRoute] = window.location.pathname.split('/');
  const title = document.title.split(' – ')[0].split(' (')[0];
  const mediaList: MediaType[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || '[]',
  );

  return {
    media: ['series', 'film'].includes(type) && id && !nextRoute ? {
      id, type, title, day: '',
    } : null,
    favorite: mediaList.some((favoriteMedia) => favoriteMedia.id === id),
    mediaList,
  };
})();

export const reducer: Reducer<InitialStateType, ActionsType> = (
  state, action,
) => {
  let newState = state;
  const { media, favorite, mediaList } = newState;

  if (action.type === ADD_MEDIA && media) {
    newState = {
      ...state,
      mediaList: [...mediaList, media],
      favorite: true,
    };
  }

  if (action.type === DELETE_MEDIA) {
    const { mediaId } = action.payload;

    newState = {
      ...state,
      mediaList: mediaList.filter(({ id }) => id !== mediaId),
      favorite: mediaId === media?.id ? false : favorite,
    };
  }

  if (action.type === CHANGE_DAY_IN_MOVIE) {
    const { mediaId, newDay } = action.payload;

    newState = {
      ...state,
      mediaList: mediaList.map((elMedia) => (
        elMedia.id === mediaId ? { ...elMedia, day: newDay } : elMedia
      )),
    };
  }

  if (action.type === SORTING_LIST) {
    const indexDay = new Date().getDay();
    const sortedDays = [...days.slice(indexDay), ...days.slice(0, indexDay)];
    const newList: MediaType[] = [];

    sortedDays.forEach((day) => mediaList.forEach((elMedia) => (
      elMedia.day === day && newList.push(elMedia)
    )));
    mediaList.forEach((elMedia) => !elMedia.day && newList.push(elMedia));

    newState = { ...state, mediaList: newList };
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState.mediaList));
  return newState;
};
