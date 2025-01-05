document.addEventListener("DOMContentLoaded", () => {
  const displayAllProduct = document.getElementById("all-product");
  const brandFilters = document.querySelectorAll(".brand-filter a"); 
  const colorFilters = document.querySelectorAll(".color-filter");
  const priceFilters = document.querySelectorAll(".price-filter");
  const saleFilter = document.getElementById("sale-filter");
  const priceValue = document.getElementById("price-value");
  const proLength = document.getElementById("product-lenght");


  const pageType = document.body.dataset.page;


  let allProducts = [];

  function DisplayProduct(container, products) {
    container.innerHTML = "";
    products.forEach((product) => {
      const { id, gallery, names, rate, price, brand } = product;
      container.innerHTML += `
        <div class="col p-2">
          <div class="cards p-3 bg-white rounded product-cart-hover d-flex flex-column justify-content-between" data-id="${id}" style="cursor: pointer;">
            <div class="d-flex justify-content-center">
              <img class="w-75 object-fit-cover" src="${gallery[0]}" alt="${names}" />
            </div>
            <div class="pt-4">
              <p class="mb-1 text-capitalize" style="font-size: 13px;">${brand}</p>
              <p class="fw-medium mb-1 fs-6">${names}</p>
              <div class="mb-1">
                <img class="w-25" src=".${rate}" alt="rating" />
              </div>
              <p class="m-0" style="font-size: 14px;">$${(price / 100).toFixed(2)}</p>
            </div>
          </div>
        </div>`;
    });
    const productCards = document.querySelectorAll(".cards");
    productCards.forEach((card) => {
      card.addEventListener("click", () => {
        const productId = card.dataset.id;
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
        );
      }
     
      proLength.innerText = allProducts.length;
      DisplayProduct(displayAllProduct, allProducts);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });


  function applyFilters() {
    let filteredProducts = allProducts;


    const selectedBrand = document.querySelector(".brand-filter a.active")?.dataset?.brand;
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }


    const selectedColor = [...colorFilters].find((btn) =>
      btn.classList.contains("active")
    )?.dataset?.color;
    if (selectedColor) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === selectedColor
      );
    }


    const maxPrice = [...priceFilters]
      .map((filter) => parseFloat(filter.value))
      .filter((price) => !isNaN(price))
      .reduce((a, b) => Math.max(a, b), 0); 
      console.log(maxPrice)
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }


    if (saleFilter.checked) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }


    DisplayProduct(displayAllProduct, filteredProducts);
    proLength.innerText = filteredProducts.length;
  }


  brandFilters.forEach((brandLink) => {
    brandLink.addEventListener("click", (e) => {
      e.preventDefault();
      brandFilters.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
      applyFilters();
    });
  });

  colorFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      colorFilters.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  priceFilters.forEach((priceFilter) => {
    priceFilter.addEventListener("input", () => {
      priceValue.innerHTML = `${(priceFilter.value / 100).toFixed(2)}`; // Update price display
      applyFilters(); 
    });
  });

  saleFilter.addEventListener("change", applyFilters);
});
