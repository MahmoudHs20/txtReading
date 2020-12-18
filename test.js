 async function getData(){
  const response = await fetch("test.json").then( res => res.json() );
 console.log(response);
  return response;
}
window.onload = ()=>{
 document.getElementById("btn").onclick = function(){
   const data =  getData();
  console.log(data);
}
}
