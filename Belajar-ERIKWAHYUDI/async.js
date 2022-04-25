// const fetch = require("node-fetch");

// const apiCall = new Promise((resolve, reject) => {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => resolve(res.json()))
//     .catch((err) => reject(err));
// });

// apiCall.then(console.log).catch(console.log);

// const promise1 = Promise.resolve(3); // success
// const promise2 = 42; // success
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// }); // success

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // output: Array [3, 42, "foo"]

// const Rejection = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "Rejected"); //always rejected
// });

// Promise.any([Rejection])
//   .catch((err) => {
//     console.log(err);
//   });

// // expected output: "AggregateError: No Promise in Promise.any was resolved"

