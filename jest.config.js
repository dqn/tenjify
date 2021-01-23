module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  verbose: true,
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
