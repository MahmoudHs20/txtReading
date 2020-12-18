window.onload = ()=>{
 document.getElementById("btn").onclick = () => {
    $.getJSON("test.json", function(json) {
    console.log(json.json());
});
}
}
