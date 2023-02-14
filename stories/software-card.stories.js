import { html } from 'lit';
import '../src/software-card.js';

export default {
  title: 'SoftwareCard',
  component: 'software-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <software-card
      style="--software-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </software-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
