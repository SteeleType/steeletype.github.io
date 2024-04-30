function lastItem(arr) {
    document.getElementById('output').innerHTML = "The original array is " + JSON.stringify(arr) + "<br>";
    var lastAlphabetically = arr.slice().sort((a, b) => a.localeCompare(b)).pop();
    document.getElementById('output').innerHTML += "The last item of the sorted array is " + lastAlphabetically;
}

function userInput() {
    var numCategories = parseInt(prompt("How many items would you like to enter? 2-4"));
    if (numCategories < 2 || numCategories > 4 || isNaN(numCategories)) {
        alert("Please enter a number between 1 and 4 for the number of categories.");
        return;
    }

    var userInputs = [];
    var items = [];

    for (var c = 0; c < numCategories; c++) {
        var category = prompt("Enter category #" + (c + 1) + ":");
        if (category.trim() === "") {
            alert("Category name cannot be empty.");
            return;
        }

        var item = prompt("Enter an item for category '" + category + "':");
        if (item.trim() === "") {
            alert("Item name cannot be empty.");
            return;
        }

        userInputs.push({ category: category, item: item });
        items.push(item);
    }

    items.sort((a, b) => a.localeCompare(b));
    var outputHTML = "You entered ";
    userInputs.forEach(function(input, index) {
    outputHTML += input.item;
    if (index !== userInputs.length - 1) {
        outputHTML += ", ";
    } else {
        outputHTML += ".";
    }
});

    outputHTML += "<br>I sorted them ";
    items.forEach(function(item, index) {
        outputHTML += item;
        if (index !== items.length - 1) {
            outputHTML += ", ";
        } else {
            outputHTML += ".";
        }
    });

    document.getElementById('output').innerHTML = outputHTML;
}








document.getElementById('testButton').onclick = function() {
    lastItem(['Watermelon', 'Apple', 'Orange', 'Kiwi']);
};

document.getElementById('inputButton').onclick = userInput;
