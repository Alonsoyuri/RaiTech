import './ChatMessage.css';

    export function ChatMessage({message, sender}){
       //shortcut for props.message and props.sender
      //const message = props.message;
     //const sender = props.sender;
    //const {message,sender} = props;
    /* 
      if(sender === "bot"){
        return(
          <div>
            {message}
            <img src = "user_files/robot-C7KxgfIL.png" width = "50" />
          </div>
        );
      }
        */

      return(
        <div className = {
          sender === 'user'
          ? 'user-message'
          : 'bot-message'
        }>
          {sender === "bot" &&  (
          <
          img src = "src/assets/robot-C7KxgfIL.png" 
          className = "message-image"
          />
        )}
        <div className = "chat-text-message">
           {message}
        </div>
          {sender === "user" &&  (
          <
          img src = "src/assets/user-KfhuHcSs.png" 
          className = "message-image"
          /> 
        )}
        </div>
      );
      }
