import { 
    Container, 
    Typography, 
    TextField, 
    Link, 
    FormControl, 
    FormLabel, 
    Divider,
    Button,
    Box 
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
    const formSubmit = (values) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user) => user.email === values.email && user.password === values.password);

        if (user) {
            alert("Login successful!");
            // Тут можна додати перенаправлення або логіку для логіну
        } else {
            alert("Invalid email or password");
        }
    };

    const initValues = {
        email: "",
        password: "",
    };

    const yupValidationScheme = Yup.object({
        email: Yup.string().email("Не вірний формат пошти").required("Обов'язкове поле"),
        password: Yup.string().min(6, "Мінімальна довжина паролю 6 символів").required("Обов'язкове поле"),
    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: yupValidationScheme,
        onSubmit: formSubmit,
    });

    return (
        <Container
            sx={{
                backgroundColor: "#ffe4e1",
                borderRadius: 2,
                boxShadow: 3,
                py: 4,
                px: 3,
                maxWidth: "500px",
                margin: "20px auto",
            }}
        >
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    color: "#d81b60",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                }}
            >
                Login
            </Typography>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {["email", "password"].map((field) => (
                    <FormControl key={field}>
                        <FormLabel htmlFor={field} sx={{ color: "#d81b60" }}>
                            {field === "email" ? "Email" : "Password"}
                        </FormLabel>
                        <TextField
                            fullWidth
                            id={field}
                            name={field}
                            type={field === "password" ? "password" : "text"}
                            placeholder={field === "email" ? "your@email.com" : ""}
                            value={formik.values[field]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched[field] && Boolean(formik.errors[field])}
                            helperText={formik.touched[field] && formik.errors[field]}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#d81b60",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#ff4081",
                                    },
                                },
                            }}
                        />
                    </FormControl>
                ))}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#ff4081",
                        "&:hover": {
                            backgroundColor: "#d81b60",
                        },
                        fontWeight: "bold",
                    }}
                >
                    Log in
                </Button>
            </Box>
            <Divider sx={{ my: 2, color: "#d81b60" }}>or</Divider>
            <Typography sx={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Link href="/register" variant="body2" sx={{ color: "#d81b60", fontWeight: "bold" }}>
                    Sign up
                </Link>
            </Typography>
        </Container>
    );
};

export default LoginPage;
