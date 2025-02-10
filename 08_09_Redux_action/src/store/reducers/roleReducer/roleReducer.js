import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadRoles = createAsyncThunk("roles/load", async () => {
    const response = await axios.get("/api/roles");
    return response.data;
});

export const createRole = createAsyncThunk("roles/create", async (role) => {
    const response = await axios.post("/api/roles", role);
    return response.data;
});

export const updateRole = createAsyncThunk("roles/update", async (role) => {
    const response = await axios.put(`/api/roles/${role.id}`, role);
    return response.data;
});

export const deleteRole = createAsyncThunk("roles/delete", async (id, { getState }) => {
    const { confirmDelete } = getState().roles;
    
    if (confirmDelete !== id) {
        return Promise.reject("Видалення не підтверджене");
    }

    await axios.delete(`/api/roles/${id}`);
    return id;
});

const rolesSlice = createSlice({
    name: "roles",
    initialState: { list: [], loading: false, confirmDelete: null },
    reducers: {
        setConfirmDelete: (state, action) => {
            state.confirmDelete = action.payload;
        },
        cancelConfirmDelete: (state) => {
            state.confirmDelete = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRoles.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(deleteRole.fulfilled, (state, action) => {
                state.list = state.list.filter((role) => role.id !== action.payload);
                state.confirmDelete = null;
            });
    },
});

export const { setConfirmDelete, cancelConfirmDelete } = rolesSlice.actions;
export default rolesSlice.reducer;
