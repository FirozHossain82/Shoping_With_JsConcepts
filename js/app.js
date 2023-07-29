// const cart = [];

/* function displayProduct()
{
    let totalPrice = 0;
    const totalProducts = document.getElementById("total-products");
    totalProducts.innerText = cart.length;

    const cartContainer = document.getElementById("cart-products");
    cartContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
        totalPrice += cart[i].pdPrice; 


        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${cart[i].pdName}</td>
        <td>${cart[i].pdPrice}</td>
        `;
        cartContainer.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `;

    cartContainer.appendChild(tr);
}
 */
const cartArray = [];

function display(cartProduct) {
  // console.log(cartProduct);
 let totalPrice = 0;
  const tableBody = document.getElementById("cart-products");
  tableBody.innerHTML = " ";

  for (let i = 0; i < cartProduct.length; i++) {
    const name = cartArray[i].productName;
    const price = cartArray[i].productPrice;

    totalPrice = totalPrice + price;


    const tr = document.createElement("tr");
    // ${name}
    tr.innerHTML = `
       <th>${i + 1}</th>
       <td>${name}</td>
       <td>${price}</td>
        `;
    tableBody.appendChild(tr);
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `;
  tableBody.appendChild(tr);
}

function addToCart(element) {
  const productName = element.parentNode.parentNode.children[0].innerText;
  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  const productObj = {
    productName: productName,
    productPrice: parseInt(productPrice),
  };
  cartArray.push(productObj);
  document.getElementById("total-products").innerText = cartArray.length;
  // console.log(cart)
  display(cartArray);
}
