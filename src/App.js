import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/topbar.jsx";
import MainPage from "./pages/mainPage/MainPage";
import OverView from "./pages/overview/Overview.jsx";

const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/overview" element={<OverView />} />
          <Route path="/" element={<MainPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Oops, denna sidan är tom!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;