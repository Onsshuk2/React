import * as React from 'react';
import {
    Container,
    Typography,
    TextField,
    FormControl,
    FormLabel,
    Divider,
    Button,
    Box
} from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FieldError} from '../../components/errors/Errors';
import {Link, useNavigate} from 'react-router-dom';
import useAction from "../../hooks/useAction";
import {GoogleLogin} from "@react-oauth/google";

const RegisterPage = () => {
    const navigate = useNavigate();
    const {register, googleRegister} = useAction();

    const formSubmit = (values) => {
        delete values.confirmPassword;
        values.role = "user";
        register(values);
        navigate("/");
    }

    // google register
    const googleRegisterHandler = (response) => {
        const jwtToken = response.credential;
        googleRegister(jwtToken); // Викликає дію для реєстрації через Google
        navigate("/");
    }

    const googleErrorHandler = (error) => {
        console.log(error);
    }

    // init values
    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    };

    // validation scheme with yup
    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        lastName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        email: Yup.string().email("Не вірний формат пошти").required("Обов'язкове поле"),
        password: Yup.string().min(6, "Мінімальна довжина паролю 6 символів"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Паролі не збігаються'),
        image: Yup.string()
    });

    // formik
    const formik = useFormik({
        initialValues: initValues,
        validationSchema: yupValidationScheme,
        onSubmit: formSubmit
    });

    return (
        <Container>
            <Typography
                component="h1"
                variant="h4"
                sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: "center", m: "10px 0px"}}
            >
                Sign up
            </Typography>
            <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{display: 'flex', flexDirection: 'column', gap: 2}}
            >
                {/* Форма реєстрації */}
                <FormControl>
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <TextField
                        autoComplete="firstName"
                        name="firstName"
                        fullWidth
                        id="firstName"
                        placeholder="Jon"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <FieldError text={formik.errors.firstName}/>) : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <TextField
                        autoComplete="lastName"
                        name="lastName"
                        fullWidth
                        id="lastName"
                        placeholder="Snow"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <FieldError text={formik.errors.lastName}/>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        placeholder="your@email.com"
                        name="email"
                        autoComplete="email"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <FieldError text={formik.errors.email}/>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        placeholder="••••••"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <FieldError text={formik.errors.password}/>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
                    <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        placeholder="••••••"
                        type="password"
                        id="confirmPassword"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <FieldError text={formik.errors.confirmPassword}/>
                    ) : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="image">Avatar</FormLabel>
                    <TextField
                        fullWidth
                        name="image"
                        type="text"
                        id="image"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.image}
                        onBlur={formik.handleBlur}
                    />
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Sign up
                </Button>
            </Box>
            <Divider>
                <Typography sx={{color: 'text.secondary'}}>or</Typography>
            </Divider>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography sx={{textAlign: 'center'}}>
                    Already have an account?{' '}
                    <Link
                        to="/login"
                    >
                        Sign in
                    </Link>
                </Typography>
            </Box>

            {/* Google SignUp */}
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                <GoogleLogin
                    onSuccess={googleRegisterHandler}
                    onError={googleErrorHandler}
                    useOneTap
                    type="standard"
                    theme="outline"
                    size="large"
                    text="continue_with"
                    shape="rectangular"
                    logo_alignment="left"/>
            </Box>
        </Container>
    );
}

export default RegisterPage;
