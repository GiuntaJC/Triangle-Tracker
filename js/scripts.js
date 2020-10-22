$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
      let not = "not a triangle"
      $("#outputTypeFalse").show();
      $("#outputType").hide();
    } else if (side1 === side2 && side2 === side3 && side1 === side3) {
      let equilateral = "an equilateral";
      $("#triangleType").text(equilateral);
      $("#outputType").show();
      $("#outputTypeFalse").hide();
    } else if (side1 != side2 && side2 != side3 && side1 != side3) {
      let scalene = "a scalene";
      $("#triangleType").text(scalene);
      $("#outputType").show();
      $("#outputTypeFalse").hide();
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      let iso = "an isosceles";
      $("#triangleType").text(iso);
      $("#outputType").show();
      $("#outputTypeFalse").hide();
    }

    event.preventDefault();
  });
});