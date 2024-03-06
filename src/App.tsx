import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Card } from "antd";
import { Routes, Route } from "react-router-dom";
import All from "./components/All";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/article/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
