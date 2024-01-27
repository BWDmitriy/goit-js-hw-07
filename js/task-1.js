const categoryList = document.querySelector('ul#categories');
console.log(categoryList);
const categoryNumber = categoryList.children.length;
// const categoryNumber = document.querySelectorAll('li.item').length;
console.log('Number of categories: ' + categoryNumber);
const categories = document.querySelectorAll('li.item');
categories.forEach(item => {
  let categoryName = item.querySelector('h2');
  let categoryElements = item.querySelectorAll('li').length;
  console.log('Category: ' + categoryName.textContent);
  console.log('Elements: ' + categoryElements);
});
