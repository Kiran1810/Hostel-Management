import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./React-Redux/Store";
import SignupPg from "./Pages/SignUpPg";
import HomePage from "./Pages/HomePg";

import LogInPg from "./Pages/LogInPg";
import IdCard from "./Pages/IdPage"

import TogglePage from "./Pages/TogglePage";
import { GoogleOAuthProvider } from "@react-oauth/google";


const ci =
    "896613241937-ip9d212i2f1tv1cosd9jmb8pf2rjre76.apps.googleusercontent.com";

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
                        <Route path="/downLoad" element={<IdCard/>} />
                        <Route path="/login" element={<LogInPg />} />
                    </Routes>
                </Router>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
