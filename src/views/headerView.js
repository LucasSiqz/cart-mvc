export default class headerView {
  #cartQuantity = document.getElementById('cart-quantity')

  constructor() {
    window.addEventListener('updateCart', ({ detail }) => {
      const quantity = detail.length
      this.updateCartQuantity(quantity)
    })
  }

  updateCartQuantity(quantity) {
    this.#cartQuantity.innerHTML = `quantidade: ${quantity}`
  }
}