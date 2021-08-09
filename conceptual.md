### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callbacks, await, promises
- What is a Promise?
a promise is a object that wraps async operations and allows you to initiate a 'then' if the promise returns successfully, or a catch if it doesn't
- What are the differences between an async function and a regular function?
a regular js function initiates in the order it appears, an async function runs outside of javascript through ajax as one example, without blocking the rest of the JS program from initiating
- What is the difference between Node.js and Express.js?
node allows you to run javascript from your local server rather than the browser, express is a framework based on node that allows you to build web based applications
- What is the error-first callback pattern?
run an error check as the first callback of a promise
- What is middleware?
a function runs than passes the request onto the next middleware
- What does the `next` function do?
passes control to the next matching route
- What does `RETURNING` do in SQL? When would you use it?
The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
naming- there is no way to know what sort of information a simple name like 'elie' is pulling. As opposed to naming it 'userElieData'
you will have alot of repeated code by calling for a specific user, better to pass a variable into the request.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
