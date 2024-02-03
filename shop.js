//shop page
const product = [
    {
        id: 0,
        image: 'image/image-1.jpg',
        title: 'T-shirt Adidas',
        price: 120,
    },
    {
        id: 1,
        image: 'image/image-2.jpg',
        title: 'Black T-shirt Adidas',
        price: 60,
    },
    {
        id: 2,
        image: 'image/image-3.jpg',
        title: 'White T-shirt Adidas',
        price: 230,
    },
    {
        id: 3,
        image: 'image/image-4.jpg',
        title: 'Yellow T-shirt Adidas',
        price: 100,
    },
    {
        id: 4,
        image: 'image/image-5.jpg',
        title: 'Orange T-shirt Adidas',
        price: 230,
    },
    {
        id: 5,
        image: 'image/image-6.jpg',
        title: 'Black T-shirt Adidas',
        price: 230,
    },
    {
        id: 6,
        image: 'image/image-7.jpg',
        title: 'Black T-shirt Adidas',
        price: 230,
    },
    {
        id: 7,
        image: 'image/image-8.jpg',
        title: 'Black T-shirt Adidas',
        price: 230,
    },
    {
        id: 8,
        image: 'image/image-9.jpg',
        title: 'Black T-shirt Adidas',
        price: 230,
    },
    {
        id: 9,
        image: 'image/image-10.jpg',
        title: 'Black T-shirt Adidas',
        price: 230,
    },
    {
        id: 10,
        image: 'image/image-11.jpg',
        title: 'Gilas Pilipinas White T-shirt Nike',
        price: 230,
    },
    {
        id: 11,
        image: 'image/image-12.jpg',
        title: 'Black short Nike',
        price: 230,
    },
    {
        id: 12,
        image: 'image/image-13.jpg',
        title: 'GSW NBA short Nike',
        price: 230,
    },
    {
        id: 13,
        image: 'image/image-14.jpg',
        title: 'Pajamas and Jacket Nike',
        price: 230,
    },
    {
        id: 14,
        image: 'image/image-15.jpg',
        title: 'Jacket Puma',
        price: 230,
    },
    {
        id: 15,
        image: 'image/image-16.jpg',
        title: 'Puma T-shirt',
        price: 230,
    },
    {
        id: 16,
        image: 'image/image-17.jpg',
        title: 'Cap Adida',
        price: 230,
    },
    {
        id: 17,
        image: 'image/image-18.jpg',
        title: 'Nike Kyrie 7 shoes',
        price: 230,
    },
    {
        id: 18,
        image: 'image/image-19.jpg',
        title: 'Kyrie 7 Shoes',
        price: 230,
    },
];

// Search
const categories = [...new Set(product.map((item) => item))];
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = product.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        );
    });
    displayItem(filteredData);
});

function displayItem(items) {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart("${title}")'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('');
}

// Cart
var cart = [];

function addtocart(title) {
    const selectedItem = product.find(item => item.title === title);
    if (selectedItem) {
        cart.push({ ...selectedItem });
        displaycart();
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

// Initial display
displayItem(categories);