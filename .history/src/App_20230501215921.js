import React from 'react'
import { LeftSection, RightSection } from './Components/main'
import { useState } from "react"
import Login from './Components/Login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <>
        <LeftSection setIsLoggedIn={setIsLoggedIn}/>
        <RightSection/>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn}/>
      )}
    </div>
  )
      }
export default App