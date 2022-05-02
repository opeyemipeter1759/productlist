const template = document.createElement("template");
template.innerHTML = `
<div class='product' >
    <p class=' product-price' >
    <span></span> :  <span></span>
    </p>
     <p class=' product-name'>
    <span></span> :  <span></span>
    </p>
     <p class=' product-id'>
    <span></span>:  <span></span>
    </p>
</div>
`;
class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
