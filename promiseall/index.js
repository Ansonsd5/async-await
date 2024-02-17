const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success after 2sec for p1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise two success afetr 3000sec");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 successs afetr a sec");
  }, 1000);
});


const allResponses = Promise.all([promise1,promise2,promise3]);

allResponses.then((res)=> console.log(res))
