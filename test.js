
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  console.log("sad");
  fetch("test.json").then(res => res.json()).then(json => console.log(json))
}
}
