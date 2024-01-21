const cart = [
  { item: "shirt", price: "600" },
  { item: "pant", price: "900" },
  { item: "kutha", price: "650" },
  { item: "shorts", price: "500" },
];

let wallet = 4000;


const createOrder = (cart) => {
  const createOrderPromise = new Promise((resolve, reject) => {
    if (!cart) {
      reject("cart is empty");
    }

    resolve({ msg: "Order created successfully", orderid: "123456" });
  });
  return createOrderPromise;
};

const proceedToPayment = (res) => {
    const {orderid}=res;
  const proceedPayMentPromise = new Promise((res, rej) => {
    if (!orderid) {
      rej("no order id");
    }
    res({ orderDetails: { transationId: "trxs83993938378", price: 2900 } });
  });
  return proceedPayMentPromise;
};

const showOrderSummary = (res) => {
  const { transationId } = res.orderDetails;

  const summaryPromise = new Promise((res, rej) => {
    if (!transationId) {
      rej("No transation id");
    }

    res({ totalCost: "2900", paid: "true" });
  });

  return summaryPromise;
};

const updateWallet = (res) => {
  const { totalCost, paid } = res;
  const walletPromise = new Promise((res, rej) => {
    if (!paid) {
      rej("Payment not yet updated");
    }
    if (wallet > totalCost) {
      wallet = wallet - totalCost;
      console.log("To amount of Purchase is ", parseInt(totalCost));
      res(`Updated wallet balance is ${wallet}`);
    }
  });
  return walletPromise;
};


console.log("The initial wallet balance is ", wallet);

createOrder(cart)
  .then((res) => proceedToPayment(res))
  .then((res) => showOrderSummary(res))
  .then((res) => updateWallet(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
