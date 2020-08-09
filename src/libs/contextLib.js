import { useContext, createContext } from "react";

export const AppContext = createContext({
  user: null,
  logInFunc: () => {},
  logOutFunc: () => {},
});

export function useAppContext() {
  const { user, logInFunc, logOutFunc } = useContext(AppContext);
  return { user, logInFunc, logOutFunc };
}
