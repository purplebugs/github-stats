import { html, css, LitElement } from "https://unpkg.com/lit-element?module";

export class RatingCounter extends LitElement {
  static get properties() {
    return {
      rating: { type: String },
      counter: { type: String },
    };
  }

  constructor() {
    super();
    this.rating = "⭐️";
    this.counter = 0;
  }

  render() {
    let output = "";

    let i = 0;
    for (i = 0; i < this.counter; i++) {
      output += `${this.rating}`;
    }

    return html`<span> ${output} </span>`;
  }
}

customElements.define("rating-counter", RatingCounter);
