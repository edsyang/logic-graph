import * as React from 'react';
import { Button, message } from 'antd';

const HeaderPane = () => {
  const [isLoading, setLoading] = React.useState(false);
  console.log('HeaderPane');

  const saveProcess = () => {
    setLoading(true);
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10);
      if (num > 5) {
        message.success('success');
      } else {
        message.error('error');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="logic-ui-header-pane">
      <div className="header-pane-wapper">
        <div className="header-pane-left">
          <span className="header-pane-title">process-example</span>
          {/* <span className="header-pane-version">1.1.2</span> */}
        </div>
        <div className="header-pane-right">
          {/* <div className="header-pane-tips">提示</div> */}
          <div className="header-pane-save">
            <Button type="primary"
              size="middle"
              onClick={saveProcess}
              loading={isLoading}
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
