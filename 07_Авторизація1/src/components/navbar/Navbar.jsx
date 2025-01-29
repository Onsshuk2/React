import * as styles from "./styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./style.css";
import {Button, Avatar, Box} from "@mui/material";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";
import {defaultAvatarUrl} from "../../settings/urls";

const Navbar = ({isDark = false, themeHandler}) => {
    const {auth, logout} = useContext(AuthContext);

    const navLink = {
        textDecoration: "none",
        color: isDark ? "white" : "black",
    };

    return (
        <div
            style={isDark ? styles.darkContainer : styles.lightContainer}
            className="container"
        >
           
           <div className="navbar">
  <Link style={navLink} to="/">Main page</Link>
  <Link style={navLink} to="about">About</Link>
  {auth && auth.role === "admin" && (
    <>
      
      <Link style={navLink} to="/admin">Admin panel</Link>
    </>
  )}
</div>


            
            <div className="theme-container">
                <Button onClick={themeHandler}>
                    {isDark ? (
                        <LightModeIcon sx={{color: "white"}} />
                    ) : (
                        <DarkModeIcon sx={{color: "black"}} />
                    )}
                </Button>
            </div>

            
            <div style={{flexGrow: 1}}>
                {auth ? (
                    <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
                        
                        <Avatar
                            alt={auth.name || "User"}
                            src={auth.image || defaultAvatarUrl}
                            sx={{cursor: "pointer"}}
                        />
                        
                        <Button
                            onClick={logout}
                            variant="outlined"
                            color="secondary"
                            sx={{textTransform: "none"}}
                        >
                            Logout
                        </Button>
                    </Box>
                ) : (
                    <Box className="auth-container">
                        <Link style={{margin: "0px 5px"}} to="login">
                            <Button variant="contained">Login</Button>
                        </Link>
                        <Link style={{margin: "0px 5px"}} to="register">
                            <Button variant="contained">Register</Button>
                        </Link>
                    </Box>
                )}
            </div>
        </div>
    );
};

export default Navbar;
