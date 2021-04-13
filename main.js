var a1 = ["Jenny", "Sophia", "Xenia", "Hae Yong"];
console.log(a1);
var i = 0;
var a2 = ["sister.jpg", "little sister.jpg", "mom.jpg", "dad.jpg"];
console.log(a2);
function f1(){
    if(i > 3){
       i = 0;
    }
    document.getElementById("book").src=a2[i];
    document.getElementById("name").innerHTML = a1[i];
    i++;
}