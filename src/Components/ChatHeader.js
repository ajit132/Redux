import React from "react";
import "./chatheader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function ChatHeader() {
  return (
    <div className="chatheader">
      <div className="chatheader_left">
        <h3>
          <span className="chatheader_hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatheader_right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatheader_search">
          <input placeholder="search" name="search" />
          <label for="search">
            <SearchRoundedIcon />
          </label>
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
