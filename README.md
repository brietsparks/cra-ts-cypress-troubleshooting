# CRA + TS + Cypress Troubleshooting
This repo reproduces an error that occurs in a CRA + TypeScript + Cypress app,
when a Cypress test tries to import a file from the `src` directory. 

## Setup and Run

1. clone this repo
2. install the npm dependencies
3. `npm run cypress`
4. run the two Cypress tests: `this-fails.js`, `this-succeeds.js`

## The Error
The test in cypress/integration/this-fails.js tries to import a constant in src/constants.ts.  The test fails with the following error:

```
./src/constants.ts
Module build failed (from ./node_modules/ts-loader/index.js):
Error: TypeScript emitted no output for /my-app/src/constants.ts.
 @ ./cypress/integration/with-import-from-src.spec.js 1:0-50 6:10-21
 @ multi ./cypress/integration/with-import-from-src.spec.js

/my-app/src/App.test.tsx
 [tsl]    ERROR     in     /my-app/src/App.test.tsx(5,1)  
        TS2582: Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i @types/jest` or `npm i @types/mocha`.  

/my-app/src/App.test.tsx
 [tsl]    ERROR     in     /my-app/src/App.test.tsx(8,3)  
        TS2304: Cannot find name 'expect'.  

```

## Steps to recreate this repo
These were the steps taken to create this codebase.

1. Install CRA with TypeScript 
    ```
    yarn create react-app my-app --template typescript
    ```

    ```
    cd ./my-app
    ```
2. Install Cypress
    ```
    yarn add cypress --dev
    ```
   
3. Install Cypress TypeScript support
    ```
    yarn add @bahmutov/add-typescript-to-cypress --dev
    ``` 

4. Make changes found in the following files:
    - cypress.json (set the `baseUrl`)
    - cypress/tsconfig.json (`exclude` and `compilerOptions`)
    - cypress/integration/* (the tests)
    - src/constants.ts (importing this file causes the error)
