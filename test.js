
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  console.log("sad");
  fetch("test.json").then(function(res){
    return res.json();
  }).then(function(json){
    console.log(json);
  });
}
}
