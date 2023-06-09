import productsFactory from "./factories/productsFactory.js"
import headerFactory from "./factories/HeaderFactory.js"
import cartStorage from "./models/cartStorage.js"

const cartStore = new cartStorage()

productsFactory.initialize(cartStore)
headerFactory.initialize(cartStore)
