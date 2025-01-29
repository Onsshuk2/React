import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const roles = ["user", "admin"];

  const yupValidationScheme = Yup.object({
    firstName: Yup.string().max(50, "Максимальна довжина 50 символів"),
    lastName: Yup.string().max(50, "Максимальна довжина 50 символів"),
    email: Yup.string().email("Невірний формат пошти").required("Обов'язкове поле"),
    password: Yup.string().min(6, "Мінімальна довжина паролю 6 символів"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Паролі не збігаються"),
    image: Yup.string(),
    role: Yup.string()
      .oneOf(["user", "admin"], "Невірна роль")
      .required("Роль обов'язкова"),
  });

  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    role: "user",
  };

  const formSubmit = (values) => {
    delete values.confirmPassword;

    if (!values.role) {
      values.role = "user";
    }

    const users = localStorage.getItem("users");
    if (!users) {
      localStorage.setItem("users", JSON.stringify([{ ...values, id: 1 }]));
    } else {
      const array = JSON.parse(users);
      values.id = array[array.length - 1].id + 1;
      array.push(values);
      localStorage.setItem("users", JSON.stringify(array));
    }

    localStorage.setItem("auth", JSON.stringify(values));
    navigate("/");
  };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: yupValidationScheme,
    onSubmit: formSubmit,
  });

  const fieldStyle = { margin: "16px" }; // Стиль для відступів між полями

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="Ім'я"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        style={fieldStyle}
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Прізвище"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        style={fieldStyle}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        style={fieldStyle}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Пароль"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        style={fieldStyle}
      />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Підтвердити пароль"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        style={fieldStyle}
      />
      <TextField
        fullWidth
        id="image"
        name="image"
        label="URL аватарки (необов'язково)"
        value={formik.values.image}
        onChange={formik.handleChange}
        style={fieldStyle}
      />
      <FormControl fullWidth style={fieldStyle}>
        <InputLabel id="role-label">Роль</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          error={formik.touched.role && Boolean(formik.errors.role)}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        style={fieldStyle}
      >
        Зареєструватися
      </Button>
    </form>
  );
};

export default RegistrationForm;
