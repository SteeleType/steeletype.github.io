// scripts.js

// JavaScript for greeting button
document.getElementById('greetingButton').addEventListener('click', function () {
    var now = new Date();
    var hour = now.getHours();
    var greeting;
    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good day!';
    } else {
        greeting = 'Good evening!';
    }
    alert(greeting);
});

// JavaScript for changing button
document.getElementById('changeButton').addEventListener('click', function () {
    var button = document.getElementById('changeButton');
    console.log('Button before change:', button);
    button.innerText = 'Done';
    button.classList.remove('btn-primary');
    button.classList.add('btn-success');
    console.log('Button after change:', button);
});
