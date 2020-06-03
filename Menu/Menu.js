/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
{/* <div class="menu">
<ul>
  {each menu item as a list item}
</ul>
</div> */}
const menButton = document.querySelector('.header');

function menuMaker(menuArray){
  // Elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');
 
  const listItem = document.createElement('li');
  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem5 = document.createElement('li');

  // Structure
  menu.appendChild(list);
  list.appendChild(listItem);
  list.appendChild(listItem1);

  list.appendChild(listItem2);

  list.appendChild(listItem3);

  list.appendChild(listItem4);

  list.appendChild(listItem5);

  menu.classList.add('menu');

  listItem.textContent = menuArray[0];
  listItem1.textContent = menuArray[1];
  listItem2.textContent = menuArray[2];
  listItem3.textContent = menuArray[3];
  listItem4.textContent = menuArray[4];
  listItem5.textContent = menuArray[5];
 
  var hamburger = document.querySelector('.menu-button');
  hamburger.addEventListener('click', function(e){
    menu.classList.toggle('menu--open')
  });
  return menu

}
let menu = menuMaker(menuItems);
console.log(menu);
menButton.appendChild(menu)

