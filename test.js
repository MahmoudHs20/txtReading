 async function getData(){
  const response = await fetch("test.json").then( res => res.json() );
  return response;
}
window.onload = ()=>{
 document.getElementById("btn").onclick = async function(){
   const data = await getData();
  console.log(data);
}
}
