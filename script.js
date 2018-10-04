function changeColor() {

    if  (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = ("blue");
    } else {
        document.body.style.backgroundColor = "white";
    }
    
}

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = backgroundColor;
    }

function randomColor2() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);
    var rgbValue = "rgb(" + red + ", " + green + ", " + blue +")";
    document.body.style.backgroundColor = rgbValue;

}

function randomColor3() {

    var red1 = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));
    var green1 = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));
    var blue1 = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));

    var hexValue = "#" + red1 + red2 + green1 + green2 + blue1 + blue2;
    document.body.style.backgroundColor = hexValue;
    console.log(hexValue);
    
}

function convertToHex(value) {
    if (value == 10) {
        return "A";
    } else if (value == 11) {
        return "B";
    } else if (value == 12) {
        return "C";
    } else if (value == 13) {
        return "D";
    } else if (value == 14) {
        return "E";
    } else if (value == 15) {
        return "F";
    }

    return (value);
}

// Pass by value:
//string, number, boolean

//Pass by reference: 
// array, object

var footballPlayer = {
    name: "David Jensen",
    age: 22,
    shirtNumber: 14,
    position: "Mid-fielder",
    gender: "male",

}

var newFootballPlayer = footballPlayer;
newFootballPlayer.name = "Albert Einstein";
console.log(newFootballPlayer);
console.log(footballPlayer);

var message = "Welcome";
var newMessage = message;
newMessage = "Welcome home!";
console.log(message);
console.log(newMessage);