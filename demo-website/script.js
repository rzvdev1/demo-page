var question = prompt("Do you like science");
document.write("Your response was " + question + ", ");

if (confirm(" You want to check a cool website")) {
  document.write("Check this out");
  alert("Are you ready?");
  console.log("What do you think so far?");
} else {
  document.write("OK, maybe next time.");
  console.log("You should check it out some time.");
}

function getResponse(param) {
  var question = alert(
    "From 90 - 100 Billion, How many supermassive black holes are there?"
  );
  var answer = prompt("Enter a answer here");
  answer = Number(answer);
  if (answer === 100) {
    document.write(
      "Yes there is about " + answer + " Billion supermassive black holes."
    );
    console.log(answer);
  } else {
    var again = alert("Guess again");
    document.write(again);
    getResponse();
  }
  return "You are right" + param;
}
