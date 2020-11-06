import React from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Ajit Gurung</h3>
        <h3>@ajit13</h3>
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
        <SidebarChannel />
      </div>
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
      <div className="sidebar_profile">
        <Avatar />
        <div className="sidebar_profileinfo">
          <h3>Ajit Gurung</h3>
          <p>#wow it's awesome</p>
        </div>
        <div className="sidebar_profileicons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
