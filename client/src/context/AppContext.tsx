"use client";

import { useState, createContext } from "react";

interface AppContextProps {
  children: React.ReactNode
}

interface State {
  userPopupVisible: boolean
  replyTypePopupVisible: boolean
  pictureModalUrl: string | null
}

interface AppState extends State {
  setAppState: React.Dispatch<React.SetStateAction<State>>
  toggleUserPopup: () => void
  toggleReplyTypePopup: () => void
  showPicture: (pictureUrl: string) => void
  hidePicture: () => void
}

export const ApplicationContext = createContext<AppState>({
  userPopupVisible: false,
  replyTypePopupVisible: false,
  pictureModalUrl: null,
  setAppState: () => {},
  toggleUserPopup: () => {},
  toggleReplyTypePopup: () => {},
  showPicture: () => {},
  hidePicture: () => {}
});

const AppContext = ({ children }: AppContextProps) => {
  const [appState, setAppState] = useState<State>({
    userPopupVisible: false,
    replyTypePopupVisible: false,
    pictureModalUrl: null
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

  const showPicture = (pictureUrl: string) => {
    setAppState({
      ...appState,
      pictureModalUrl: pictureUrl
    });
  };

  const hidePicture = () => {
    setAppState({
      ...appState,
      pictureModalUrl: null
    });
  };

  return (
    <ApplicationContext.Provider
      value={{
        ...appState,
        setAppState,
        toggleUserPopup,
        toggleReplyTypePopup,
        showPicture,
        hidePicture
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContext;