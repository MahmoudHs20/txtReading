window.onload = ()=>{
     $.getJSON("test.json", function(json) {
     var data = json;
});
 document.getElementById("btn").onclick = () => {
   console.log(data);
}
}
