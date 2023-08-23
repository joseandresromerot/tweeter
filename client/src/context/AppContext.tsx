"use client";

import { useState, createContext } from "react";

interface AppContextProps {
  children: React.ReactNode
}

interface State {
  userPopupVisible: boolean
  replyTypePopupVisible: boolean
}

interface AppState extends State {
  setAppState: React.Dispatch<React.SetStateAction<State>>
  toggleUserPopup: () => void
  toggleReplyTypePopup: () => void
}

export const ApplicationContext = createContext<AppState>({
  userPopupVisible: false,
  replyTypePopupVisible: false,
  setAppState: () => {},
  toggleUserPopup: () => {},
  toggleReplyTypePopup: () => {}
});

const AppContext = ({ children }: AppContextProps) => {
  const [appState, setAppState] = useState<State>({
    userPopupVisible: false,
    replyTypePopupVisible: false
  });

  const toggleUserPopup = () => {
    setAppState({
      ...appState,
      userPopupVisible: !appState.userPopupVisible
    });
  };

  const toggleReplyTypePopup = () => {
    setAppState({
      ...appState,
      replyTypePopupVisible: !appState.replyTypePopupVisible
    });
  };

  return (
    <ApplicationContext.Provider value={{ ...appState, setAppState, toggleUserPopup, toggleReplyTypePopup }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;