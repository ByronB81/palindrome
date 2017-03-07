// business logic
function reverseString(string) {
  return string.split("").reverse().join("");
}
// console.log(reverseString);
var palindromeCheck = function(string, reversedString) {
  if (string === reversedString) {
    return true;
  } else {
    return false;
  };
}
// front-end logic
$(document).ready(function() {
  $("form#word-check").submit(function(event) {
    event.preventDefault();
    var string = $("input#string").val().toLowerCase();
    var reversedString = reverseString(string);
    var result = palindromeCheck(string, reversedString);


    $(".string").text(string);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }


    $("#result").show();
  });
});
