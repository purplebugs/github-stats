import { html, css, LitElement } from "https://unpkg.com/lit-element?module";

export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      percent: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Somebody";
  }

  render() {
    return html`<span>
      <img
        src="./images/rollerskate-white-transparent-background.png"
        width=${this.percent}
        height=${this.percent}
        align="middle"
      />
      ${this.name}
    </span>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
