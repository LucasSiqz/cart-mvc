const headerComponent = document.createElement('template')

headerComponent.innerHTML = `
  <style>
    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin: 25px auto;
      max-width: 1200px;
      padding: 0 16px;
    } 
    .header__cart {
      display: flex;
      flex-direction: column;
    }
  </style>
  <header class="header">
    <h1 class="header__title">CartJS</h1>
    <div class="header__cart">
      <strong class="header__cart-title">Meu carrinho</strong>
      <slot id="cart-quantity" name="cart-quantity"> 0 </slot>
    </div>
</header>
`

class Header extends HTMLElement {
  connectedCallback() {
    const shadowDom = this.attachShadow({ mode: 'closed' })

    shadowDom.appendChild(headerComponent.content)
  }
}

customElements.define('header-component', Header)
