function vote() {
    var name = document.getElementById("name").value  ;
    var pass=100*Math.random();
    var result =document.getElementById("result");
    result.innerHTML=name+",you have scored:"
    +pass.toFixed(2)+"%";
}
