import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LogicUi from './logic/logic-ui';

const container: HTMLElement = document.createElement('div');
document.body.appendChild(container);
container.id = 'logic-graph';

const initGraph = () => {
  debugger;
  ReactDOM.render(React.createElement(LogicUi, {}), container);
};

initGraph();
