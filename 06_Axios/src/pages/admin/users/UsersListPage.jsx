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
    Avatar,
    Select,
    MenuItem
} from "@mui/material";
import usersJson from "./users.json";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { defaultAvatarUrl } from "../../../settings/urls";

const UsersListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const jsonList = localStorage.getItem("users");
        if (!jsonList) {
            localStorage.setItem("users", JSON.stringify(usersJson));
            setUsers(usersJson);
        } else {
            const list = JSON.parse(jsonList);
            setUsers(list);
        }
    }, []);

    const handleRoleChange = (userId, newRole) => {
        const updatedUsers = users.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        );

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">First name</TableCell>
                            <TableCell align="center">Last name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center">Password</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell align="center">{user.id}</TableCell>
                                <TableCell align="center">
                                    <Avatar 
                                        sx={{ m: "auto" }} 
                                        alt={user.email} 
                                        src={user.image ? user.image : defaultAvatarUrl} 
                                    />
                                </TableCell>
                                <TableCell align="center">{user.firstName}</TableCell>
                                <TableCell align="center">{user.lastName}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">
                                    <Select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    >
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="user">User</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell align="center">{user.password}</TableCell>
                                <TableCell align="center">
                                    <Link to={`user/${user.id}`}>
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Link to="user">
                    <Button variant="contained">Create user</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default UsersListPage;
