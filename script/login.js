document.getElementById("login-btn").addEventListener("click", function () {

  //1- get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //2- get the pin input
  const inputPin = document.getElementById('input-pin')
  const pin = inputPin.value ;
  console.log(pin);

  //3- matched pin && mobile number
  if(contactNumber == "12345678901" && pin == "1234"){
      alert('user just logged in')
      // window.location.replace("/home.html")
      window.location.assign("/home.html")
  }
  //3-1  true::::> alert> Homepage
  else{
    alert('logged in failed')
    return;
  }
  //3-1  false::::> alert> return
});
