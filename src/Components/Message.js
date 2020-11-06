import React from "react";
import { Avatar } from "@material-ui/core";
import "./message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          @ajit13
          <span className="message_timestamp">timestammp</span>
        </h4>
        <p>this is a message</p>
      </div>
    </div>
  );
}
export default Message;
