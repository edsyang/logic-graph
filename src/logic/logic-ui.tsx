import * as React from 'react';
import HeaderPane from './panes/header-pane';
import ComponentsPane from './panes/components-pane';
import ToolsPane from './panes/tools-pane';
import CanvasPane from './panes/canvas-pane';
import SettingsPane from './panes/settings-pane';
import './index.less';

const LogicUi = () => {
  const panesConfig = window.logicConfig.panes || {};
  return (
    <div className="logic-ui">
      {panesConfig.HeaderPane && <HeaderPane />}
      {panesConfig.ComponentsPane && <ComponentsPane />}
      {panesConfig.ToolsPane && <ToolsPane />}
      {panesConfig.CanvasPane && <CanvasPane />}
      {panesConfig.SettingsPane && <SettingsPane />}
    </div>
  );
};

export default LogicUi;
