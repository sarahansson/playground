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
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

function randomColor2() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);

    var rgbValue = "rgb(" + red + "," + green + "," + blue +")";
    document.body.style.backgroundColor = rgbValue;


    console.log(red, green, blue);

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