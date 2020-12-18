window.onload = ()=>{
  var data;
  fetch("test.json")
  .then(response => response.json())
  .then(json => data = json);
 document.getElementById("btn").onclick = () => {
    var list = `
             <ul>
                <li>${data.name}</li>
             </ul>
               `;
    document.querySelector("body").appendChild(list);
 }
}
