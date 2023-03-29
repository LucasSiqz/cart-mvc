import HeaderController from "./../controllers/HeaderController.js"
import HeaderView from "./../views/HeaderView.js"

const factory = {
  initialize(cartStore) {
    return HeaderController.initialize({
      view: new HeaderView(),
      storage: { cartStore: cartStore }
    })
  }
}

export default factory