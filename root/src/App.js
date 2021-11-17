import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader.js";

const HOME = React.lazy(() => import("homeApp/app"));
const PROJECT = React.lazy(() => import("projectApp/app"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>
        
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/home" element={<HOME />} />
            <Route path="/project" element={<PROJECT />} />
          </Routes>
        
      </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
