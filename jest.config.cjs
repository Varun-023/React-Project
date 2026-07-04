module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.js"],
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/src/tests/styleMock.js"
    },
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    }
};
