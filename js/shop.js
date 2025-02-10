const products = {
  "dog": [
      {
          "id": 1,
          "name": "Premium Dog Food",
          "description": "High-protein, grain-free formula for adult dogs",
          "image": "dog_food.jpeg",
          "price": 49.99
      },
      {
          "id": 2,
          "name": "Durable Chew Toy",
          "description": "Tough rubber toy designed for heavy chewers",
          "image": "dog_toy.jpg",
          "price": 14.99
      },
      {
          "id": 3,
          "name": "Orthopedic Dog Bed",
          "description": "Memory foam bed for joint support and comfort",
          "image": "dog_bed.jpeg",
          "price": 79.99
      }
  ],
  "cat": [
      {
          "id": 4,
          "name": "Organic Cat Food",
          "description": "Grain-free recipe with real chicken",
          "image": "cat_food.jpeg",
          "price": 39.99
      },
      {
          "id": 5,
          "name": "Cat Tree",
          "description": "Multi-level cat tree with scratching posts",
          "image": "cat_tree.jpeg",
          "price": 89.99
      },
      {
          "id": 6,
          "name": "Interactive Laser Toy",
          "description": "Automatic laser toy for engaging playtime",
          "image": "cat_laser.jpeg",
          "price": 24.99
      }
  ]
};

 // Generates HTML markup for each product card
function createProductCard(product) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="assets/images/${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h5 mb-0">$${product.price}</span>
                        <button class="btn btn-outline-dark btn-custom rounded-0 add-to-cart" 
                                data-id="${product.id}">
                            <i class="bi bi-cart-plus me-2"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generates the shop page structure
export default function getShop() {
  return `
    <div class="container py-5" id="products">
      <h2 class="display-4 fw-bold mb-5 text-center">Products</h2>      
      <section class="mb-5">
        <h3 class="fw-bold mb-4">Dog Products</h3>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="dog-products"></div>
      </section>
      <section>
        <h3 class="fw-bold mb-4">Cat Products</h3>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="cat-products"></div>
      </section>
    </div>
  `;
}

// Initializes the shop component  
export function initShop() {
  const renderProducts = (containerId, category) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = products[category]
        .map(product => createProductCard(product))
        .join('');
    }
  };

  // Render both product categories 
  renderProducts('dog-products', 'dog');
  renderProducts('cat-products', 'cat');
}