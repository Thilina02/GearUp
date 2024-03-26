import axios from 'axios';
import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction,useEffect } from 'react';

interface UserContextProviderProps {
  children: ReactNode;
}

interface User {
  // Define the structure of  user object

  id: string;
  username: string;
  Fname: string;
}

interface UserContextValue {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextValue);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  

 

  const login = async (username: string, password: string) => {
    try {
      // Perform login logic using axios or any authentication mechanism
  
      //  set the user data in the state
      const response = await axios.post<User>('/api/login', { username, password });
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure
    }
  };

  const logout = () => {
    // Perform logout logic if needed
    setUser(null);
  };

  const contextValue: UserContextValue = {
    user,
    setUser,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
