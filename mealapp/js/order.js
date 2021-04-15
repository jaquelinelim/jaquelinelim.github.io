let orderNowBtn = document.getElementById("orderNow");
orderNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    OrderNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function OrderNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/0b37e6178bdecca5bed71fee1cb7e07a/mealapp/breakfastmenu';
    let body = {
      orderitem: {
          name: userName,
          email: userEmail,
          pax: userPax,
          remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
        alert("ID: " + json.orderitem.id + "," + json.orderitem.name + " successfully added!");
    });

}