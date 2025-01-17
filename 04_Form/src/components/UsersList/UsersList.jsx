import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const USERS_KEY = "users";

const UsersList = () => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      {users.length === 0 ? (
        <Typography>No users found.</Typography>
      ) : (
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemText primary={user.username} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default UsersList;
