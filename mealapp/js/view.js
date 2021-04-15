let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click",function(){
    GetOrder();
});

function GetOrder(){
    
    let url = 'https://api.sheety.co/0b37e6178bdecca5bed71fee1cb7e07a/mealapp/breakfastmenu';
    fetch(url)
    .then((response) => response.json())
    .then(json => {

        let orderNameList = document.getElementById("orderNameList");
        let orderIds = [];

        
 
        for(let k = orderNameList.rows.length - 1; k > 0; k--){
            orderNameList.deleteRow(k);

        }

        for(let i = 0; i < json.breakfastmenu.length; i++){
            let gName =  json.breakfastmenu[i].name;
            let gEmail =  json.breakfastmenu[i].email;
            let gPax =  json.breakfastmenu[i].pax;
            let gRemarks =  json.breakfastmenu[i].remarks;
            let gId =  json.breakfastmenu[i].id;
            let btnId = "delete" + gId;

            let row = orderNameList.insertRow(orderNameList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPax;
            row.insertCell(4).innerHTML = gRemarks;
            row.insertCell(5).innerHTML = "<button id='" + btnId +"' class='btn btn-danger'>Delete</button>";

            orderIds.push(btnId);
        }

        for(let j = 0; j < orderIds.length; j++){
            let el = document.getElementById(orderIds[j]);
            el.addEventListener("click", function(){
                let theId = orderIds[j].replace("delete","");
                DeleteOrder(theId);
            });

        }
    });
}

function DeleteOrder(id) {
    let url = 'https://api.sheety.co/0b37e6178bdecca5bed71fee1cb7e07a/mealapp/breakfastmenu/2' + id;
fetch(url, {
  method: 'DELETE',
})
.then(() => {
    alert("Record id " + id + " deleted!");
  GetOrder();
});

}