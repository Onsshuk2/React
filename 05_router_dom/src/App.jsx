import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/about/About";
import RegisterPage from "./pages/register/RegisterPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UsersList from "./pages/users/UsersList";
import EditUserPage from "./pages/users/edit/EditUserPage";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 

const App = () => {
    const [isDark, setIsDark] = useState(false);

    const themeHandler = () => {
        setIsDark((prevTheme) => !prevTheme);
    };

    return (
        <div>
            {/* Передаємо isDark в Navbar */}
            <Navbar isDark={isDark} themeHandler={themeHandler} />

            <Routes>
                
                    <Route index element={<MainPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="users">
                        <Route index element={<UsersList />} />
                        <Route path="user" element={<EditUserPage isUpdate={false} />} />
                        <Route path="user/:id" element={<EditUserPage isUpdate={true} />} />
                    </Route>
                
            </Routes>

            {/* Передаємо isDark в Footer */}
            <Footer isDark={isDark} />
        </div>
    );
};

export default App;
