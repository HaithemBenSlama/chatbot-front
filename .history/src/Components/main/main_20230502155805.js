import React from 'react'
import "./style.css"
import axios from "axios";
import { useState } from 'react';

const [message,setMessage]=useState()

const handleClickEnvoyer = async (e) => {
    e.preventDefault()
    console.log(message)

}

const Main = () => {
  return (
    <div>
    <h3>Le Sportif </h3>
    <div>
      <div id="chatbox">
        <p class="botText">
          <span>
            Le Sportif: Salut, je suis heureux de te voir aujourd'hui.
            je m'appelle Le Sportif,je suis un agent conversationnel qui reponds à tous vos besoins sportives.
            Comment je peux t'aider ?  
          </span>
        </p>
      </div>
     <div id="userInput">
        <input id="textInput" type="text" name="userMessage" placeholder="Ecrire ton messasge..." onChange={(e)=>setMessage(e.target.value)}/>
        <input id="buttonInput" type="submit" value="Envoyer" onClick={handleClickEnvoyer}/>
     </div>  
    </div>
    </div>
    
  )
}

export default Main