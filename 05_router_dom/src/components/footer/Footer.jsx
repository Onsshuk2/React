import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ isDark }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", 
            }}
        >
            <Box sx={{ flex: 1 }}>
               
            </Box>

            <Box
                component="footer"
                sx={{
                    backgroundColor: isDark ? "black" : "pink", 
                    color: isDark ? "white" : "black", 
                    textAlign: "center",
                    py: 2,
                    position: "relative", 
                }}
            >
                <Typography variant="body1">© 2025 My Awesome Website</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
