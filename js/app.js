var solution;
var finalsolution;

$('#reset').on('click', function () {
  $('#result').text("");
});

$('#calculate').on('click', function () {

  var operation = $('#operation').val();
  var value1 = parseInt($('#value1').val());
  var value2 = parseInt($('#value2').val());

  if (isNaN(value1) && isNaN(value2)) {
    finalsolution = "Missing data";
  }
  else if (operation == "sum") {
    finalsolution = sum(value1, value2);
  }
  else if (operation == "subtraction") {
    finalsolution = subtraction(value1, value2);
  }
  else if (operation == "division") {
    finalsolution = division(value1, value2);
  } else if (operation == "multiplication") {
    finalsolution = multiplication(value1, value2);
  }
  $('#result').text(finalsolution);

});

function sum(val1, val2) {
  var solution = (val1 + val2);
  return solution;
}

function subtraction(val1, val2) {
  solution = val1 - val2;
  return solution;
}

function division(val1, val2) {
  if (val2 >= 1) {
    solution = val1 / val2;
  } else {
    solution = "You can't divided into a number less than 0";
  }
  return solution;
}

function multiplication(val1, val2) {
  solution = val1 * val2;
  return solution;
}
