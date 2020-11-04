import React from "react";
import "./styles.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}
