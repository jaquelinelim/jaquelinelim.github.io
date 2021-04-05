let elLoadUser = document.getElementById("getRandomUserBtn");
elLoadUser.addEventListener("click", function(){
    elLoadUser();
}):

function elLoadUser(){
    let url = "https://randomuser.me/api/";

    fetch(url)
    .then((response) => response.json())
    .then(data =>{
        let fn = document.getElementById("firstName");
        let ln = document.getElementById("lastName");
        let phone = document.getElementById("phone");
        let img = document.getElementById("userimg");

        fn.innerHTML = data.results[0].name.first;
        ln.innerHTML = date.results[0].name.last;
        phone.innerHTML = date.results[0].phone;
        imgsrc = date.results[0].picture.large;


    });
}