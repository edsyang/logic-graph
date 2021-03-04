declare const require: any;
declare const module: any; 
declare const G6: any;

interface pageConfig {
  prefix: string
}

interface logicPanes {
  HeaderPane: boolean,
  ComponentsPane: boolean,
  ToolsPane: boolean,
  CanvasPane: boolean,
  SettingsPane: boolean
}

interface logicConfig {
  panes: logicPanes,
  process: object,
  nodes: object,
  config: object
}

interface Window {
  pageConfig: pageConfig,
  logicConfig: logicConfig
}

declare module 'antd' {
  const Button: any;
  const Icon: any;
  const Form: any;
  const Select: any;
  const Card: any;
  const Tag: any;
  const Table: any;
  const Tabs: any;
  const Spin: any;
  const Notification: any;
  const message: any;
}

declare module 'antd';
declare module '@antv/g6';