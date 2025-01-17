import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField, Box, Typography } from "@mui/material";

const USERS_KEY = "users";

const CreateUserForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (users.some((user) => user.username === values.username)) {
      alert("Username already exists!");
      return;
    }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, values]));
    alert("User created successfully!");
    resetForm();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Create User
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
              Create User
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateUserForm;
