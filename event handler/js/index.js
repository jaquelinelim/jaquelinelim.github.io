function transformUppercase(_val){
return _val.toUppercase();
}

let elnamaPengguna = document.getElementById(namaPengguna); //1) select element
elnamaPengguna.addEventListener("keyup",function(){
    elnamaPengguna.value = transformUppercase(elnamaPengguna.value);
});