
window.onload = () =>{
 document.getElementById("btn").onclick = () =>{
  $.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
 };
}
