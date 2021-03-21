import * as React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ComponentsList from './components-list';

const ComponentsPane = () => {
  const [isFold, setFold] = React.useState(true);

  const queryEle = (ele: string, sty: any, min: number, max: number) => {
    const query = Array.from(document.getElementsByClassName(ele) as HTMLCollectionOf<HTMLElement>)[0];
    query.style[sty] = isFold ? `${min}px` : `${max}px`;
    query.style.transition = `${sty} .2s`;
  }

  const foldMenu = () => {
    queryEle('logic-ui-components-pane', 'width', 84, 250);
    queryEle('logic-ui-tools-pane', 'left', 84, 250);
    queryEle('logic-ui-components-pane-fold', 'width', 82, 248);
    setFold(!isFold);
  };

  return (
    <div className="logic-ui-components-pane">
      <div className="logic-ui-components-pane-content">
        <ComponentsList />
      </div>
      <Button className="logic-ui-components-pane-fold" onClick={foldMenu}>
        { isFold ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
      </Button>
    </div>
  );
};

export default ComponentsPane;
