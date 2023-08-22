"use client";

import { useState, createContext } from "react";

interface AuthContextProps {
  children: React.ReactNode
}

interface User {
  id: string
  fullname: string
}

interface State {
  loading: boolean
  data: User | null
  error: string | null
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>
}

const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {}
});

const AuthContext = ({ children }: AuthContextProps) => {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null
  });

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;