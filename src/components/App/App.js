import React from "react";
import { Routes, Route, useLocation } from "react-router";
import './App.css';
import Navbar from "../Navbar/Navbar.js";
import Home from "../Home/Home.js";
import Destination from "../Destination/Destination.js";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {

  const location = useLocation().pathname;

  const isNeedHeader = location === '/' || location === '/destination' || location === '/crew' || location === '/technology';

  return (
    <div className="app">
      {isNeedHeader && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
