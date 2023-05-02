import React from 'react'
import "./style.css"
const main = () => {
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
        <input id="textInput" type="text" name="userMessage" placeholder="écrire ton messasge..."/>
        <input id="buttonInput" type="submit" value="Envoyer"/>
     </div>  
    </div>
    </div>
    
  )
}

export default main