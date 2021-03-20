import * as React from 'react';
import datas from './defaultConfig';

const ComponentsList = () => {
  // eslint-disable-next-line prefer-const
  let nodeData = datas;

  debugger;
  const nodeItems = nodeData.map((item: any) => {
    const { nodeName, props } = item;
    // eslint-disable-next-line react/prop-types
    const { name } = props;

    return (
      <div
        className="component-list-items"
        key={nodeName}
        title={name}
        draggable
      >
        <div className="component-list-item">
          <div
            className="component-icon"
            data-type="node"
            data-shape={nodeName}
            data-label={name}
            data-props={props}
            // data-size={sizes[item.nodeName]}
          >
            <i className={`iconfont ${item.icon}`} />
          </div>
          <div className="component-name">
            <span className="component-name-detail">{name}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="component-list-wrap">
      <div className="component-list-group">
        {nodeItems}
      </div>
    </div>
  );
};

export default ComponentsList;
