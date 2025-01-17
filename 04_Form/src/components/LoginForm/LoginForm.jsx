import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box, Typography } from "@mui/material";

const USERS_KEY = "users";

const LoginForm = ({ onLogin }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (user) {
      alert("Login successful!");
      onLogin(user);
    } else {
      const newUser = { username: values.username, password: values.password };
      localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
      alert("User not found. A new account has been created, and you are logged in!");
      onLogin(newUser);
    }
    setSubmitting(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Box marginBottom={2}>
              <Field
                as={TextField}
                name="username"
                label="Username"
                fullWidth
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </Box>
            <Box marginBottom={2}>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
