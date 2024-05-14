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
import HostelRoomBooking from "./Pages/hostelBooked";
// import ContactUsPage from "./Pages/contact"

import LogInPg from "./Pages/LogInPg";
// import IdCard from "./Pages/IdPage";


// import TogglePage from "./Pages/TogglePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import TeamPg from "./Pages/TeamPg";

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
                        {/* <Route path="/app" element={<TogglePage />} /> */}
                        <Route path="/HostelRoomBooking" element={<HostelRoomBooking />} />
                        {/* <Route path="/contact" element={<ContactUsPage/>} />
                        <Route path="/downLoad" element={<IdCard />} /> */}
                        <Route path="/login" element={<LogInPg />} />
                        {/* <Route path="/team" element={<TeamPg />} /> */}
                       
                        
                    </Routes>
                </Router>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
