import { useContext, createContext } from "react";

export const AppContext = createContext({
  user: null,
  placeData: null,
  logInFunc: () => {},
  logOutFunc: () => {},
  userAvatar: null,
  loadUserAvatar: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}