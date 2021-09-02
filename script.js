function getItems() {
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                make: doc.data().make,
                rating: doc.data().rating,
                price: doc.data().price
            })
        });
        generateItems(items)
    });
}

function addToCart(item){
    let cartItem = db.collection("cart-items").doc(item.id);
    cartItem.get()
    .then(function(doc){
        if(doc.exists){
            cartItem.update({
                quantity: doc.data().quantity + 1
            })
        } else {
            cartItem.set({
                image: item.image,
                make: item.make,
                name: item.name,
                price: item.price,
                rating: item.rating,
                quantity: 1
            })
        }
    })
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("main-product");
        doc.innerHTML = 
     `
        <div class="product-image">
            <img src="${item.image}" alt="">
        </div>
        <div class="product-name">
            ${item.name}
        </div>
        <div class="product-make">
            ${item.make}
        </div>
        <div class="product-rating text-yellow-500">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>${item.rating}
        </div>
        <div class="product-price text-base">
            <span>Price:</span>
            <span class="price text-pink-400 font-bold"> ${item.price}</span>
        </div>
        
    
     `

        let addToCartEl = document.createElement("div");
        addToCartEl.classList.add("h-8", "w-28", "bg-yellow-500", "ml-8", "flex", "justify-center", "items-center", "text-white", "rounded", "text-md", "cursor-pointer", "hover:bg-yellow-600");
        addToCartEl.innertext = "Add to cart";
        addToCartEl.addEventListener("click", function(){
            addToCart(item)
        })
        doc.appendChild(addToCartEl);
        document.querySelector(".main-products").appendChild(doc);
    })
    
}

getItems();