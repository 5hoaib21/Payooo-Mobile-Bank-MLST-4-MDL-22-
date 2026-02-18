document.getElementById("cashout-btn").addEventListener("click", function () {
  //   // get the agent num && validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if(cashoutNumber.length != 11){
    alert('Invalid Agent Number')
    return;
  }
  //   //get the amount

  const cashoutAmount = getValueFromInput("cashout-amount");
  //   //get the current balance

  const currentBalance = getBalance()
  //   // calculate new balance

  const newBalance = currentBalance - Number(cashoutAmount);

  console.log(newBalance);
  if(newBalance < 0){
    alert('Invalid Amount')
    return;
  }
  const pin = getValueFromInput("cashout-pin")
  if(pin === '1234'){
    alert("cashout successful")
     setBalance(newBalance)
  } else{
    alert('Invalid pin')
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener('click',  function(){
// const cashoutNumberInput =  document.getElementById('cashout-number');
// const cashoutNumber = cashoutNumberInput.value ;
// console.log(cashoutNumber);
// if(cashoutNumber.length !=11){
//   alert('invalid Agent Number')
//   return;
// }

//   //get the amount
//   const cashoutAmountInput = document.getElementById('cashout-amount');
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   //get the current balance
//   const balanceElement = document.getElementById('balance')
//   const balance = balanceElement.innerText ;
//   console.log(balance);

//   // calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if(newBalance < 0){
//     alert('Invalid Amount')
//     return;
//   }
//   console.log(`New Balance is:`, newBalance);
//   // get the pin && verify

//   const cashoutPinInput = document.getElementById('cashout-pin');
//   const pin = cashoutPinInput.value;
//   if(pin === '1234'){

//     // isTrue :: show an alert > set balance
//     alert('cashout successful');
//     console.log('new balance:', newBalance);
//     balanceElement.innerText = newBalance;
//   }else{

//     // isFalse :: show an error alert > return
//     alert('invalid pin')
//     return;
//   }
// })
