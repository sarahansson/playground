function changeBackground() {

    if  (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = ("blue");
    } else {
        document.body.style.backgroundColor = "white";
    }
    
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