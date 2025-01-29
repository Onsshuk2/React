import { useContext, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Container, TextField, Button, Avatar, Typography, Box, Paper } from "@mui/material";

const ProfilePage = () => {
    const { auth, updateUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState(auth?.firstName || "");
    const [lastName, setLastName] = useState(auth?.lastName || "");
    const [avatar, setAvatar] = useState(auth?.avatar || "");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSaveProfile = () => {
        updateUser({ firstName, lastName, avatar });
    };

    const handleChangePassword = () => {
        if (newPassword === confirmPassword) {
            updateUser({ password: newPassword }, oldPassword);
        } else {
            alert("Паролі не співпадають");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Профіль користувача
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Avatar src={avatar || "/default-avatar.png"} sx={{ width: 100, height: 100 }} />
                    <TextField
                        fullWidth
                        label="Посилання на аватар"
                        variant="outlined"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Ім'я"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Прізвище"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleSaveProfile}>
                        Зберегти профіль
                    </Button>
                </Box>
            </Paper>

            <Paper elevation={3} sx={{ padding: 4, mt: 4, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Зміна пароля
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Старий пароль"
                        variant="outlined"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Новий пароль"
                        variant="outlined"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Повторіть новий пароль"
                        variant="outlined"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" fullWidth onClick={handleChangePassword}>
                        Змінити пароль
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProfilePage;
