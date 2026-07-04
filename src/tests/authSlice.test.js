import authReducer, { login, logout, sessionExpired } from "../redux/authSlice";

describe("authSlice", () => {
    const initialState = {
        isLoggedIn: false,
        user: null,
        error: ""
    };

    it("should handle initial state", () => {
        expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    it("should handle login", () => {
        const actual = authReducer(initialState, login({ name: "Test User", email: "test@test.com", role: "User" }));
        expect(actual.isLoggedIn).toEqual(true);
        expect(actual.user.name).toEqual("Test User");
    });

    it("should handle logout", () => {
        const loggedInState = {
            isLoggedIn: true,
            user: { name: "Test User" },
            error: ""
        };
        const actual = authReducer(loggedInState, logout());
        expect(actual.isLoggedIn).toEqual(false);
        expect(actual.user).toEqual(null);
    });
    
    it("should handle sessionExpired", () => {
        const loggedInState = {
            isLoggedIn: true,
            user: { name: "Test User" },
            error: ""
        };
        const actual = authReducer(loggedInState, sessionExpired());
        expect(actual.isLoggedIn).toEqual(false);
        expect(actual.user).toEqual(null);
    });
});
