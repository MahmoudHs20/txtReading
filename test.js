
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  console.log("sad");
  fitch("test.json").then( res => console.log(res) );
}
