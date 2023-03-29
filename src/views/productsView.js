export default class ProductsView {
  #productList = document.getElementById('products-list')

  addProducts(products, cartStorage) {
    let gridItems = ""
    
    products.forEach((item) => {
      const gridItem = `
        <li class="products__card">
          <img class="products__card-img" src="${item.image}"/>
          <strong class="products__card-title">${item.title}</strong>
          <span class="products__card-price">${item.price}</span>
          <button class="products__card-btn" type="button" id="add-${item.id}">Adicionar ao carrinho</button>
          <button class="products__card-btn" type="button" id="remove-${item.id}">Remover do carrinho</button>
        </li>
      `
      gridItems = gridItems + gridItem;
    })

    this.#productList.innerHTML = gridItems

    this.addEvents(products, cartStorage)
  }

  addEvents(products, cartStorage) {
    products.forEach((item) => {
      const addButton = document.getElementById(`add-${item.id}`)
      const deleteButton = document.getElementById(`remove-${item.id}`)

      addButton.addEventListener("click", () => cartStorage.addToCart(item))
      deleteButton.addEventListener("click", () => cartStorage.removeFromCart(item))
    })
  }
}