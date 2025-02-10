import RoleCard from "../../../components/cards/RoleCard";
import { useEffect, useState } from "react";
import useAction from "../../../hooks/useAction";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import CreateRoleModal from "../../../components/modal/CreateRoleModal";

const gridCellStyle = {
    p: "10px"
};

const RoleListPage = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(null); // Додаємо стан для підтвердження видалення
    const { loadRoles, deleteRole } = useAction();
    const { roles, isLoaded } = useSelector(state => state.role);

    useEffect(() => {
        if (!isLoaded) {
            loadRoles();
        }
    }, []);

    const handleDeleteConfirm = () => {
        if (confirmDelete) {
            deleteRole(confirmDelete);
            setConfirmDelete(null);
        }
    };

    return (
        <>
            <Grid container>
                {
                    roles.map((role) => (
                        <Grid key={role.id} size={{ xs: 12, sm: 6, lg: 3 }} sx={gridCellStyle}>
                            <RoleCard role={role} onDelete={() => setConfirmDelete(role.id)} />
                        </Grid>
                    ))
                }
                <Grid size={3} sx={{ ...gridCellStyle, display: 'flex', alignItems: "end" }}>
                    <Fab color="secondary" aria-label="add" onClick={() => setCreateModalOpen(true)}>
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>

            {/* Модальне вікно для підтвердження видалення */}
            <Dialog open={Boolean(confirmDelete)} onClose={() => setConfirmDelete(null)}>
                <DialogTitle>Підтвердження видалення</DialogTitle>
                <DialogContent>Ви впевнені, що хочете видалити цю роль?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDelete(null)} color="primary">Скасувати</Button>
                    <Button onClick={handleDeleteConfirm} color="error">Так</Button>
                </DialogActions>
            </Dialog>

            <CreateRoleModal open={createModalOpen} handleClose={() => setCreateModalOpen(false)} />
        </>
    );
};

export default RoleListPage;
