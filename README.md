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

## Matchers
1. use to test different type of data. on last code, the matcher is toBe method
2. there is various type of matcher, like toBe toEqual toTruthy toFalsy toThrow
3. first we well learn about toBe
4. to is use to primitive value (number, string, boolean)
5. start with make test with description two plus two is four
6. and with call back function with expect 2 + 2 toBe 4 like: 
7. so we can try npm test to run the test
8. next is about toEqual, is use when comparing object or array
9. we can make test with description object assignment
10. with callback function that have const variable of data with key and value of one: 1
11. follow with assign data on that object with key and value two and 2
12. then add expect data toEqual({one: 1, two:2}), the code will be like: 
13. and we run npm test to run the test
14. so next matcher is toTruthy and toFalsy matcher, we use 
15. start by create a test with description null is falsy
16. with callback function that have const variable name n with value null
17. the add expect n toBeFalsy()
18. lets run with npm test
19. because falsy not only null, but also all falsy state, so we can use it like: 
20. next we gonna try toBeTruthy, the value of truthy is  the exception of falsy state
21. we can change value of n to 1, and toBeFalsy to toBeTruthy
22. and also change the description to one is truthy like: 
23. and run the test with npm run
24. the last thing is toThrow to error handling
25. we use it for detailing when the function is throw error, we expect the function throw the error when its executed. useful to validate input and throw the error
26. first create new test with description throws on invalid input
27. with callback function that expect with function myFunction(invalidInput) and toThrow()
28. the back to sum.js, and add mynFunction with input as parameter
29. and create a conditional that if typeof input is not a number we gonna throw new Error('invalid input')
30. the we need to export the function like:
31. now back to sum.test.js, and create const variable name myFunction with value require of the file of myFunction that sum
32. so on expect callback function we change the argument to some string like:
33. now try the test with npm test

===

## Testing Asynchronous Code
1. test asynchronus code is quite complex, not such straighforward
2. asyncronus code allow to execute some code on background, not blocking the main execution
3. web need asynchronus because keep ui to responsive while do request or timer
4. there is some method of async such as callback, promise, and async function
5. first the callback, lets start by write new function called fetchData with parameter callback
6. and do setTimeout with callback function callback('peanut butter') and time 1000
7. new we gonna test this function, be sure to export the function, the code be like: 
8. create test with description the data is peanut butter
9. then for second parameter make done => {}
10. done contain function callback(data)
11. and do try with expect(data) toBe('peanut butter') and add done()
12. on catch error, add done(error)
13. then after the callback function, add fetchData(callback). the code gonna be like: 
14. and we can try the test with npm test
15. next we gonna try promise
16. first we need to create a function with promise
17. create function name fetchPromise with return new Promise
18. with parameter resolve and reject, then use setTimeout to
resolve('peanut butter') in 1000
19. now make sure to export this function
20. and create test for the promise, we need to import the function with require method
21. then write test with description the data is peanut butter
22. with second parameter a callback that return expect the function
23. follow by resolves.toBe('peanut butter')
24. then we can do npm test to run the test
25. now also create the test on reject
22. with desctipiton the fetch fails with an error 
23. then callback function that return expect(fetchPromise()).rejects.toThrow('error')