const displayAllProduct = document.getElementById("all-product");
const brandFilter = document.getElementById("brand-filter");
const colorFilters = document.querySelectorAll(".color-filter");
const priceFilter = document.getElementById("price-filter");
const saleFilter = document.getElementById("sale-filter");
const priceValue = document.getElementById("price-value");
// Store the full product list
let allProducts = [];

function DisplayProduct(container, products) {
    container.innerHTML = ""; // Clear container
    products.forEach((product) => {
      const { id, image, names, rate, price, brand } = product;
      container.innerHTML += `
              <div class="col p-2">
                <div class="p-3 h-100 bg-white rounded product-cart-hover d-flex flex-column justify-content-between">
                  <div class="d-flex justify-content-center">
                    <img class="w-75 object-fit-cover" src="${image}" alt="${names}" />
                  </div>
                  <div class="pt-4">
                    <p class="mb-1 text-capitalize" style="font-size: 13px;">${brand}</p>
                    <p class="fw-medium mb-1 fs-6">${names}</p>
                    <div class="mb-1">
                      <img class="w-25" src="${rate}" alt="rating" />
                    </div>
                    <p class="m-0" style="font-size: 14px;">$${(
                      price / 100
                    ).toFixed(2)}</p>
                  </div>
                </div>
              </div>`;
    });
  }
  // Fetch and display products
fetch("../Data/Datas.json")
.then((response) => response.json())
.then((data) => {
  allProducts = data.Product; // Store all products
  DisplayProduct(displayAllProduct, allProducts); // Display all products initially
})
.catch((error) => {
  console.error("Error fetching data:", error);
});
// Function to filter products
function applyFilters() {
    let filteredProducts = allProducts;
  console.log("Filters applied",filteredProducts);
  // Filter by brand
  const selectedBrand = brandFilter.querySelector(".active")?.dataset?.brand;
  console.log("Selected Brand:", selectedBrand);
  if (selectedBrand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === selectedBrand
    );
  }

  // Filter by color
  const selectedColor = [...colorFilters].find((btn) =>
    btn.classList.contains("active")
  )?.dataset?.color;
  console.log("Selected Color:", selectedColor);
  if (selectedColor) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === selectedColor
    );
  }

  // Filter by price
  const maxPrice = parseFloat(priceFilter.value);
  console.log("Selected Color:", maxPrice);
  
   
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= maxPrice
  );

  // Filter by on sale
  if (saleFilter.checked) {
    filteredProducts = filteredProducts.filter((product) => product.onSale);
  }
  console.log("Filtered Products:", filteredProducts);
  DisplayProduct(displayAllProduct, filteredProducts);
}

// Event Listeners for Filters
brandFilter.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    brandFilter.querySelectorAll("a").forEach((link) =>
      link.classList.remove("active")
    );
    e.target.classList.add("active");
    applyFilters();
  }
});

colorFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorFilters.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
});

priceFilter.addEventListener("input", () => {
    priceValue.innerHTML = `${(priceFilter.value / 100).toFixed(2)}`; // Format price value
    applyFilters(); 
  });
saleFilter.addEventListener("change", applyFilters);
