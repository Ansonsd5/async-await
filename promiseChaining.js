const cart = [
  { item: "shirt", price: "600" },
  { item: "pant", price: "900" },
  { item: "kutha", price: "650" },
  { item: "shorts", price: "500" },
];
let wallet = 4700;
const amount = document.querySelector('#amount');

amount.innerHTML=wallet;



//initial wallet balance


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
  const orderid = res;
  const proceedPaymentPromise = new Promise((res, rej) => {
    if (!orderid) {
      rej("no order id");
    }
    res({ orderDetails: { transationId: "trxs83993938378", price: 2900 } });
  });
  return proceedPaymentPromise;
};

const showOrderSummary = (res) => {
  const orderDetails = res;

  const summaryPromise = new Promise((res, rej) => {
    if (orderDetails.transationId) {
      rej("No transation id");
    }

    res({ totalCost: 2900, paid: "true" });
  });

  return summaryPromise;
};

const updateWallet = (res) => {
  const totalCost = res.totalCost;
  const walletPromise = new Promise((res, rej) => {
    if (!totalCost) {
      rej("Payment not yet updated");
    }
    if (wallet) {
      if (wallet > totalCost) {
        wallet = wallet - totalCost;
        console.log("To amount of Purchase is ", totalCost);
        res(`Updated wallet balance is ${wallet}`);
      } else {
        rej("Low Balance cant proceed ");
      }
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
