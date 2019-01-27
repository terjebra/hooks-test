import * as React from "react";
import { Dispatch } from "react";

export type AppState = {
  name: string;
};

const initialState: AppState = {
  name: "Terje B."
};

export type ContextType = {
  state: AppState;
  dispatch: Dispatch<Actions>;
};

const reducer: React.Reducer<AppState, Actions> = (
  state: AppState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    case ActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        name: action.lang
      };
    default:
      return state;
  }
};

export enum ActionTypes {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export type ChangeName = {
  name: string;
  type: ActionTypes.CHANGE_NAME;
};

export type ChangeLanguage = {
  lang: string;
  type: ActionTypes.CHANGE_LANGUAGE;
};

export type Actions = ChangeName | ChangeLanguage;

export const AppContext = React.createContext<ContextType>({
  dispatch: (value: Actions) => {},
  state: initialState
});

export const AppContextProvider: React.FunctionComponent<{}> = props => {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export const AppContextConsumer = AppContext.Consumer;
