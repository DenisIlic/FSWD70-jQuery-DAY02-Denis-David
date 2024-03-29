
    for (let i = 0; i < products.length; i++) {
        document.getElementsByClassName("img")[i].innerHTML += "<img src=" + products[i].image + ">";
    }

    for (let i = 0; i < products.length; i++) {
        document.getElementsByClassName("text")[i].innerHTML = "<h3>" + products[i].name + "</h3>" + "<p>" + products[i].price + "$</p>"
    }

    // button add to cart
    var cart = [];
    var btn = document.getElementsByClassName("button");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() { btnAdd(products[i], i) }, false);
        btn[i].addEventListener("click", function() { sum(cart) }, false);
    }

    function btnAdd(product, i) {
        //if this product already exists then add +1 to its quantity
        if (cart[i] != undefined) {
            cart[i].quantity++;
        } else {
            cart[i] = product;
        }
        rewriteCart();
    }

    //overwrites previous cart 
    function rewriteCart() {
        var minus = " class = 'minus'";
        document.getElementById("bought").innerHTML = "";
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                document.getElementById("bought").innerHTML += "<p>" + cart[j].name + "</p>" + "<p>" + cart[j].quantity + "</p>" + "<p>" + cart[j].price * cart[j].quantity + "</p>" + "<button" + minus + ">" + "- </button";
            }
        }
        //takes all minus buttons in the array and applies the remove from cart function to each one of them, if the item exists
        var k = 0;
        var minusButtons = document.getElementsByClassName("minus");
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                minusButtons[k].addEventListener("click", function() { removeFromCart(j) }, false);
                k++;
            }
        }
    }


    function removeFromCart(i) {
        if (cart[i].quantity > 1) {
            cart[i].quantity--;
        } else {
            cart[i] = undefined; // if quantity is less or equal to 0 the item does note exist
        }
        rewriteCart(); //overwrites cart
        sum(cart); // overwrites sum
    }

    function sum(currentCart) {
        var total = 0;

        for (let j = 0; j < currentCart.length; j++) {
            if (currentCart[j] != undefined) {
                total += currentCart[j].price * currentCart[j].quantity;
            }
        }
        document.getElementById("total").innerHTML = "<p>" + total.toFixed(2) + "</p>";
    }
