import * as React from 'react';
import { Toolbar } from '@antv/x6-react-components';
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  UndoOutlined,
  RedoOutlined,
  DeleteOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import '@antv/x6-react-components/es/menu/style/index.css';
import '@antv/x6-react-components/es/toolbar/style/index.css';

const { Item, Group } = Toolbar;

const Tools = () => {
  const [isDisabled, setDisable] = React.useState(true);
  const [isActive, setActive] = React.useState(true);
  return (
    <Toolbar onClick={(e: any) => { console.log(e); }} extra={<span>Extra</span>}>
      <Group>
        <Item name="zoomIn" tooltip="Zoom In (Cmd +)" icon={<ZoomInOutlined />} />
        <Item name="zoomOut" tooltip="Zoom Out (Cmd -)" icon={<ZoomOutOutlined />} />
      </Group>
      <Group>
        <Item name="undo" tooltip="Undo (Cmd + Z)" icon={<UndoOutlined />} />
        <Item name="redo" tooltip="Redo (Cmd + Shift + Z)" icon={<RedoOutlined />} />
      </Group>
      <Group>
        <Item name="delete" icon={<DeleteOutlined />} disabled={isDisabled} tooltip="Delete (Delete)" />
      </Group>
      <Group>
        <Item name="bold" icon={<BoldOutlined />} active={isActive} tooltip="Bold (Cmd + B)" />
        <Item name="italic" icon={<ItalicOutlined />} tooltip="Italic (Cmd + I)" />
        <Item name="strikethrough" icon={<StrikethroughOutlined />} tooltip="Strikethrough (Cmd + Shift + x)" />
        <Item name="underline" icon={<UnderlineOutlined />} tooltip="Underline (Cmd + U)" />
      </Group>
    </Toolbar>
  );
};

export default Tools;
