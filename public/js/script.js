
    function goBack() {
        window.history.back();
      }

    
    //Navbar
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
 
    function toggleMenu() {
         navbarBurger.classList.toggle('is-active');
         navbarMenu.classList.toggle('is-active');
    }
     
    navbarBurger.addEventListener('click', toggleMenu) 

// กรองสินค้าตาม price range 


var goBtn = document.getElementById("goBtn");
var price = document.getElementById("price-Rangeq");


goBtn.onclick = function() {
  window.location = price.value;
}



    //Category
    const categoryButtons = document.querySelectorAll('.category-button');
    const productColumns = document.querySelectorAll('.product-column');

    function categoryProducts(event) {
        //เปลี่ยนสีปุ่ม
        const selectedButton = event.target;
        
        categoryButtons.forEach((button) => {
            button.classList.remove('is-dark');
        });
        selectedButton.classList.add('is-dark')
        //ดึงค่า category
        const selectedCategory = selectedButton.dataset.category;
        console.log(selectedCategory)
        //แสดงสินค้าตาม category
        productColumns.forEach(column => {

            const productCategory = column.dataset.category;
            if (productCategory === selectedCategory || selectedCategory === 'all') {
                column.classList.remove('is-hidden');
            }
            else {
                column.classList.add('is-hidden');
            }
        })
    }

    categoryButtons.forEach((button) => {
        button.addEventListener('click',categoryProducts);
    });

    // Search Name
const search = () => {
  const searchBox = document.getElementById('search-item').value.toUpperCase();
  const storeItems = document.getElementById('product-list')
  const product = document.querySelectorAll(".product-column")
  const productName = document.getElementsByTagName("h5")

  for (var i = 0; i < productName.length; i++) {
    let match = product[i].getElementsByTagName("h5")[0];

    if (match) {
     let textValue = match.textContent || match.innerHTML

     if(textValue.toUpperCase().indexOf(searchBox) > -1){
       product[i].style.display = "";
     }else {
      product[i].style.display = "none";
     }
    }
  }

}

//Quantity Product


    function increaseCount(a, b) {
        var input = b.previousElementSibling;
        var value = parseInt(input.value, 10); 
        value = isNaN(value)? 0 : value;
        value ++;
        input.value = value;
      }
      function decreaseCount(a, b) {
        var input = b.nextElementSibling;
        var value = parseInt(input.value, 10); 
        if (value > 1) {
          value = isNaN(value)? 0 : value;
          value --;
          input.value = value;
        }
      }



/* Shopping Carts */

const cartCounter = document.querySelector('.cart_counter');
const cartDOM = document.querySelector('.cart-items');

const addToCartBtn = document.querySelectorAll('.btn_add_to_cart')

cartCounter.addEventListener('click', () => {
  cartDOM.classList.toggle('active');
});

addToCartBtn.forEach( btn => {

  btn.addEventListener('click', () => {

    let parentElement = btn.parentElement;  
    const priceProduct= {
      id : parentElement.querySelector("#product-id").value,
      name : parentElement.querySelector(".product_name").innerText,
      image : parentElement.querySelector("#image").getAttribute("src"),
      price : parentElement.querySelector(".product-price").innerText.replace("$",""),
      quantity : 1
  
    }
    console.log(priceProduct)
  })
  })