
document.addEventListener("DOMContentLoaded", () => {
  //const productContainer = document.getElementById("product-container");

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  console.log(productId);

  const storedCartsItem = JSON.parse(localStorage.getItem("carts")) || [];
  let carts = [...storedCartsItem];
  fetch("../Data/Datas.json")
    .then((response) => response.json())
    .then((data) => {
      const product = data.Product.find((item) => item.id == productId);

      console.log(productId);

      if (!product) {
        productContainer.innerHTML =
          "<p>Product not found. Please go back and select a product.</p>";
        return;
      }

      // Display product details
      const { names, gallery, rate, price, color } = product;
      document.getElementById("product-container").innerHTML = `
          <div class="container py-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="row mb-2">
                    <div class="col-2 px-0 ">
                      <div class="d-flex flex-column align-items-center" id="productGallery">
                        <!-- Dynamically Render Thumbnails -->
                        ${gallery
                          .map(
                            (img, index) => `
                            <img
                              src="${img}"
                              alt="Thumbnail ${index + 1}"
                              style="cursor: pointer"
                              class="img-thumbnail w-100 h-75 object-fit-contain mb-2"
                              onclick="document.getElementById('mainProductImage').src='${img}'"
                            />`
                          )
                          .join("")}
                      </div>
                    </div>

                    <!-- Main Product Image -->
                    <div class="col-10">
                      <img
                        src="${gallery[0]}"
                        alt="${names}"
                        class="img-fluid border w-100"
                        id="mainProductImage"
                      />
                    </div>
                  </div>

                </div>
                <div class="col-lg-6">
                  <h1 class="h4 text-capitalize">${names}</h1>
                  <div class="d-flex align-items-center">
                    <img src=".${rate}" alt="Rating" class="me-2"style="width: 90px;" />
                    <a href="#" class="text-decoration-none">(5 reviews)</a>
                  </div>
                  <p class="mt-1 fs-5">$${(price / 100).toFixed(2)}</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <form>
                    <div class="mb-3 d-flex align-items-center">
                      <p class=" m-0">Color -</p>
                      <button
                      class="ms-3 p-2 border-1"
                      style="background-color: ${color}"
                      ></button>
                    </div>
                    <div class="mb-3 d-flex flex-column">
                      <label class= "mb-1">Quantity</label>
                      <input
                        type="number"
                        class="form-control text-center ps-3"
                        style="width:70px;"
                        value="1"
                        min="1"
                        disabled
                      />
                    </div>
                    <button id="add-to-cart-btn" type="button" class="btn btn-dark w-50">Add to cart</button>
                  </form>
                </div>
              </div>

              <!-- Tabs for Description and Reviews -->
              <div class="mt-5">
                <ul class="nav nav-tabs" id="productTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#description"
                      type="button"
                      role="tab"
                    >
                      Description
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews"
                      type="button"
                      role="tab"
                    >
                      Reviews (5)
                    </button>
                  </li>
                </ul>
                <div class="tab-content p-3" id="productTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      It has survived not only five centuries, but also the leap into electronic typesetting, 
                      remaining essentially unchanged.
                    </p>
                    <ul>
                      <li>Exclusively handmade</li>
                      <li>Antique gold charms</li>
                      <li>Semi-precious round smooth gemstone</li>
                      <li>8mm beads</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="reviews" role="tabpanel">
                    <section class="product-reviews container my-5">
                      <!-- Average Rating and Review Form -->
                      <div class="row">
                        <!-- Average Rating -->
                        <div class="col-md-6">
                          <div class="average-rating p-4 border rounded">
                            <h5>Average Rating</h5>
                            <div class="rating-score d-flex align-items-center mb-3">
                              <span class="display-4 fw-bold me-2">4.5</span>
                              <div class="stars">
                                ★★★★☆
                              </div>
                            </div>
                            <ul class="rating-distribution list-unstyled">
                              <li class="d-flex align-items-center">
                                <span>5</span>
                                <div class="progress flex-grow-1 mx-2">
                                  <div class="progress-bar bg-success" style="width: 90%;"></div>
                                </div>
                                <span>90%</span>
                              </li>
                              <li class="d-flex align-items-center">
                                <span>4</span>
                                <div class="progress flex-grow-1 mx-2">
                                  <div class="progress-bar bg-success" style="width: 60%;"></div>
                                </div>
                                <span>60%</span>
                              </li>
                              <li class="d-flex align-items-center">
                                <span>3</span>
                                <div class="progress flex-grow-1 mx-2">
                                  <div class="progress-bar bg-warning" style="width: 40%;"></div>
                                </div>
                                <span>40%</span>
                              </li>
                              <li class="d-flex align-items-center">
                                <span>2</span>
                                <div class="progress flex-grow-1 mx-2">
                                  <div class="progress-bar bg-warning" style="width: 30%;"></div>
                                </div>
                                <span>30%</span>
                              </li>
                              <li class="d-flex align-items-center">
                                <span>1</span>
                                <div class="progress flex-grow-1 mx-2">
                                  <div class="progress-bar bg-danger" style="width: 0%;"></div>
                                </div>
                                <span>0%</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                    
                        <!-- Submit Review Form -->
                        <div class="col-md-6">
                          <div class="submit-review p-4 border rounded">
                            <h5 class=" mb-4">Submit Your Review</h5>
                            <div class="mb-3">
                              <label class=" m-0">Add Your Rating:</label>
                              <div class="star-rating">
                                <span class="star" data-value="1">★</span>
                                <span class="star" data-value="2">★</span>
                                <span class="star" data-value="3">★</span>
                                <span class="star" data-value="4">★</span>
                                <span class="star" data-value="5">★</span>
                              </div>            
                            </div>
                            <form>
                              <div class="mb-3">
                                <input type="text" id="txt-name" class="form-control" placeholder="Name" required />
                              </div>
                              <div class="mb-3">
                                <input type="email" id="txt-email" class="form-control" placeholder="Email" required />
                              </div>
                              <div class="mb-3">
                                <textarea class="form-control" id="textarea" rows="3" placeholder="Write your review..." required></textarea>
                              </div>
                              <button id="submit-btn" class="btn btn-success w-100">Submit Review</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    
                      <!-- Customer Feedbacks -->
                      <h5>Customer Feedbacks</h5>
                      <div class="reviewsList mt-5">
                        
                      </div>
                      <div class="feedback border p-3 mb-3 rounded">
                          <div class="d-flex justify-content-between">
                            <h6>Roberto Carlos</h6>
                            <small>20 days ago</small>
                          </div>
                          <div class="stars">★★★★☆</div>
                          <p>
                            I recently had the opportunity to explore this product, and it left a lasting impression.
                          </p>
                        </div>
                    </section>

                  </div>
                </div>
              </div>

          </div>

          
          `;
      const stars = document.querySelectorAll(".star");
      const reviewsList = document.querySelector(".reviewsList"); // Use querySelector instead of querySelectorAll
      const BtnSubmit = document.getElementById("submit-btn");
      let currentRating = 0;

      stars.forEach((star) => {
        // Highlight stars on hover
        star.addEventListener("mouseover", () => {
          resetStars();
          highlightStars(star);
        });

        // Select a rating
        star.addEventListener("click", () => {
          currentRating = star.dataset.value;
          lockStars(currentRating);
        });

        // Reset stars on mouse out
        star.addEventListener("mouseout", () => {
          resetStars();
          lockStars(currentRating);
        });
      });

      function highlightStars(star) {
        star.style.color = "#f5b301";
        let nextStar = star.previousElementSibling;
        while (nextStar) {
          nextStar.style.color = "#f5b301";
          nextStar = nextStar.previousElementSibling;
        }
      }

      function resetStars() {
        stars.forEach((star) => {
          star.style.color = "#ccc";
        });
      }

      function lockStars(rating) {
        stars.forEach((star) => {
          if (star.dataset.value <= rating) {
            star.style.color = "#f5b301";
          }
        });
      }
      let list = [];
      BtnSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.getElementById("txt-name").value;
        const email = document.getElementById("txt-email").value;
        const reviewText = document.getElementById("textarea").value;

        if (!name || !email || !reviewText || !currentRating) {
          alert("Please fill out all fields and select a rating.");
          return;
        }

        list.push({ name, reviewText, currentRating });

        showList();
      });

      function showList() {
        let listShow = "";
        for (let i = 0; i < list.length; i++) {
          const { name, reviewText, currentRating } = list[i];
          const reviewHtml = `
            <div class="border rounded p-3 mb-3">
              <div class="d-flex justify-content-between">
                <strong>${name}</strong>
                <span class="text-muted">Just now</span>
              </div>
              <div class="text-warning">${"★".repeat(
                currentRating
              )}${"☆".repeat(5 - currentRating)}</div>
              <p>${reviewText}</p>
            </div>
          `;
          listShow += reviewHtml;
        }
        reviewsList.innerHTML = listShow; // Display the list of reviews
      }
      const addToCartBtn = document.getElementById("add-to-cart-btn");

      addToCartBtn.addEventListener("click", () => {
        // Load carts from localStorage if it exists
        const storedCartsItem = JSON.parse(localStorage.getItem("carts")) || [];
        carts = [...storedCartsItem]; // Merge with current carts array
      
        // Check if the product already exists in the cart
        const existingProduct = carts.find((item) => item.id == product.id);
      
        if (existingProduct) {
          existingProduct.quantity += 1; // Increment quantity
        } else {
          carts.push({
            id: productId,
            name: names,
            price: price,
            color: color,
            image: gallery[0],
            quantity: 1,
          });
        }
      
        // Update localStorage
        localStorage.setItem("carts", JSON.stringify(carts));
      
      });
      
    })
    
    
});
