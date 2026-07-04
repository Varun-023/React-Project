import axios from "axios";

const apiClient = axios.create({

    baseURL: "http://localhost:3000",

    timeout: 5000

});

apiClient.interceptors.request.use(

    (config) => {

        console.log("Request Sent");

        return config;

    },

    (error) => {

        return Promise.reject(error);

    }

);

apiClient.interceptors.response.use(

    (response) => {

        console.log("Response Received");

        return response;

    },

    (error) => {

        console.log("API Error");

        return Promise.reject(error);

    }

);

function mockApi(data, delay = 500) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({ data });

        }, delay);

    });

}

export { mockApi };

export default apiClient;