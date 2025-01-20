import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ isDark }) => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: isDark ? "black" : "pink", // для футера
                color: isDark ? "white" : "black", // для футера
                textAlign: "center",
                py: 2, 
                position: "absolute",
                bottom: 0,
                width: "100%",
            }}
        >
            <Typography variant="body1">© 2025 My Awesome Website</Typography>
        </Box>
    );
};

export default Footer;
