

function displayValues() {
    let startingNumber, endingNumber;
let resultsTable = document.getElementById("results");

    startingNumber = document.getElementById("startValue").value;
    endingNumber = document.getElementById("endValue").value; 

    if(startingNumber != "" && endingNumber != "") {
        

       
            resultsTable.innerHTML = "";
            for (let i = startingNumber; i <= endingNumber; i++) {
                if(i % 2 == 0) {
                    
                        console.log(i + " is even!");
                        resultsTable.innerHTML = resultsTable.innerHTML + "<tr><td><strong>" + i + "</strong></td></tr>"
                    
                    
                } else {
                    console.log(i);
                    resultsTable.innerHTML = resultsTable.innerHTML + "<tr><td>" + i + "</td></tr>"
                }
              }
        

    } else {
        alert("Error: Make sure both values are not empty!")
    }
}