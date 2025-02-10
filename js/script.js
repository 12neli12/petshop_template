import { getNavbar } from './navbar.js'
import { getFooter } from './footer.js'
import { getLanding } from './landing.js'
import getShop, { initShop } from './shop.js';

document.addEventListener("DOMContentLoaded", () => {
  const footerElement = document.getElementById("footer")
  footerElement.innerHTML = getFooter()
})

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("header")
  headerElement.innerHTML = getNavbar()
})

document.addEventListener("DOMContentLoaded", () => {
  const landingElement = document.getElementById("landing")
  landingElement.innerHTML = getLanding()
})

const shopElement = document.getElementById("shop")
shopElement.innerHTML = getShop();
initShop();
