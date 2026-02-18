document.getElementById("add-money-btn").addEventListener("click", function () {
  //1 bank acc;
  const bankAcount = getValueFromInput("add-money-bank");
  if (bankAcount == "Select a bank") {
    alert("Please Select a Bank");
    return;
  }
  //2 get bank ac num
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("invalid ACC No");
    return;
  }
  // 3 get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add money succeed from 
      ${bankAcount} 
      at ${new Date()} `);
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
