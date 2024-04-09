import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // ...
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^/pages/(.*)$': '<rootDir>/pages/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}', //mendeteksi seluruh file dalam folder src
    '!<rootDir>/src/pages/api.{js,jsx,ts,tsx}', //mengecualikan sebuah file dalam proses pendeteksian folder src
    '!<rootDir>/src/pages/_app',
    '!<rootDir>/src/pages/_document',


    //outputnya berupa C:\Users\bootcamp\Desktop\unit-test\unit-test-1\coverage\lcov-report\index.html dan tabel dalam terminal

  ],





};
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)