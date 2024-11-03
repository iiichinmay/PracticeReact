import React from 'react';
import './App.css';
import LoginPage from './components/login/login.jsx';
import ThemeToggle from './components/hooks/index.jsx';


function App() {
  return (
    <div>
      <LoginPage />
      <ThemeToggle />
    </div>
  );
}

export default App;
