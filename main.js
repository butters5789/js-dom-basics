console.log("sanity check")

var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}
