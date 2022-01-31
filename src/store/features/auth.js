import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";

const Authslice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: false,
    },
    reducers: {
        registerSuccess: (auth, { payload }) => {
            localStorage.setItem("token", payload.token);
            auth.token = payload.token;
            auth.isAuthenticated = true;
        },
        registerFailed: (auth) => {
            localStorage.removeItem("token");
            auth.token = null;
            auth.user = {};
            auth.isAuthenticated = false;
        },

        loginSuccess: (auth, { payload }) => {
            localStorage.setItem("token", payload.token);
            auth.token = payload.token;
            auth.isAuthenticated = true;
        },
        loginFailed: (auth) => {
            localStorage.removeItem("token");
            auth.token = null;
            auth.user = {};
            auth.isAuthenticated = false;
        },
        userLoaded: (auth, { payload }) => {
            auth.user = payload;
            auth.isAuthenticated = true;
            auth.loading = false;
        },
        authFailed: (auth) => {
            // localStorage.removeItem('token')
            // auth.token = null;
            // auth.user = {};
            auth.isAuthenticated = false;
            auth.loading = false;
        },
        logoutUser: (auth) => {
            localStorage.removeItem("token");
            auth.token = null;
            auth.user = {};
            auth.isAuthenticated = false;
            auth.loading = false;
        },

        // // command - event
        // // addBug - bugAdded
        // resolveBug (command) - bugResolved (event)
        setLoading: (auth, action) => {
            auth.loading = action.payload;
        },
    },
});

export const { userLoaded, setLoading, setActorType } = Authslice.actions;

export default Authslice.reducer;

//actions
export const register = ({ name, email, password }) => async (dispatch) => {
};

export const login = ({ email, password }) => async (dispatch) => {
};

export const loadUser = () => async (dispatch) => {
};

export const logout = () => (dispatch) => {
    dispatch(Authslice.actions.logoutUser());
};

// Selector
export const selectUser = (state) => (state.auth?.user ? state.auth.user : {});
