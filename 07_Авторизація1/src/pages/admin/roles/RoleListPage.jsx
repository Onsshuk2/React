import { useState, useEffect } from "react";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Button,
    TextField,
    Box,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const UserRoleListPage = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [editedRole, setEditedRole] = useState("");

    // Завантажуємо користувачів з localStorage при завантаженні компонента
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    // Функція для збереження користувачів в localStorage після зміни
    const saveUsersToStorage = (updatedUsers) => {
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    // Початок редагування ролі користувача
    const startEditing = (user) => {
        setEditingUser(user);
        setEditedRole(user.role);
    };

    // Збереження відредагованої ролі
    const saveEdit = () => {
        const updatedUsers = users.map(user => 
            user.id === editingUser.id ? { ...user, role: editedRole } : user
        );
        saveUsersToStorage(updatedUsers);
        setEditingUser(null);
        setEditedRole("");
    };

    // Видалення ролі користувача
    const deleteRole = (userId) => {
        const updatedUsers = users.map(user => 
            user.id === userId ? { ...user, role: null } : user
        );
        saveUsersToStorage(updatedUsers);
    };

    return (
        <Container>
            <Typography variant="h4" textAlign="center" marginBottom={2}>Users Roles</Typography>
            
            {/* Список користувачів з ролями */}
            <List>
                {users.map((user) => (
                    <ListItem key={user.id} secondaryAction={
                        <>
                            {/* Кнопка редагування ролі */}
                            <IconButton onClick={() => startEditing(user)}><Edit /></IconButton>
                            {/* Кнопка видалення ролі */}
                            <IconButton onClick={() => deleteRole(user.id)}><Delete /></IconButton>
                        </>
                    }>
                        {editingUser === user ? (
                            <>
                                {/* Виведення поточного користувача, для якого редагується роль */}
                                <ListItemText 
                                    primary={`Editing Role for: ${user.email}`} 
                                    secondary={`Current role: ${user.role}`} 
                                />
                                {/* Поле для редагування ролі, лише admin або user */}
                                <TextField
                                    value={editedRole}
                                    onChange={(e) => setEditedRole(e.target.value)}
                                    onBlur={saveEdit}
                                    autoFocus
                                    label="New Role"
                                    fullWidth
                                    select
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </TextField>
                            </>
                        ) : (
                            <ListItemText 
                                primary={`Email: ${user.email}`} 
                                secondary={`Role: ${user.role || "No role assigned"}`} 
                            />
                        )}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default UserRoleListPage;
