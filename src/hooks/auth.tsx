import React, {
    createContext, 
    useContext,
    useState,
    useEffect
} from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface AuthPrividerProps{
    children: React.ReactNode
}

interface UserProps{
    id: string;
    createdAt: string;
	email: string;
	name: string;
	phone: string;
	user_type: string;
}

interface ContextProps {
    logged: boolean;
    signIn: (email: string, password:string)=>Promise<void>;
    signUp: (email:string, password:string, name:string, phone: string)=>Promise<void>;
    logout: ()=>Promise<void>;
}

const AuthContext = createContext({} as ContextProps);

function AuthProvider({children}: AuthPrividerProps){

    const [user, setUser] = useState({} as UserProps|null);
    const [token, setToken] = useState('');

    async function signIn(email: string, password:string){
        try {
            const request = await api.post('/user/login', {email, password});
            setUser(request.data.user);
            setToken(request.data.token);
            await AsyncStorage.setItem('@APP_AUTH:user', JSON.stringify(request.data.user));
            await AsyncStorage.setItem('@APP_AUTH:token', JSON.stringify(request.data.token));
            console.log('deu certo')
        } catch (error) {
            console.error(error);
            throw new Error(`Error: ${error}`);
        }
    }

    async function signUp(email:string, password:string, name:string, phone: string){
        try {
            const request = await api.post('/user', {email, password, name, phone});
        } catch (error) {
            console.error(error);
            throw new Error(`Error: ${error}`);
        }
    }

    async function logout() {
        await AsyncStorage.multiRemove(['@APP_AUTH:user', '@APP_AUTH:token']);
        setUser(null);
        setToken('');
    }

    useEffect(()=>{
        async function loadingUserToken(){
            const userStorage = await AsyncStorage.getItem('@APP_AUTH:user');
            const tokenStorage = await AsyncStorage.getItem('@APP_AUTH:token');
            if (userStorage && tokenStorage){
                setUser(JSON.parse(userStorage));
                setToken(JSON.parse(tokenStorage));
            }
        };

        loadingUserToken();
    },[]);

    return (
        <AuthContext.Provider value={{
            logged: !!user,
            signIn, 
            signUp,
            logout
        }}>
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