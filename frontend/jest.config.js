// frontend/jest.config.js
module.exports = {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']  // Ensure this line is included
  };
  