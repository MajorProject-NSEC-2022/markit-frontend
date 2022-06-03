import { createContext, useContext, useState } from "react";

export enum AuthState {
    loggedIn = "loggedIn",
    loggedOut = "loggedOut",
}

export type AuthContextType = {
    authState: AuthState;
    setAuthState: (AuthState: AuthState) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authState: AuthState.loggedOut,
    setAuthState: (authState) => console.warn("no auth provider"),
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState(AuthState.loggedOut);
    return <AuthContext.Provider value={{ authState, setAuthState }}>{props.children}</AuthContext.Provider>;
};
