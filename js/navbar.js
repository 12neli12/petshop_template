export function getNavbar() {
  return `
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand fw-bold" href="#">
                <i class="bi bi-diamond-fill me-2"></i>SAM'S SHOP
            </a>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation Items -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto gap-5"> <!-- Center-aligned with spacing -->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#shop">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>

                <!-- Right-aligned Items -->
                <div class="d-flex align-items-center gap-4">
                  <div class="position-relative">
                      <input type="search" 
                             class="form-control border border-dark rounded-pill ps-4 pe-5 bg-transparent" 
                             placeholder="Search" 
                             style="height: 40px; min-width: 200px;">
                      <i class="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-dark"></i>
                  </div>
                  <a href="#shop" class="nav-link position-relative">
                      <i class="bi bi-cart3 text-dark"></i>
                      <span class="position-absolute translate-middle badge bg-dark text-white cart-badge">
                          3
                      </span>
                  </a>
              </div>
            </div>
        </div>
    </nav>
  `;
}