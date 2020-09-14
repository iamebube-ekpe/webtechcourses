alert("You didn't think it would be that easy did you?!!");
alert("The registration is not for the weak minded nekos/cats!");
alert("You are going to be tested in order to prove your worthiness!!");

var catName = prompt("Name? ");
var trialQuestion = prompt("What do we want? (Land, Treasures, Kingdom, More Fishes)");
if (trialQuestion.toLowerCase() == "kingdom") {
    alert("The heavy doors creak as they open, as unknown voices say-- Welcome " + catName);
    alert("meow!");
} else {

    alert("Intruder!!!!!! You have no business with us you spy!");
    window.location.replace("index.html");
}