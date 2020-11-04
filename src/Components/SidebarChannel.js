import React from "react";
import "./sidebarchannel.css";

function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebarchannel">
      <h4>
        <span className="sidebarchannel_hash">#</span>Youtube Channel
      </h4>
    </div>
  );
}

export default SidebarChannel;
