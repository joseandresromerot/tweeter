"use client";

import { useState, createContext } from "react";

interface AppContextProps {
  children: React.ReactNode
}

interface State {
  userPopupVisible: boolean
}

interface AppState extends State {
  setAppState: React.Dispatch<React.SetStateAction<State>>
  toggleUserPopup: () => void
}

export const ApplicationContext = createContext<AppState>({
  userPopupVisible: false,
  setAppState: () => {},
  toggleUserPopup: () => {}
});

const AppContext = ({ children }: AppContextProps) => {
  const [appState, setAppState] = useState<State>({
    userPopupVisible: false
  });

  const toggleUserPopup = () => {
    setAppState({
      ...appState,
      userPopupVisible: !appState.userPopupVisible
    });
  };

  return (
    <ApplicationContext.Provider value={{ ...appState, setAppState, toggleUserPopup }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;