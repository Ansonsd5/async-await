const cart = ["apple", "banana", "mango", "orange", "pineapple"];

createOrder(cart)
  .then((res) => {
    console.log(res.msg);
    return res?.orderId;
  })
  .then((res) => {
    return proceedToPayment(res.orderid);
    // console.log(proceedToPayment(res.orderId));
  })
  .then((res) => {
    console.log(res?.paymentInfo);
    return res.paymentInfo.totalCost;
  })
  .then((res) => {
    return applyCouponCode(res?.paymentInfo?.totalCost);
  })

  .then((res) => {
    console.log(res);
  })

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
        resolve({ msg: `The order id is ${orderId}`, orderId: orderId });
      }
    }, 1000);
  });
  return newPromise;
}

const proceedToPayment = (orderId) => {
  const proceedPayMentPromise = new Promise((res, rej) => {
    if (false) {
      const err = new Error("Not a valid order Id");
      rej(err);
    }

    res({
      paymentInfo: {
        totalCost: 4500,
        transactionId: "32454fdvdbvdbd",
        date: "12/04/2024",
      },
    });
  });

  return proceedPayMentPromise;
};

const applyCouponCode = (totalCost) => {
  const applyCouponCodePromise = new Promise((res, rej) => {
    if (totalCost < 3000) {
      rej("Not applicable for Coupon");
    }

    res("Your coupon code is ******");
  });

  return applyCouponCodePromise;
};
