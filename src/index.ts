import * as React from 'react';
import * as ReactDOM from 'react-dom';

const container: HTMLDivElement = document.createElement('div');
document.body.appendChild(container);
container.id = 'logic-graph';


const initGraph = () => {
  return ReactDOM.render(React.createElement('div', {}), container);
}

initGraph();