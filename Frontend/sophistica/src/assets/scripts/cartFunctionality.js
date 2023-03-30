// // ---------- CART ---------- //

// export var addItemId = 0;

// export function addToCart(item) {
//   // ---------- ADD To Cart ---------- //

//   // Item ID

//   addItemId += 1;
//   var selectedItem = document.createElement('div');
//   selectedItem.classList.add('cart--img');
//   selectedItem.setAttribute('id', addItemId);

//   // Item Title

//   var cartItems = document.getElementById('title');
//   cartItems.append(selectedItem);

//   var title = createElement('div');
//   title.innerText = item.children[1].innerText;
//   selectedItem.append(title);

//   // Item Image

//   var img = document.createElement('img');
//   img.setAttribute('src', item.children[0].currentSrc);
//   selectedItem.append('img');

//   // Item Category

//   var category = createElement('div');
//   category.innerText = item.children[2].innerText;
//   selectedItem.append(category);

//   //  Item Price

//   var price = createElement('div');
//   price.innerText = item.children[3].innerText;
//   selectedItem.append(price);

//   // ---------- DELETE From Cart ----------- //

//   // Delete Btn

//   var deleteItem = document.createElement('button');
//   deleteItem.innerText = "DELETE";
//   deleteItem.setAttribute('onclick', 'del('+addItemId+')');
//   selectedItem.append(deleteItem);
// };

// export function del(item) {
//   document.getElementById(item).remove();
// };