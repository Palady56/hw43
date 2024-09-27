import React, { createContext, useContext, useState } from 'react';
import './App.css';

const UserInfo = createContext({});

function App() {
  const [user, setUser] = useState({
    id: 52,
    name: 'Vladimir',
    theme: 'light',
  });

  const toggleTheme = () => {
    setUser(prevUser => ({
      ...prevUser,
      theme: prevUser.theme === 'dark' ? 'light' : 'dark',
    }));
  };

  return (
    <UserInfo.Provider value={{ ...user, toggleTheme }}>
      <div className={`App ${user.theme}`}>
        <UserPage />
      </div>
    </UserInfo.Provider>
  );
}

function UserPage() {
  const userData = useContext(UserInfo);
  return (
    <div>
      <h1>Hello, {userData.name}!</h1>
      <p>Current Theme: {userData.theme}</p>
      <ThemeSwitcher />
    </div>
  );
}

function ThemeSwitcher() {
  const userData = useContext(UserInfo);
  return (
    <button onClick={userData.toggleTheme}>
      Switch to {userData.theme === 'dark' ? 'Light' : 'Dark'} Theme
    </button>
  );
}

export default App;
