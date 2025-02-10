import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FFB4A2",
        },
        secondary: {
            main: "#7C444F",
        },
        text: {
            main: "#000000",
            light: "#ffffff",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#F8E7F6",
        },
        secondary: {
            main: "#4B164C",
        },
        text: {
            main: "#000000",
            light: "#ffffff",
        },
    },
});
