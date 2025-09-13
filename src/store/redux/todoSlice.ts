import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Data } from "../../types/table";

interface TodoState {
  tasks: Data[];
}

const initialState: TodoState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Data, "id">>) => {
      const newId = state.tasks.length > 0 ? Math.max(...state.tasks.map((t) => t.id)) + 1 : 1;
      state.tasks.push({ ...action.payload, id: newId });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action: PayloadAction<Data>) => {
      const idx = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (idx !== -1) {
        state.tasks[idx] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
