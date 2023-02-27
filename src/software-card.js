import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png";

export class SoftwareCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      fname: { type: String},
      top: { type: String},
      softwareDetails: { type: String},
    }
  }

  static get styles() {
    return css`
      .wrapper {
        border-style: solid;
        border-color: #355C7D;
        background-color: #A5D8DD;
        padding: 8px;
        border-width: 2px;
        border-radius: 15px;
        width: 400px;
        margin: 8px;
        border: 2px solid black;
        display: inline-flex;
        align-items: center;
      }

.image {
  width: 100px;
}

.newBackground {
  background-color: #90EE90;
}

.header {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}

.subheader {
  text-align: center;
  font-size: 12;
}

.header h3:hover {
  font-style: italic;
  font-size: 1.1em;
}

.header h3 {
  transition: .3s ease-in-out all;
  margin: 16px;
  font-style: normal;
}

.buttons button:focus,
.buttons button:hover {
  background-color: rgba(200,0,50,.5);
}

.buttons button:active {
  background-color: rgba(50,0,200,.5);
}

.buttons {
  display: block;
}

button {
  padding: 12px;
  font-size: 32px;
}

details {
  margin-left: 24px;
  padding: 10px;
}
.details summary {
  font-size: 20px;
  font-weight: bold;
}


@media only screen and (max-width: 1200px){
  .wrapper {
    background-color: pink;
  }
}
@media only screen and (max-width: 600px){
  .wrapper {
    background-color: purple;
  }
}
@media only screen and (max-width: 425px){
  .wrapper {
    font-weight: normal;
  }
  .wrapper .header h3 {
    font-size: 12px;
  }
  .wrapper .header h4 {
    font-size: 10px !important;
  }
  details {
    display: none;
  }
}
    `;
  }

  constructor() {
    super();
    this.name = "Apple";
    this.subheader = "a company";
    this.softwareDetails = "Details";
    this.top = "Apple";
    this.bottom = "Apple"
  }

  render() {
    return html`
    <div class="wrapper">
      <div class="container">
        <div class="header">
          <h3>${this.name}</h3>
        </div> 
        <div class="subheader">
          <h4>${this.subheader}</h4>
        </div>
        <meme-maker
          image-url="${logo}"
          top-text="${this.top}">
          bottom-text="${this.bottom}">
        </meme-maker>
        <details class="details">
          <summary>${this.softwareDetails}</summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </div>
    </div>`;
  }
  
}

customElements.define('software-card', SoftwareCard);