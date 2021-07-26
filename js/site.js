// Retrieve values from form.
function getValues() {
    // Get values from form.
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let errorStartGreaterThanEnd = '<tr class="table-danger"><td>Starting interger must be smaller than ending integer.</td></tr>';
    let errorFieldBlank = '<tr class="table-danger"><td>Please enter a number in both fields.</td></tr>';
    let errorNumOutOfBounds = '<tr class="table-danger"><td>Numbers are out of bounds. Please enter numbers from 0 to 100.</td></tr>';
    
    // Convert input to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate input and make sure they are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        if(startValue > endValue) {
            document.getElementById("resultsTable").innerHTML = errorStartGreaterThanEnd;
        } else if (startValue < 0 || endValue > 100) {
            document.getElementById("resultsTable").innerHTML = errorNumOutOfBounds;
        } else {
            // Call generateNumbers()
            let numbers = generateNumbers(startValue, endValue);

            // Call displayResults()
            displayResults(numbers);
        }
        
    } else {
        document.getElementById("resultsTable").innerHTML = errorFieldBlank;
    }
}

// Generate range of numbers based off of entered values.
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // get numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;
}

// Display numbers and make even ones bold.
function displayResults(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if(number%2 == 0) {
            /* ===============================================================
               Blender does not display template literals very well. See source
               code for referece to this line of code. 
               =============================================================== */
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        }else {
            /* ===============================================================
               Blender does not display template literals very well. See source
               code for referece to this line of code. 
               =============================================================== */
            templateRows += `<tr><td>${number}</td></tr>`;
        }
    }

    document.getElementById("resultsTable").innerHTML=templateRows;
}