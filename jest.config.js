require('dotenv').config({ path: './.env.test' });
const path = require('path');

// Model TEST_DIR_PATH to current dir plus the test directory
process.env.TEST_DIR_PATH = path.resolve(path.join(__dirname, process.env.TEST_DIR_PATH));

module.exports = {
    collectCoverageFrom: ['src/**/*.{js,ts}', '!src/**/*.d.ts'],
    roots: ['<rootDir>/src/'],
    collectCoverage: true,
    verbose: true,
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/dist/', '/test/', '/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/setupTestdata.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
