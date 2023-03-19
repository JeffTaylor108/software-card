import { LitElement, html, css } from 'lit';
import "./software-card.js";

export class SoftwareRoster extends LitElement {
    static get tag() {
        return 'software-roster';
    }
    static get properties() {
        return {
          softwares: { type: Array },
          company: { type: String },
        }
    }

    constructor() {
        super();
        this.softwares = [];
        this.company = 'Apple';
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../assets/roster.json', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.softwares = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.company}</h2>
        <div class="wrapper">
            ${this.softwares.map(software => html`
            <div class="item">
                <software-card name="${software.name}" subheader="${software.subheader}" softwareDetails="${software.softwareDetails}" top="${software.top}" bottom="${software.bottom}"></software-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(SoftwareRoster.tag, SoftwareRoster);