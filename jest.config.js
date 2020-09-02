module.exports = {
    collectCoverage: true,
    verbose: true,
    transformIgnorePatterns: ['node_modules/?!(ky)']
};

// module.exports = {
//     collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
//     roots: ["<rootDir>/src/"],
//     testEnvironment: "node",
//     testPathIgnorePatterns: ["/dist/", "/examples/", "/node_modules/"],
//   }
