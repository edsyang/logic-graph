import * as React from 'react';
import { Button, message } from 'antd';
// import { MacCommandOutlined } from '@ant-design/icons';

const saveProcess = () => {
  const random: number = Math.floor(Math.random() * 10);
  random > 5 ? message.success('success') : message.error('error');
};

const HeaderPane = () => {
  console.log('HeaderPane');
  return (
    <div className="logic-ui-header-pane">
      <div className="header-pane-wapper">
        <div className="header-pane-left">
          <span className="header-pane-title">process-example</span>
          {/* <span className="header-pane-version">1.1.2</span> */}
        </div>
        <div className="header-pane-right">
          {/* <div className="">提示</div> */}
          <div className="">
            <Button type="primary"
              size="middle"
              onClick={saveProcess}
            >
              保存
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPane;
