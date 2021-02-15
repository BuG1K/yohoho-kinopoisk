import {
  useReducer, createContext, FunctionComponent, useContext, Dispatch,
} from 'react';

import { reducer, initialState } from './reducer';
import { InitialStateType, ActionsType } from './types';

const Context = createContext<[ InitialStateType, Dispatch<ActionsType>]>([
  initialState, () => null,
]);

export const MediaProvider: FunctionComponent = ({ children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);
export const useMedia = () => useContext(Context);
