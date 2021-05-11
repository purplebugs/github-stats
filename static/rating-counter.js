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
    this.rating = "⭐️";
    this.counter = 0;
  }

  render() {
    let output = this.rating;

    if (this.counter === "1") {
      output = `${this.rating}`;
    } else if (this.counter === "2") {
      output = `${this.rating} ${this.rating}`;
    } else if (this.counter === "3") {
      output = `${this.rating} ${this.rating} ${this.rating}`;
    } else {
      output = "No rating";
    }
    return html`<span> ${output} </span>`;
  }
}

customElements.define("rating-counter", RatingCounter);
