import { useContext, createContext } from "react";

export const AppContext = createContext({
  user: null,
  logInFunc: () => {},
  logOutFunc: () => {},
  userAvatar: null,
  loadUserAvatar: () => {},
});

export function useAppContext() {
  const {
    user,
    logInFunc,
    logOutFunc,
    userAvatar,
    loadUserAvatar,
  } = useContext(AppContext);
  return { user, logInFunc, logOutFunc, userAvatar, loadUserAvatar };
}
