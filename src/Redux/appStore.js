import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default appStore;
