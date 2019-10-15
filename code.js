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

function isFive (input) {
    return parseFloat(input) === 5;
}

function isEven (input) {
    return parseFloat(input) % 2 === 0;
}

function isVowel (input) {
    return input === "a" || input === "e" || input === "i" ||input === "o"||input === "u" ||input === "A" ||input === "E" ||input === "I" ||input === "O" ||input === "U";
}

function add (x,y) {
    return (parseFloat(x) + parseFloat(y));
}