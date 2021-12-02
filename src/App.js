import React from "react";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/topbar.jsx";
import MainPage from "./components/mainpage/mainpage.jsx";
import OverView from "./components/overview/overview.jsx";

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <TopBar />
        <Routes>
          <Route exact path="/overview" element={<OverView />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
