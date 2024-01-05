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
import IdCard from "./Pages/IdPage";
import TogglePage from "./Pages/TogglePage";
import { GoogleOAuthProvider } from "@react-oauth/google";


const ci =
    "109486718524-bbvbvsoobs37lqjlo9urq80mo457hbiu.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={ci}>
                <Router>
                    <Routes>
                        <Route index element={<HomePage/>} />
                        <Route path="/signup" element={<SignupPg />} />
                        <Route path="/app" element={<TogglePage />} />
                        <Route path="/login" element={<LogInPg />} />
                    </Routes>
                </Router>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
