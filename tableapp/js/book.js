let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function BookNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/0b37e6178bdecca5bed71fee1cb7e07a/tableapp/bookingitems';
    let body = {
    bookingitem: {
      name: userName, 
      email: userEmail,
      pax: userPax,
      remarks: userRemarks
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
      alert(json.bookingitem.name + " successfully added!");
  });

}