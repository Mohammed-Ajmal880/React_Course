import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
      const [chatMessages, setChatMessages] = useState([
        {
          message: 'hello chatbot', 
          sender: 'user',
          id: 'id1' 
        },
        {
          message: 'Hello! How can i help you?', 
          sender: 'chatbot',
          id: 'id2' 
        },
        {
          message: "can you get me today's date?", 
          sender: 'user',
          id: 'id3' 
        },
        {
          message: "Sure! Today's date is 2026-06-09.", 
          sender: 'chatbot',
          id: 'id4'
        }
      ]);
      // const [chatMessages, setChatMessages] = array;
      // const chatMessages =array[0]; // chatMessages
      // const setChatMessages = array[1]; // setChatMessages

      return (
        <div className="app-container">
          <ChatMessages
            chatMessages={chatMessages} 
          />
          <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}  
          />
        </div>
      )
    }
        

    

export default App