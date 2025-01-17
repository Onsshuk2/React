import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = ({ loggedIn, onNavigate, onLogout }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Management
        </Typography>
        {loggedIn ? (
          <Box>
            <Button color="inherit" onClick={() => onNavigate("create")}>
              Create User
            </Button>
            <Button color="inherit" onClick={() => onNavigate("users")}>
              View Users
            </Button>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => onNavigate("login")}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
