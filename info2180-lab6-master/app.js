window.onload=page;
function page(){

  document.getElementsByClassName("btn")[0].addEventListener("click", function(){

    var inputVal = document.getElementById("myInput").value;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      
      document.getElementById("result").innerHTML = xhr.responseText;

    }
  }
xhr.open("GET", "http://localhost:8080/superheroes.php?query="+inputVal);
xhr.send();
})
}
