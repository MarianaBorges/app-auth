import React, {
    createContext, 
    useContext
} from "react";

interface AuthPrividerProps{
    children: React.ReactNode
}

interface ContextProps {
    signIn: ()=>void;
    signUp: ()=>void;
}

const AuthContext = createContext({} as ContextProps);

function AuthProvider({children}: AuthPrividerProps){

    function signIn(){

    }

    function signUp(){

    }

    return (
        <AuthContext.Provider value={{signIn, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}