import { createSlice } from "@reduxjs/toolkit";

const bugsSlice = createSlice({
    name: 'bugs',
    initialState: {
        bugs: [],
    },
    reducers: {
        setBugs: (state, action) => {
          state.bugs = action.payload;
        },
        addBug: (state, action) => {
            state.bugs.push({...action.payload}); 
        },
        removeBug: (state, action) => {
            state.bugs = state.bugs.filter(bug => bug.id !== action.payload.id);
        },
        updateBug: (state, action) => { 
            const bugIndex = state.bugs.findIndex((bug) => bug.id === action.payload.id);
            state.bugs[bugIndex] = { id: action.payload.id, ...action.payload.bug };
        }
    }
});

export const { setBugs, addBug, removeBug, updateBug } = bugsSlice.actions
export default bugsSlice.reducer;