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
  return confirm("Lets find out if " + answer + " Is right");
}

function getGuess() {
  var condition = true;
  // var input = prompt("How many main rings are in Saturn?");
  while (condition) {
    var input = prompt("How many main rings are in Saturn?");
    input = Number(input);
    if (input === 7) {
      alert(
        "There are 7 main rings, they are D, C, B, A, F, G and E. The D ring is very faint and closest to Saturn."
      );
      document.write(
        '<img src="saturn.jpg" alt="saturn planet" width="300" height="300" />'
      );
      condition = false;
    } else {
      alert("Try again");
    }
  }
}
