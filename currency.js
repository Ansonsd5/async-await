
const fetchData = async () =>{
    const ApiData = await  fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
    let JsonData = await ApiData.json();
    let FinalData = JsonData?.usd;
    console.log(FinalData);
    return FinalData;
    
}

fetchData()