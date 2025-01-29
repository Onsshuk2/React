import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    FormControl,
    FormLabel,
    Button,
    Box,
    Select,
    MenuItem,
    Chip,
    IconButton
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FieldError } from "../../../components/errors/Errors";
import { Delete } from "@mui/icons-material";

const ROLES = ["Admin", "User", "Manager", "Editor"]; // Можливі ролі

const EditUserPage = ({ isUpdate = false }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        setRoles(ROLES);
    }, []);

    const formEditHandler = (values) => {
        const localData = localStorage.getItem("users");
        const users = JSON.parse(localData);
        const userIndex = users.findIndex(u => u.id == values.id);
        users[userIndex] = {...values};
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/users");
    };

    const formCreateHandler = (values) => {
        const users = localStorage.getItem("users");
        if (!users) {
            localStorage.setItem("users", JSON.stringify([{ ...values, id: 1 }]));
        } else {
            const array = JSON.parse(users);
            values.id = array[array.length - 1].id + 1;
            array.push(values);
            localStorage.setItem("users", JSON.stringify(array));
        }
        navigate("/users");
    };

    const initValues = {
        id: 0,
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        roles: []
    };

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        lastName: Yup.string().max(50, "Максимальна довжина 50 символів"),
        email: Yup.string().email("Не вірний формат пошти").required("Обов'язкове поле"),
        password: Yup.string().min(6, "Мінімальна довжина паролю 6 символів"),
        roles: Yup.array().of(Yup.string()).min(1, "Повинен бути хоча б 1 роль"),
    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: yupValidationScheme,
        onSubmit: isUpdate ? formEditHandler : formCreateHandler,
    });

    useEffect(() => {
        if (params.id) {
            const localData = localStorage.getItem("users");
            if (localData) {
                const users = JSON.parse(localData);
                const userData = users.find((u) => u.id == params.id);
                if (userData) {
                    formik.setValues(userData);
                } else {
                    navigate("/users");
                }
            } else {
                navigate("/users");
            }
        }
    }, []);

    return (
        <Container>
            <Typography component="h1" variant="h4" sx={{ textAlign: "center", m: "10px 0px" }}>
                {isUpdate ? "Edit user" : "Create user"}
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <FormControl>
                    <FormLabel htmlFor="firstName">First name</FormLabel>
                    <TextField name="firstName" fullWidth id="firstName" placeholder="Jon"
                        onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur} />
                    {formik.touched.firstName && formik.errors.firstName ? <FieldError text={formik.errors.firstName} /> : null}
                </FormControl>
                
                <FormControl>
                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                    <TextField name="lastName" fullWidth id="lastName" placeholder="Snow"
                        onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
                    {formik.touched.lastName && formik.errors.lastName ? <FieldError text={formik.errors.lastName} /> : null}
                </FormControl>
                
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField required fullWidth id="email" placeholder="your@email.com" name="email" autoComplete="email"
                        onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <FieldError text={formik.errors.email} /> : null}
                </FormControl>
                
                <FormControl>
                    <FormLabel htmlFor="roles">Roles</FormLabel>
                    <Select multiple value={formik.values.roles} onChange={formik.handleChange} name="roles" fullWidth>
                        {roles.map((role) => (
                            <MenuItem key={role} value={role}>{role}</MenuItem>
                        ))}
                    </Select>
                    {formik.values.roles.map((role) => (
                        <Chip key={role} label={role} onDelete={() => {
                            formik.setFieldValue("roles", formik.values.roles.filter(r => r !== role));
                        }} />
                    ))}
                    {formik.touched.roles && formik.errors.roles ? <FieldError text={formik.errors.roles} /> : null}
                </FormControl>
                
                <Button type="submit" fullWidth variant="contained">
                    {isUpdate ? "Save" : "Create"}
                </Button>
            </Box>
        </Container>
    );
};

export default EditUserPage;