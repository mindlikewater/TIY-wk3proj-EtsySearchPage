//function creates an empty box in HTML. Box will hold Etsy item.
function makeItemBox () {
  var itemBox = `<div class="box"></div>`;
  return itemBox;
};

//function creates a grid of all the Etsy items. You tell it the
//number of items you want in the grid.
function buildGrid (items) {
  var totalBoxes = [];

  for (var i = 0; i < items; i++) {
    var newHTML = makeItemBox(i);
    totalBoxes.push(newHTML);
  }
  return $(".items-container").html(totalBoxes);
};

buildGrid(16);
