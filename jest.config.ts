
export default {
    preset: 'jest-preset-angular',
    testURL: 'https://github.com/just-jeb/angular-builders',
    setupFilesAfterEnv: [`${__dirname}/setup.ts`],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
    },
};