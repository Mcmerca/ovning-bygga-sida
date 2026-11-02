// Mock-data
const products = [
    { name: "Hörlurar", category: "Elektronik", price: 1000, icon: "🎧" },
    { name: "Hoodie", category: "Kläder", price: 500, icon: "👕" },
    { name: "Tangentbord", category: "Elektronik", price: 1500, icon: "⌨️" },
    { name: "Keps", category: "Kläder", price: 200, icon: "🧢" },
    { name: "Gamingmus", category: "Elektronik", price: 600, icon: "🖱️" }
]

const productsContainer = document.getElementById("product-container");
const categorySelect = document.getElementById("filter-category");
const sortSelect = document.getElementById("sort-price");
const discountBtn = document.getElementById("btn-discount");



