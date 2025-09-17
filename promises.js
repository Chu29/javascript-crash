// new Promise(function(resolve, reject){})

let isCompleted = false;

let promise = new Promise(function (resolve, reject) {
  if (isCompleted) {
    resolve("The task is completed");
  } else {
    reject("The task is not completed");
  }
});

console.log(promise);

promise
  .then(function (result) {
    console.log(`In the then: ${result}`);
  })
  .then(() => {
    console.log("Another successful task here.");
  })
  .catch((err) => {
    console.log("In the catch: " + err);
  })
  .finally(() => {
    console.log(
      "This will be executed regardless if the promise being resolved or rejected"
    );
  });

// simulating api calls
const api1 = () => {
  return new Promise((res, req) => {
    setTimeout(() => {
      isCompleted ? res("API 1 response") : req("API 1 Failed");
    }, 2000);
  });
};

const api2 = () => {
  return new Promise((res, req) => {
    setTimeout(() => {
      isCompleted ? res("API 2 response") : req("API 2 Failed");
    }, 3000);
  });
};

const api3 = () => {
  return new Promise((res, req) => {
    setTimeout(() => {
      isCompleted ? res("API 3 response") : req("API 3 Failed");
    }, 4000);
  });
};

// making api calls
api1()
  .then((result1) => {
    console.log(result1);
    return api2();
  })
  .then((result2) => {
    console.log(result2);
    return api3();
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise chaining done!");
  });
