function findNearest(lat,lon){
    let d1 = haversine(lat,lon,2.922561,101.650965); // De Pulze
    let d2 = haversine(lat,lon,3.073065,101.607787); // Sunway Pyramid
    let d3 = haversine(lat,lon,3.158761,101.714524); //klcc

    return[di,d2,d3];
}
let elLocate = document.getElementById("locate");
elLocate.addEventListener("click", function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long");
            let elDePulze = document.getElementById("depulze");
            let elSunway = document.getElementById("sunway");
            let elKlcc = document.getElementById("klcc");

            let userlat = position.coords.latitude;
            let userlon = position.coords.longitude;


        }
        
    }