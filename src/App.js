import React from "react";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/topbar.jsx";
import MainPage from "./pages/mainPage/MainPage";
import OverView from "./pages/overview/Overview.jsx";
import useAuthContext from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
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
