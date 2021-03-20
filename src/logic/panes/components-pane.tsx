import * as React from 'react';
import ComponentsList from './components-list';

const ComponentsPane = () => {
  console.log('ComponentsPane');
  return (
    <div className="logic-ui-components-pane">
      <div className="logic-ui-components-pane-content">
        <ComponentsList />
      </div>
    </div>
  );
};

export default ComponentsPane;
