import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Sighting } from "./sighting";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
};

export default App;
