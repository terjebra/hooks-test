import React, { FunctionComponent, useContext } from "react";

import { AppContext, ContextType, ActionTypes } from "./Context";
const User: FunctionComponent<{}> = () => {
  const ctx: ContextType = useContext(AppContext);

  return (
    <div>
      <span>{ctx.state.name}</span>
      <button
        onClick={() => {
          ctx.dispatch({
            name: Math.random().toString(),
            type: ActionTypes.CHANGE_NAME
          });
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default User;
