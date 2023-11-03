import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    hideSidebar : (state) => {
      state.showSidebar = false;
    }
  },
});

export const { toggleSidebar,hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
