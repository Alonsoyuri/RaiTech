import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'

function App(){
      //const chatMessages = array[0];
      //const setChatMessages = array[1];
      //const [chatMessages, setChatMessages] = array;
        const [chatMessages, setChatMessages] = useState([
          {
            message: "Hello!, I am Raijin . How can I assist you today?",
            sender: "bot",
          },
        ]);

          return(
            <div className = "chat-container">
        
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
