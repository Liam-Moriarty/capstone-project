import React, { createContext, useReducer } from "react";

export const TeamsContext = createContext();

export const teamsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEAM":
      return {
        teams: action.payload,
      };
    case "CREATE_TEAM":
      return {
        teams: [action.payload, ...state.teams],
      };
    case "DELETE_TEAM":
      return {
        teams: state.teams.filter((w) => w._id != action.payload._id),
      };
    default:
      return state;
  }
};

export const TeamsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamsReducer, {
    teams: null,
  });

  return (
    <TeamsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TeamsContext.Provider>
  );
};
