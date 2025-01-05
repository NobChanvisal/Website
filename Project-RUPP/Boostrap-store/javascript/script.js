document.addEventListener("DOMContentLoaded", () => {
  const displayAllProduct = document.getElementById("all-product");
  const brandFilter = document.getElementById("brand-filter");
  const colorFilters = document.querySelectorAll(".color-filter");
  const priceFilter = document.getElementById("price-filter");
  const saleFilter = document.getElementById("sale-filter");
  const priceValue = document.getElementById("price-value");
  const proLength = document.getElementById("product-lenght");

  // Determine page type
  const pageType = document.body.dataset.page;
  // Store the full product list
  let allProducts = [];

  // Display products
  function DisplayProduct(container, products) {
    container.innerHTML = "";
    products.forEach((product) => {
      const { id, gallery, names, rate, price, brand } = product;
      container.innerHTML += `
        <div class="col p-2">
          <div class="cards p-3 bg-white rounded product-cart-hover d-flex flex-column justify-content-between" data-id="${id}"style="cursor: pointer;">
            <div class="d-flex justify-content-center">
              <img class="w-75 object-fit-cover" src="${gallery[0]}" alt="${names}" />
            </div>
            <div class="pt-4">
              <p class="mb-1 text-capitalize" style="font-size: 13px;">${brand}</p>
              <p class="fw-medium mb-1 fs-6">${names}</p>
              <div class="mb-1">
                <img class="w-25" src="${rate}" alt="rating" />
              </div>
              <p class="m-0" style="font-size: 14px;">$${(price/100).toFixed(
                2
              )}</p>
            </div>
          </div>
        </div>`;
    });
    const productCards = document.querySelectorAll(".cards");
    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        const productId = card.dataset.id;
        console.log(productId);
        handleProductClick(productId);
      });
    });
  }
  function handleProductClick(productId) {
    location.href = `ProductPage.html?productId=${productId}`;
  }
  
  // Fetch and display products
  fetch("../Data/Datas.json")
    .then((response) => response.json())
    .then((data) => {
      if (!pageType) {
        allProducts = data.Product;
      } else {
        allProducts = data.Product.filter(
          (product) =>
            product.category === pageType || product.subCategory === pageType
        ); // Filter products by page type
      }
      // Display products in respective sections
      proLength.innerText = allProducts.length;
      DisplayProduct(displayAllProduct, allProducts);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  // Function to filter products
  function applyFilters() {
    let filteredProducts = allProducts;

    // Filter by brand
    const selectedBrand = brandFilter.querySelector(".active")?.dataset?.brand;
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    // Filter by color
    const selectedColor = [...colorFilters].find((btn) =>
      btn.classList.contains("active")
    )?.dataset?.color;
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === selectedColor
      );
    }

    // Filter by price
    const maxPrice = parseFloat(priceFilter.value);
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maxPrice
    );

    // Filter by on sale
    if (saleFilter.checked) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }

    // Update product display
    DisplayProduct(displayAllProduct, filteredProducts);
    proLength.innerText = filteredProducts.length;
  }

  // Event Listeners for Filters
  brandFilter.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      brandFilter
        .querySelectorAll("a")
        .forEach((link) => link.classList.remove("active"));
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
});
