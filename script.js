let range = document.getElementById('slider');
let output = document.getElementById('rateholder');
output.innerHTML = range.value;

range.oninput = function () {
    output.innerHTML = this.value;
}
        

function compute()
{
    p = document.getElementById("principal").value;
    
}