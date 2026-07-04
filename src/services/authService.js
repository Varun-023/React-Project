import usersData from "../mocks/users.json";
import { mockApi } from "./apiClient";

async function loginUser(email, password) {

    const response = await mockApi(usersData, 400);

    const user = response.data.find(

        (item) => item.email === email && item.password === password

    );

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const { password: pwd, ...safeUser } = user;

    return safeUser;

}

async function getUsers() {

    const response = await mockApi(usersData, 300);

    return response.data.map(({ password, ...user }) => user);

}

export { loginUser, getUsers };
