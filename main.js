//array holds all the item boxes
var itemsGrid = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

function makeItemBox (box) {
  return `<div class="box"></div>`;
};

function buildGrid (itemsGrid) {
  var boxesHTML = [];

  for (var i=0; i < itemsGrid.length; i++) {
    var newHTML = makeItemBox(itemsGrid[i]);
    boxesHTML.push(newHTML);
  }
  return `
  <div class="itemsGrid">${boxesHTML.join("")}</div>
`;
};

newHTML = buildGrid(itemsGrid);
$(".items-container").html(newHTML);
