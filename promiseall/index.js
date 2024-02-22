const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Promise 3 rejected"), 1500)
);

const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 4 resolved"), 1500)
);


// we will call Promise.all([promise1, promise2, promise3]) with promise1,promise2, promise3.Since promise3 will get rejects in 1500ms,  If any of the input Promises are rejected immediately rejects with the reason of the first Promise that was rejected. It doesn't wait for the rest of the Promises to complete.
 
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });


  //This will return when all promises will resovle.
  Promise.all([promise1, promise2, promise4])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });