## Intro
powerfull testing for javascript framework

===

## Setting Up Jest
1. make new folder to store our project, give folder name JestJS
2. open terminal on that directory
3. then do npm init -y to initialize node.js project
4. then we can open the code in vscode by type code .
5. to install jestjs we can use: npm install --save-dev jest
6. so we successfully install jest on our node.js, we can see on package.json
7. next we will configure npm script
8. on package.json, on scripts there is test

===

## Basic Concepts In Jest
1. unit test is process of checking small piece of code to deliver information early
2. we need unit test to easly identify error or bug, instead of check the whole code
3. now we gonna make a unit test with jestjs
4. we start by make new file name sum.js, we gonna type our code in this file
5. then also create new file name sum.test.js. this file is the test file
6. back to sum.js. we make new function name sum that take 2 parameter a and b. and return a + b. then we export the sum function with module like:
7. then we need to use sum funcion on sum.test.js
8. once we make name.test.js, javascript automaticly know that this file is test file
9. now open sum.test.js, we need import the sum function from sum.js with:
10. now we can run the test, with test() method, the first parameter is description and followed by testFunction as callback
11. we gonna make desription that adds 1 + 2 to equal 3
12. with callback second parameter, that use expect(function).toBe(expect output) like: 
13. then open package.json, change jest to test, and the value to jest like: 
13. now run the test, we can open terminal run npm test
14. then we can see information about the test is pass

===







