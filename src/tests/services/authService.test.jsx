import { loginUser } from "../../services/authService";
import { mockApi } from "../../services/apiClient";
import usersData from "../../mocks/users.json";

jest.mock("../../services/apiClient");

describe("authService", () => {
    it("should login user with correct credentials", async () => {
        const mockUser = { id: 1, email: "test@example.com", password: "password123", name: "Test User" };
        mockApi.mockResolvedValue({ data: [mockUser] });

        const result = await loginUser("test@example.com", "password123");
        expect(result.email).toBe("test@example.com");
        expect(result.password).toBeUndefined(); // Password should be stripped
    });

    it("should throw error for invalid credentials", async () => {
        mockApi.mockResolvedValue({ data: [] });

        await expect(loginUser("test@example.com", "wrongpassword")).rejects.toThrow("Invalid email or password");
    });
});
