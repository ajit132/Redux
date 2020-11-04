import React from "react";
import "./chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat_message"></div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large"/>
        <form>
          <input placeholder="message #ajit"/> 
        </form>
      </div>
    </div>
  );
}

export default Chat;
