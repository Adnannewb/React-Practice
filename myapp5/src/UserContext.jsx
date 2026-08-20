import { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext(null);

// Create the wrapper provider
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    role: 'Administrator',
    isLoggedIn: true
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for easier access
export function useUser() {
  return useContext(UserContext);
}
