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
