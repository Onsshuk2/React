import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateUserForm from "./components/CreateUserForm/CreateUserForm";
import UsersList from "./components/UsersList/UsersList";
import Header from "./components/Header/Header";
import { Container, Box, Typography } from "@mui/material";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [page, setPage] = useState("login"); 

 
  const handleLogin = (user) => {
    setLoggedIn(true);
    setPage("users"); 
  };

  
  const handleLogout = () => {
    setLoggedIn(false);
    setPage("login");
  };

  return (
    <Box>
      {}
      <Header loggedIn={loggedIn} onNavigate={setPage} onLogout={handleLogout} />

      {}
      <Container sx={{ marginTop: 4 }}>
        {loggedIn ? (
          
          <Box>
            {}
            {page === "users" && (
              <Box textAlign="center">
                <img
                  src="https://img.freepik.com/free-vector/stylish-welcome-lettering-banner-opening-new-office_1017-50438.jpg"
                  alt="Welcome"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
                />
                <Typography variant="h6" color="textSecondary" sx={{ marginTop: 2 }}>
                  Welcome to the User Management System!
                </Typography>
                <UsersList /> {}
              </Box>
            )}

            {}
            {page === "create" && <CreateUserForm />}
          </Box>
        ) : (
          
          <LoginForm onLogin={handleLogin} />
        )}
      </Container>
    </Box>
  );
};

export default App;
