import { html, css, LitElement } from "https://unpkg.com/lit-element?module";

export class RatingCounter extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      rating: { type: String },
      counter: { type: String },
    };
  }

  constructor() {
    super();
    this.rating = "";
    this.counter = 0;
  }

  render() {
    if (this.counter === "1") {
      this.rating = "🎷";
    } else if (this.counter === "2") {
      this.rating = "🎷 🎷";
    } else if (this.counter === "3") {
      this.rating = "🎷 🎷 🎷 ";
    } else {
      this.rating = "No rating";
    }
    return html`<span> ${this.rating} </span>`;
  }
}

customElements.define("rating-counter", RatingCounter);
