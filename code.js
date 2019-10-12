// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true || input === false || input === "" || input === null) {
        return helloWorld();
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return false;
}