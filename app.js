var screen = document.getElementsByClassName("screen")[0];
var nums = document.getElementsByClassName("num");
var ops = document.getElementsByClassName("op");
var clear = document.getElementsByClassName("clear")[0];
var del = document.getElementsByClassName("del")[0];
var solve = document.getElementsByClassName("equal")[0];

solve.addEventListener("click", function() {
  screen.value = eval(screen.value);
});

clear.addEventListener("click", function() {
  screen.value = "";
});

del.addEventListener("click", function() {
  var digits = screen.value;
  screen.value = digits.substring(0, digits.length - 1);
});

for (var i=0; i<nums.length; i++) {
  nums[i].addEventListener("click", function() {
    screen.value += this.textContent;
  });
}

for (var j=0; j<ops.length; j++) {
  ops[j].addEventListener("click", function() {
    screen.value += this.textContent;
  });
}
