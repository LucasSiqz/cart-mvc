export default class ProductsController {
  #view
  #service
  #storage

  constructor({ view, service, storage }) {
    this.#view = view
    this.#service = service
    this.#storage = storage
    this.addProducts()
  }

  addProducts() {
    const products = this.#service.loadProducts()

    this.#view.addProducts(products, this.#storage.cartStore)
  }

  static initialize(deps) {
    return new ProductsController(deps)
  }
}