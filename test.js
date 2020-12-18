
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  console.log("sad");
  fetch("test.json").then(function(res){
    console.log(res);
  });
}
}
