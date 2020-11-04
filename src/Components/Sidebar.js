import React from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Ajit Gurung</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar_channel">
        <div className="sidebar_channelheader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar_addchannel" />
        </div>
        <div className="sidebar_channellist">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      .
      <div className="sidebar_voice">
        <SignalCellularAltIcon className="sidebar_voiceicon" fontSize="large" />
        <div className="sidebar_voiceinfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceicons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
