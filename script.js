let rate_range = document.getElementById('rate');
let output = document.getElementById('rateholder');
output.innerHTML = rate_range.value;

rate.oninput = function () {
    output.innerHTML = this.value;
}
        

function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("time").value;
    var result = document.getElementById("result");

    // validate principal input
    if (p <= 0) {
        window.alert("Please enter a principal value of 1 or greater."); 
        p.focus(); 
        return false; 
    }

    // return result of simple interest calculation
    let accrued = p * (1 + (r / 100 * t));
    let interest = accrued - p;

    // build the output
    result.textContent = `If you deposit ${p}
                    at an interest rate of ${r}%.
                    You will recieve an amount of ${interest}
                    in the year ${2021 + parseInt(t)}.`;
}