import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { userApi } from "../apis/user.api";
import { IAdmin } from "../../models/admin.interface";
interface IUser {
    _id: string;
    name: string;
    email: string;
    mobile?: string;
    role: string;
}
interface InitialState {
    admin: IAdmin | null;
    user: IUser | null;
    sessionExpiredOpen: boolean;
}
const initialState: InitialState = {
    admin: localStorage.getItem("admin")
        ? JSON.parse(localStorage.getItem("admin") as string)
        : null,
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null,
    sessionExpiredOpen: false
}
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        logoutAdmin: (state) => {
            state.admin = null;
            localStorage.removeItem("admin");
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        openSessionExpiredModal: (state) => {
            state.sessionExpiredOpen = true;
        },
        closeSessionExpiredModal: (state) => {
            state.sessionExpiredOpen = false;
        }
    },
    extraReducers: (builder) => builder
        .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
            state.admin = payload.result;
        })
        .addMatcher(authApi.endpoints.signOut.matchFulfilled, (state) => {
            state.admin = null;
            localStorage.removeItem("admin");
        })
        .addMatcher(userApi.endpoints.signInUser.matchFulfilled, (state, { payload }) => {
            const userResult = payload.result;
            state.user = {
                _id: userResult._id,
                name: userResult.firstName + " " + userResult.lastName,
                email: userResult.email,
                mobile: userResult.phone?.toString(),
                role: userResult.role
            };
        })
        .addMatcher(userApi.endpoints.signOutUser.matchFulfilled, (state) => {
            state.user = null;
            localStorage.removeItem("user");
        })
        .addMatcher(userApi.endpoints.registerUser.matchFulfilled, (state, { payload }) => {
            const userResult = payload.result;
            state.user = {
                _id: userResult._id,
                name: userResult.firstName + " " + userResult.lastName,
                email: userResult.email,
                mobile: userResult.phone?.toString(),
                role: userResult.role
            };
        })
});
export const {
    logoutAdmin,
    logoutUser,
    setUser,
    openSessionExpiredModal,
    closeSessionExpiredModal
} = authSlice.actions
export default authSlice.reducer
export type { InitialState, IUser }