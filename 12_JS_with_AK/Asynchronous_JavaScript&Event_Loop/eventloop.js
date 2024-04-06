// Things learned:
// 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
// 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
// 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
// 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
// 5. Micro task is given priority over callback tasks.
// 6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).


// Things learned:
// 1. JS runtime environment contains all elements required to run JS.
// 2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
// 3. JS engine is a piece of code.
// 4. Process includes Parsing ---> Compilation -----> Execution.
// 5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
// 6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
// 7. Execution and Compilation are done together.
// 8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
// 9. Fell in love with JS. 