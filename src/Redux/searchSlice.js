import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/*
Cache :- 
    Time Complexity for search in array - O(n) ex: [i,ip,iph,iphone]
    Time Complexity for search in object - O(1) ex: {i,ip,iph,iphone}
*/

//LRU(Least recently used) cache - clearing your Store so that it does not bloat our redux
