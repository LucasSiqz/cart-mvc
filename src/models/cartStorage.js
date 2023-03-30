export default class CartStorage {
  #cartValues = JSON.parse(window.localStorage.getItem('cart')) ?? []

  updateViews() {
    const event = new CustomEvent('updateCart', { detail : this.#cartValues })
    console.log(this.#cartValues)
    return window.dispatchEvent(event)
  }

  addToCart(item) {
    const index = this.#cartValues.findIndex(it => it.id === item.id)
    if(index >=0 ) return

    this.#cartValues = [...this.#cartValues, item]
    window.localStorage.setItem('cart', JSON.stringify(this.#cartValues))
    
    this.updateViews()
  }

  removeFromCart(item) {
    this.#cartValues = this.#cartValues.filter(it => it.id !== item.id)
    window.localStorage.setItem('cart', JSON.stringify(this.#cartValues))

    this.updateViews()
  }

  getCartValues() {
    return this.#cartValues
  }
}