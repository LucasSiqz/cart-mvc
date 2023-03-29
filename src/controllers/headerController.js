export default class HeaderController {
  #view
  #storage

  constructor({ view, storage }) {
    this.#view = view
    this.#storage = storage
    this.updateCartQuantity()
  }

  updateCartQuantity() {
    const quantity = this.#storage.cartStore.getCartValues().length

    this.#view.updateCartQuantity(quantity)
  }

  static initialize(deps) {
    return new HeaderController(deps)
  }
}