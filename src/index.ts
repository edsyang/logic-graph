import * as React from 'react';
import * as ReactDOM from 'react-dom';

const container: HTMLElement = document.createElement('div');
document.body.appendChild(container);
container.id = 'logic-graph';

const initGraph = () => {
  debugger;
  ReactDOM.render(React.createElement('div', {}, '1234562'), container);
};

initGraph();
