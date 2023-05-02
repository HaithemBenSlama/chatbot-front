import React, { useState } from 'react'
import "./style.css"
import axios from "axios";

const Main = () => {
  const [message, setMessage] = useState("");
  const [chatbox, setChatbox] = useState([]);

  const handleClickEnvoyer = async (e) => {
    e.preventDefault();
    const userHTML = (
      <p className="userText">
        Utilisateur: <span>{message}</span>
      </p>
    );
    setChatbox((prevChatbox) => [...prevChatbox, userHTML]);
    setMessage("");
    document.getElementById("textInput").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // Make API call to fetch bot response
    const response = await axios.get(`/get?userMessage=${message}`);
    const botHTML = (
      <p className="botText">
        Le Sportif: <span>{response.data}</span>
      </p>
    );
    setChatbox((prevChatbox) => [...prevChatbox, botHTML]);
  };

  return (
    <div>
      <h3>Le Sportif </h3>
      <div>
        <div id="chatbox">
          <p className="botText">
            <span>
              Le Sportif: Salut, je suis heureux de te voir aujourd'hui.
              je m'appelle Le Sportif,je suis un agent conversationnel qui reponds à tous vos besoins sportives.
              Comment je peux t'aider ?  
            </span>
          </p>
          {/* Map over chatbox state array and render each message */}
          {chatbox.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div id="userInput">
          <input
            id="textInput"
            type="text"
            name="userMessage"
            placeholder="Ecrire ton messasge..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input
            id="buttonInput"
            type="submit"
            value="Envoyer"
            onClick={handleClickEnvoyer}
            onKeyPress={(e)=>{ if(e===13) handleClickEnvoyer }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
