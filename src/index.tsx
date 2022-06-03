import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/base/Home";
import About from "./pages/base/About";
import { ThemeProvider } from "./config/context/ThemeContext";
import SignUp from "./pages/base/SignUp";
import { AuthProvider } from "./config/context/AuthContext";
import LogIn from "./pages/base/LogIn";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="login" element={<LogIn />} />
                            <Route path="signup" element={<SignUp />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
