 async function getData(){
  const response = await fetch("test.json").then( res => res.json() );
  return response;
}
window.onload = async function(){
 document.getElementById("btn").onclick = () =>{
   const data = await getData();
  console.log(data);
}
}
