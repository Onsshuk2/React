import * as styles from "./styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./style.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Navbar = ({ isDark = false, themeHandler }) => {
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
                <Link style={navLink} to="/">
                    Main page
                </Link>
                <Link style={navLink} to="about">
                    About
                </Link>
                <Link style={navLink} to="users">
                    Users
                </Link>
                
            </div>
            <div className="theme-container">
                <Button onClick={themeHandler}>
                    {isDark ? (
                        <LightModeIcon sx={{ color: "white" }} />
                    ) : (
                        <DarkModeIcon sx={{ color: "black" }} />
                    )}
                </Button>
            </div>
            <div>
                <Link style={{ margin: "0px 5px" }} to="login">
                    <Button className="buttonStyle" variant="contained"> Login </Button>
                </Link>
                <Link style={{ margin: "0px 5px" }} to="register">
                    <Button className="buttonStyle" variant="contained"> Sind Up </Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
