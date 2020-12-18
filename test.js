window.onload = ()=>{
     var data;
     $.getJSON("test.json", function(json) {
      data = json;
});
 document.getElementById("btn").onclick = () => {
   console.log(data);
}
}
