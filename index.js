const samplePromise = new Promise((reslove, recject) => {
  setTimeout(() => {
    reslove("This is a Resolve message"),
     recject("This is a reject Message");
  }, 10000);
});

const samplePromise2 = new Promise((resolve,recject) => {
setTimeout(() => {
  
})
})

// async function getData(){
//     return samplePromise;
// }

// const data = getData();

// data.then(res => console.log(res));

async function asyncData() {
  const data = await samplePromise;

  console.log(data);
}

asyncData();

function getData(){
    samplePromise.then(res => console.log(res,"normal way"))
}

getData();
