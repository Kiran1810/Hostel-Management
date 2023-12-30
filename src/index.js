import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./React-Redux/Store";
import SignupPg from "./Pages/SignUpPg";
import HomePage from "./Pages/HomePg";

import LogInPg from "./Pages/LogInPg";
import EventCard from "./Components/Cards/EventCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/signup" element={<SignupPg />} />
                    <Route path="/login" element={<LogInPg />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
