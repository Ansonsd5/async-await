const cart = ["apple", "banana", "mango", "orange", "pineapple"];

createOrder(cart)
  .then((res) => {
    console.log(res.msg);
    return res.orderId;
  })
  .then((res) => {
    return proceedToPayment(res.orderid);
  })
  .then((paymentInfo ) => console.log(paymentInfo))
  .catch((err) => console.log(err.message));

// const promiseData = createOrder(cart);

// promiseData
//   .then(function (res) {
//     // proceedToPayment(orderId);
//     const { orderid, msg } = res;
//     console.log(orderid, msg);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

function createOrder(cart) {
  const newPromise = new Promise((resolve, reject) => {
    if (!cart.includes("apple")) {
      const err = new Error("Promise got rrejected");
      reject(err);
    }

    const orderId = "12345";

    setTimeout(() => {
      if (orderId) {
        resolve({ msg: `The order id is ${orderId}`, orderid: orderId });
      }
    }, 1000);
  });
  return newPromise;
}

const proceedToPayment = (orderId) => {
  debugger;
  const proceedPayMentPromise = new Promise((res, rej) => {
    if (!(orderId.length > 3)) {
      const err = new Error("Not a valid order Id");
      rej(err);
    }

    res({
      paymentInfo: {
        totalCost: 4500,
        transactionId: "32454fdvdbvdbd",
        date: new getData(),
      },
    });
  });

  return proceedPayMentPromise;
};
