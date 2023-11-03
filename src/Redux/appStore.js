import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
  },
});

export default appStore;
