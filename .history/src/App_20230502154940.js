import React from 'react'
import Main from './Components/main/main';
import { useState } from "react"
import Login from './Components/Login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <Main/>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  )
      }
export default App