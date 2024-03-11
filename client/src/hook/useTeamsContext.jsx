import { TeamsContext } from "../context/TeamsContext";
import { useContext } from "react";

export const useTeamsContext = () => {
  const context = useContext(TeamsContext);

  if (!context) {
    throw Error("useTeamsContext must be used inside an TeamsContextProvider");
  }
  return context;
};
