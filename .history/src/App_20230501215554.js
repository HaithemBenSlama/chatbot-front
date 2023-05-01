import React from 'react'
import { LeftSection, RightSection } from './Components/main'
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
        <Login />
      )}
    </div>
  )
      }
export default App