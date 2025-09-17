// const f = async () => {
//   console.log("Async function");
//   return Promise.resolve("Promise resolved");
// };

// f().then((result) => {
//   console.log(result);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 4000);
});

const doThis = async () => {
  let result = await promise;
  console.log(result);
  console.log("Done");
};

doThis();
