function transformUppercase(_val){
return _val.toUppercase();
}

let elnamaPengguna = document.getElementById(namaPengguna); //1) select element
elnamaPengguna.addEventListener("keyup",function(){
    elnamaPengguna.value = transformUppercase(elnamaPengguna.value);
});

function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan");
    let password_val = elkataLaluan.value;
    if(password_val.length > 5){
        alert("password check....OK!");
        
    } else {
        alert("Password too short!"); 

    }
}
let elkataLaluan = document.getElementById("kataLaluan");
elkataLaluan.onblur = checkPassword;
