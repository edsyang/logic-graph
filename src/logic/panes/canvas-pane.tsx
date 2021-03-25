import * as React from 'react';
import { Graph } from '@antv/x6';

const CanvasPane = () => {
  console.log('CanvasPane');
  return (
    <div className="logic-ui-canvas-pane" id="logic-ui-canvas-pane">
      this is CanvasPane
      {/*  */}
    </div>
  );
};

setTimeout(() => {
  new Graph({
    panning: true,
    container: Array.from(document.getElementsByClassName('logic-ui-canvas-pane') as HTMLCollectionOf<HTMLElement>)[0],
    grid: true,
  });
}, 1000)


export default CanvasPane;
