import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isContactUsDrawerOpened: false,
  isFirstVisit: !localStorage.getItem("hasVisited"),
  visitedPages: [],
  pagesNotVisited: JSON.parse(localStorage.getItem("pagesNotVisited")) || [],
};
const requiredPages = ["/home", "/services", "/about"]; // Define the required pages

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setContactUsDrawer: (state, { payload }) => {
      state.isContactUsDrawerOpened = payload;
    },
    markFirstVisit: (state) => {
      state.isFirstVisit = true;
      localStorage.setItem("hasVisited", "true");
    },
    trackVisitedPage: (state, { payload }) => {
      state.visitedPages.push(payload);
      state.pagesNotVisited = requiredPages.filter(
        (page) => !state.visitedPages.includes(page)
      );
      if (state.isFirstVisit) {
        const allPagesVisited = state.pagesNotVisited.length === 0;
        if (allPagesVisited) {
          state.isFirstVisit = false;
          localStorage.setItem("hasVisited", "false");
          localStorage.removeItem("pagesNotVisited");
        }
      }
    },
  },
});

export const { setContactUsDrawer, markFirstVisit, trackVisitedPage } =
  applicationSlice.actions;

export default applicationSlice.reducer;
