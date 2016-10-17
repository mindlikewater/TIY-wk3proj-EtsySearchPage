
//Global variable holds all the Etsy Search items
var items = eurogames.results;

//Function creates an empty box in HTML, containing Etsy item data for one item.
function makeItemBox (items) {
  var itemBox =
    `<div class="box">
      <img class="image" src="${items.Images[0].url_170x135}"/>
      <div class="name">${items.title}</div>
      <div class="shop">${items.Shop.shop_name}</div>
      <div class="price">$${items.price}</div>
      <a class="link" href="${items.url}"></a>
    </div>`;
  return itemBox;
};

//Function builds a grid of Etsy item boxes
//numItems = total number of Etsy items to be displayed
function buildGrid(numItems) {
  //Array to hold all the Etsy item boxes
  var totalBoxes = [];
  //Loop through the total number of Etsy items you want and generate HTML boxes for each Etsy item.
  for (var i = 0; i < numItems; i++) {
    var boxHTML = makeItemBox(items[i]);  //Calls makeItemBox() function & saves result in a variable.
    totalBoxes.push(boxHTML);   //Adds each Etsy item box to the array.
  }
  //Etsy item boxes will be generated as HTML in the div, .items-container
  return $(".items-container").html(totalBoxes);
};

//Call function to build a grid of 16 Etsy item boxes
buildGrid(16);
