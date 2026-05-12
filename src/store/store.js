import { configureStore, createSlice } from "@reduxjs/toolkit";

// ── Nav Slice ───────────────────────────────────────────────────
const navSlice = createSlice({
  name: "nav",
  initialState: { menuOpen: false, activeNav: "MENU" },
  reducers: {
    toggleMenu(state) { state.menuOpen = !state.menuOpen; },
    closeMenu(state) { state.menuOpen = false; },
    setActiveNav(state, action) { state.activeNav = action.payload; },
  },
});

// ── Email / CTA Slice ───────────────────────────────────────────
const ctaSlice = createSlice({
  name: "cta",
  initialState: { email: "", submitted: false },
  reducers: {
    setEmail(state, action) { state.email = action.payload; },
    submitEmail(state) { if (state.email) state.submitted = true; },
    resetEmail(state) { state.email = ""; state.submitted = false; },
  },
});

// ── Footer Slice ────────────────────────────────────────────────
const footerSlice = createSlice({
  name: "footer",
  initialState: { hoveredLink: null },
  reducers: {
    setHoveredLink(state, action) { state.hoveredLink = action.payload; },
    clearHoveredLink(state) { state.hoveredLink = null; },
  },
});

export const { toggleMenu, closeMenu, setActiveNav } = navSlice.actions;
export const { setEmail, submitEmail, resetEmail } = ctaSlice.actions;
export const { setHoveredLink, clearHoveredLink } = footerSlice.actions;

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    cta: ctaSlice.reducer,
    footer: footerSlice.reducer,
  },
});

export default store;
