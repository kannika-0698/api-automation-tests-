# Project Title: API Automation

## Description: API automation is a test suite built using the features which is mentioned below for testing of API endpoints.

### Features:
- Visual Studio Code tool 
- TypeScript language
- Mocha framework
- Chai assertion
- Supertest HTTP library
- Mochawesome HTML reporter

## How to Install and Run the Project
- Step 1: Install the "Node.js" in your system by visiting the official Node.js website: https://nodejs.org/
- Step 2: Check the "Node" and "npm" version using the commonds: `node -v` and `npm -v`
- Step 3: Create a new directory/folder for the API automation project and open the created folder in the `Visual Studio Code`.
- Step 4: Open the terminal in the visual studio code.
- Step 5: Intialise the project by running the following command in the terminal to create a "Package.json" file with the default values: 
`npm init -y` - Package.json file is created with the default values.
- Step 6: Install the required dependencies by running the following commands: 
`npm install typescript mocha supertest chai @types/node @types/mocha @types/supertest @types/chai --save-dev` Installed the `node_modules` and `package-lock.json` files.
- Step 7: Create a `tsconfig.json` file to configure the TypeScript and add the various compiler option in the created file which is given below:
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["test/**/*.ts"]
}
- Step 8: Create the folder where we will start to write a script and create a file inside the folder with the `.test.ts` format. 
- Step 9: Create the `.gitignore` file and add the files name in it which files we want to ignore while pushing the code to github.
- Steps 10: Create the `mochawesome-report` file to get the results as the mochawesome HTML report by running the next commonds: `npm i mochawesome` and add the `--reporter mochawesome` text in the Package.json file under the "Scripts" folder.
- Step 11: Create a `README.md` file to document all the scenarios, components are used to build a API automation file and wrote a automation script for the users.
- Run the commond `npx tsc` to transplit the typescript file to javascript file.
The intsallation and set up is done once you ran all the commonds which is mentioned in the above and can start to write the API scripts in the respective file.

## Commonds to run the scripts.
- Step 1: Run the command in the terminal `npx tsc` - it will convert the typescript langauge into javascript langauge
- Step 2: Run the command in the terminal `npm test`- it will execute the file and gives the results.

## Approches.
- Filter all the data by using the "First Name" and "Email" from the given GET API endpoint.
- Filter the users by passing the ID and the script is a reusable, we can pass the ID value and fetch the data corresponded to that.
- Created a new user by passing the data from the given POST API endpoint.
- Updated/Edited the users details from the given PUT API endpoint.
- Validates the status code of each "GET, POST and PUT" 
- Validates the data fetched from the API response. 


