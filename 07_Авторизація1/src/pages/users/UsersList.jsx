import React, { useEffect, useState } from "react";
import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "user"
    });
    const [openRoleDialog, setOpenRoleDialog] = useState(false);
    const [newRole, setNewRole] = useState("");
    
    useEffect(() => {
        const jsonList = localStorage.getItem("users");
        setUsers(jsonList ? JSON.parse(jsonList) : []);

        const rolesList = localStorage.getItem("roles");
        setRoles(rolesList ? JSON.parse(rolesList) : ["user", "admin"]);
    }, []);

    const handleCreateUser = () => {
        const newUserWithId = { ...newUser, id: users.length + 1 };
        const updatedUsers = [...users, newUserWithId];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setOpenDialog(false);
    };

    const handleEditUser = (id) => {
        const userToEdit = users.find((user) => user.id === id);
        setSelectedUser(userToEdit);
        setNewUser(userToEdit);
        setOpenDialog(true);
    };

    const handleUpdateUser = () => {
        const updatedUsers = users.map((user) =>
            user.id === selectedUser.id ? { ...user, ...newUser } : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
        setOpenDialog(false);
    };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const handleAddRole = () => {
        if (!roles.includes(newRole)) {
            const updatedRoles = [...roles, newRole];
            localStorage.setItem("roles", JSON.stringify(updatedRoles));
            setRoles(updatedRoles);
        }
        setOpenRoleDialog(false);
    };

    const handleDeleteRole = (role) => {
        const updatedRoles = roles.filter((r) => r !== role);
        localStorage.setItem("roles", JSON.stringify(updatedRoles));
        setRoles(updatedRoles);
    };

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">First name</TableCell>
                            <TableCell align="center">Last name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.id}</TableCell>
                                <TableCell align="center">{user.firstName}</TableCell>
                                <TableCell align="center">{user.lastName}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.role}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleEditUser(user.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteUser(user.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={() => setOpenDialog(true)}>
                Create User
            </Button>
            <Button variant="contained" onClick={() => setOpenRoleDialog(true)}>
                Manage Roles
            </Button>
            
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{selectedUser ? "Edit User" : "Create User"}</DialogTitle>
                <DialogContent>
                    <TextField label="First Name" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} fullWidth />
                    <TextField label="Last Name" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} fullWidth />
                    <TextField label="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} fullWidth />
                    <TextField label="Password" type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={selectedUser ? handleUpdateUser : handleCreateUser}>{selectedUser ? "Update" : "Create"}</Button>
                </DialogActions>
            </Dialog>
            
            <Dialog open={openRoleDialog} onClose={() => setOpenRoleDialog(false)}>
                <DialogTitle>Manage Roles</DialogTitle>
                <DialogContent>
                    {roles.map((role) => (
                        <Box key={role} display="flex" alignItems="center">
                            <span>{role}</span>
                            <IconButton onClick={() => handleDeleteRole(role)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <TextField label="New Role" onChange={(e) => setNewRole(e.target.value)} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenRoleDialog(false)}>Cancel</Button>
                    <Button onClick={handleAddRole}>Add Role</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UsersList;
