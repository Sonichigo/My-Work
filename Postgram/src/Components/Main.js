import React from "react";
import Sidebar from './Sidebar';
import Feed from './Feed';
import "../Style/App.css";

function Main() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default Main;
