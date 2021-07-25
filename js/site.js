// Call Hellow World
let startingNumber, endingNumber;

function displayValues() {
    startingNumber = document.getElementById("startValue").value;
    endingNumber = document.getElementById("endValue").value;
    
    if(startingNumber != "" && endingNumber != "") {
        console.log("Starting Value: " + startingNumber);
        console.log("Ending Value: " + endingNumber);

        if (startingNumber > endingNumber) {
            alert("Error: Starting number must be less than ending number!");
        } else {
            for (let i = startingNumber; i <= endingNumber; i++) {
                if(i % 2 == 0) {
                    if(i == 0){
                        console.log(i);
                    }else {
                        console.log(i + " is even!");
                    }
                    
                } else {
                    console.log(i);
                }
              }
        }

    } else {
        alert("Error: Make sure both values are not empty!")
    }
}