import ProductsController from "./../controllers/productsController.js"
import ProductsView from "./../views/productsView.js"
import ProductsService from "./../services/productsService.js"

const factory = {
  initialize(cartStore) {
    return ProductsController.initialize({
      view: new ProductsView(),
      service: new ProductsService(),
      storage: { cartStore: cartStore }
    })
  }
}

export default factory