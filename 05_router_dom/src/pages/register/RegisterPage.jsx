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


const RegisterPage = () => {
    const formSubmit = (values) => {
        delete values.confirmPassword;

        const users = localStorage.getItem("users");
        if (!users) {
            localStorage.setItem("users", JSON.stringify([{ ...values, id: 1 }]));
        } else {
            const array = JSON.parse(users);
            values.id = array[array.length - 1].id + 1;
            array.push(values);
            localStorage.setItem("users", JSON.stringify(array));
        }
    };

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        lastName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        email: Yup.string().email("Не вірний формат пошти").required("Обов'язкове поле"),
        password: Yup.string().min(6, "Мінімальна довжина паролю 6 символів"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Паролі не збігаються"),
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
                Sign up
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
                {["firstName", "lastName", "email", "password", "confirmPassword"].map((field) => (
                    <FormControl key={field}>
                        <FormLabel htmlFor={field} sx={{ color: "#d81b60" }}>
                            {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                        </FormLabel>
                        <TextField
                            fullWidth
                            id={field}
                            name={field}
                            type={field.toLowerCase().includes("password") ? "password" : "text"}
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
                    Sign up
                </Button>
            </Box>
            <Divider sx={{ my: 2, color: "#d81b60" }}>or</Divider>
            <Typography sx={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link href="/login" variant="body2" sx={{ color: "#d81b60", fontWeight: "bold" }}>
                    Login
                </Link>
            </Typography>
        </Container>
    );
};

export default RegisterPage;
