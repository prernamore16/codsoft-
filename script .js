let string = "";
var noOfButtons = document.getElementsByClassName("button").length;
for (i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".button")[i].addEventListener('click', function() {
    if (this.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if (this.innerHTML == "AC") {
      string = " ";
      document.querySelector("input").value = string;
    }
    else if (this.innerHTML == "Del") {
      string = string.slice(0, -1)

      document.querySelector("input").value = string;
    }
    else {
      console.log(this);
      string = string + this.innerHTML;
      document.querySelector("input").value = string;
    }


  });

}
