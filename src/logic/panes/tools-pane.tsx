import * as React from 'react';
import Tools from './tools-list';

const ToolsPane = () => {
  console.log('ToolsPane');
  return (
    <div className="logic-ui-tools-pane">
      {/* this is ToolsPane */}
      <Tools />
    </div>
  );
};

export default ToolsPane;
