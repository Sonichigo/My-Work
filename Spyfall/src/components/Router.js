import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import ChatScreen from "./ChatScreen";
import Welcome from "./Welcome";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatScreen/>} />
        <Route path="/connect" element={<WelcomeScreen/>} />
        <Route exact path="/" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;