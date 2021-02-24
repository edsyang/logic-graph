import * as React from 'react';
import * as ReactDOM from 'react-dom';

const container = createNodeToBody('div', 'xxx');
// ...
// ReactDOM.render(React.createElement(React.createElement({}, {}), container))

export function createNodeToBody(node: string, nodeId: string) {
  const container = document.createElement(node);
  document.body.appendChild(container);
  container.id = nodeId;
  return container;
}