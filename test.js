
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  console.log("sad");
  fetch("test.json").then(res => console.log( res.json() ) );
}
}
