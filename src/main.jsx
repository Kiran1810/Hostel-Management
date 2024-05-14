import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./React-Redux/Store";
import SignupPg from "./Pages/SignUpPg";
import LoginPg from "./Pages/LogInPg";
import HomePage from "./Pages/HomePg";
import HostelRoomBooking from "./Pages/hostelBooked";
import ProfilePg from "./Pages/ProfilePg"
import UserProfile from "./Pages/UserProfilePg"
import { GoogleOAuthProvider } from "@react-oauth/google";

const ci =
    "112085492329-gsbkr5apdokckeejm87v3eqvr3he6bt5.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={ci}>
                <Router>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/signup/:id" element={<SignupPg />} />
                        <Route path="/HostelRoomBooking" element={<HostelRoomBooking />} />
                        <Route path="/profile" element={<ProfilePg />} />
                        <Route path="/booking" element={<LoginPg />} />
                        <Route path="/userProfile/:studentId" element={<UserProfile />} />

                        {/* <Route path="/team" element={<TeamPg />} /> */}
                       
                        
                    </Routes>
                </Router>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
