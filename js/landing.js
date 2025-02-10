export function getLanding(){
  return `
    <div class="container py-5">
        <div class="row align-items-center">
            <!-- Image Column -->
            <div class="col-md-6 mb-4 mb-md-0">
                <img src="assets/images/dog_cat.jpeg" 
                    alt="Pet Shop" 
                    class="img-fluid rounded-3">
            </div>

            <!-- Text Content Column -->
            <div class="col-md-6">
                <div class="ps-md-5">
                    <h2 class="display-4 fw-bold mb-3">Petshop</h2>
                    <p class="lead mb-4">Where Every Tail Finds Its Happy Ending</p>
                    <button class="btn btn-outline-dark rounded-pill px-4 py-2 btn-custom">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  `
}