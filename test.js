async function getData(){
  const response = await fetch("test.json").then( res => res.json() );
 return response;
}
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
   const data = getData();
  console.log(data);
}
}
