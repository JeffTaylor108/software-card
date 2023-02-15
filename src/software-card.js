import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class WebComponentCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
  .card {
    border-style: solid;
    border-color: #355C7D;
    background-color: #A5D8DD;
    padding: 8px;
    border-width: 2px;
    border-radius: 15px;
    width: 598px;
    margin: 8px;
  }
  .heading {
    margin: 8px 8px 8px 248px;
  }
  .image {
    height: 200px;
    width: 200px;
  }
  .detailsButton {
    text-transform: uppercase;
    font-size: 20px;
    color: #330099;
    background-color: #D0D0D0;
    margin-top: 8px;
    padding: 8px 256px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .paragraph {
    padding: 8px;
  }
  .paragraphHide {
    display: none;
  }
  
  .cardContainer {
    display: flex;
    align-items: center;
  }
  
  .noBackground {
    background-color: white;
  }
  
  .detailsButton:hover {
    background-color: #0E6655;
  }
  .detailsButton:focus {
    background-color: #0E6655;
  }
  .cloneButton {
    text-transform: uppercase;
    font-size: 20px;
    color: #330099;
    margin-top: 10px;
    padding: 10px 40px;
  }
  .cloneButton:hover {
    background-color: #0E6655;
  }
  .cloneButton:focus {
    background-color: #0E6655;
  }
  .backgroundButton {
    text-transform: uppercase;
    font-size: 20px;
    color: #330099;
    margin-top: 10px;
    padding: 10px 40px;
  }
  .headingButton {
    text-transform: uppercase;
    font-size: 20px;
    color: #330099;
    margin-top: 10px;
    padding: 10px 40px;
  }
  .deleteLastButton {
    text-transform: uppercase;
    font-size: 20px;
    color: #330099;
    margin-top: 10px;
    padding: 10px 40px;
  }
  
  @media only screen and (max-width: 800px) and (min-width: 500px) { 
    .button1 { 
      display: none; 
    } 
  }
  @media only screen and (max-width: 500px) { 
    .card { 
      transform: scale(.7);
    } 
  }
  
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <div class="cardContainer">
    <div class="card">
      <h1 class="heading"> Heading </h1>
      <div class="container">
          <img class ="image" src="https://pbs.twimg.com/profile_images/1496512709348798464/-19Uii-a_400x400.jpg">
        <p class="paragraph">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div>
        <button id="newDetailsButton" class="detailsButton"> Details </button>
      </div>
    </div>
    
    <div class="card">
      <h1 class="heading"> Heading </h1>
      <div class="container">
          <img class ="image" src="https://pbs.twimg.com/profile_images/1496512709348798464/-19Uii-a_400x400.jpg">
        <p class="paragraph">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div>
        <button class="detailsButton"> Details </button>
      </div>
    </div>
    </div>
    <div class="buttons">
      <button class="cloneButton">Clone Page </button>
    <button class="backgroundButton"> Toggle Card Background Color</button>
    <button class="headingButton"> Change Heading Text</button>
      <button class="deleteLastButton"> Delete Last Clone</button>
    </div>
      
    `;
  }
}

customElements.define('web-component-card', WebComponentCard);
