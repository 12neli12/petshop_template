export function getFooter(){
  return `
      <footer class="bg-white text-black py-5">
      <div class="container">
          <div class="row g-4">
              <!-- Useful Links -->
              <div class="col-md-4">
                  <h5 class="fw-bold mb-4">Useful Info</h5>
                  <ul class="list-unstyled">
                      <li class="mb-3"><a href="#" class="text-black text-decoration-none">Upcoming Discounts</a></li>
                      <li class="mb-3"><a href="#" class="text-black text-decoration-none">Return Policy</a></li>
                      <li class="mb-3"><a href="#" class="text-black text-decoration-none">Privacy Policy</a></li>
                      <li class="mb-3"><a href="#" class="text-black text-decoration-none">Terms of Use</a></li>
                  </ul>
              </div>

              <div class="col-md-4">
                  <h5 class="fw-bold mb-4">About Us</h5>
                  <p class="text-muted">
                      We are a small company passionate about animal welfare. 
                      Our products are 100% organic and safe for your pets.<br><br>
                      Thank you for choosing us!
                  </p>
              </div>

              <div class="col-md-4">
                  <h5 class="fw-bold mb-4">Connect With Us</h5>
                  <div class="d-flex gap-3 mb-4">
                      <a href="https://www.instagram.com" class="text-black fs-4" target="_blank">
                          <i class="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.x.com" class="text-black fs-4" target="_blank">
                          <i class="bi bi-twitter-x"></i>
                      </a>
                      <a href="https://www.youtube.com" class="text-black fs-4" target="_blank">
                          <i class="bi bi-youtube"></i>
                      </a>
                  </div>

                  <h5 class="fw-bold mb-3">Newsletter</h5>
                  <form class="input-group">
                      <input type="email" class="form-control rounded-0" placeholder="Enter your email">
                      <button class="btn btn-dark rounded-0" type="submit">
                          <i class="bi bi-arrow-right"></i>
                      </button>
                  </form>
              </div>
          </div>

          <hr class="my-5">

          <div class="text-center text-muted">
              <p class="mb-0">© ${currentYear} MERO®. All rights reserved</p>
          </div>
      </div>
  </footer>
`
}

const currentYear = new Date().getFullYear()