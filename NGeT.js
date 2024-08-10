// alert("hello");
function getId(obj){
    x = "#cont"+obj.id;
    for (i = 0; i < document.querySelectorAll(".container").length ;i++ ){
        document.querySelectorAll(".container")[i].classList.add("hidden");
        document.querySelectorAll("#navlist li")[i].classList.remove("selected");
        
    }
    document.querySelector(x).classList.remove("hidden");
    document.getElementById(obj.id).classList.add("selected");

}