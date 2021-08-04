##Install NodeJS on the machine. Setting up a nodejs project. Running a js file (Hello World)

1. Command to install node js sudo install node
2.init the npm in working directory(package.json)
3.log the hello world
4. to run the file(node index.js)

##Understand and demonstrate examples of primitive types and functions in NodeJS ,eg. var, const, let, bool, arrays, etc. 
    Explain the importance of use-strict. Perform exporting of functions and variables from a file.

1. function is the procedure and we can call multiple time for specific task
2. primitive > let, var ,boolean,arrays, objects ,null, Undefined
    > let it is also store data any string  it also same as var but it is block scope
    > var it value can be over ride and string num obj and etc
    > const it cant be change and  used till the end of the program
    > array it can store multiple value in the array and we can fetch all value
    > objects it cantains key  and value and we can access through it property by using . and [ ] operator
    > boolean it contain only true or false
    > Undefined it will show undefined and becaseu we dont have initialized it
    > Null known to exist now but it has no type or value
3. "use strict"
    >Eliminates some JavaScript silent errors by changing them to throw errors.(like var if we did not specifi the varible name with primitive data by default it takes var).
    it will create some error so always use "use strict" starting line of code.
4. export function
    it will allows us to take a other function use in another files by using export.modules
