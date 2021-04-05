import * as React from 'react';
import * as dagre from 'dagre';
import { Graph, Shape, Markup } from '@antv/x6';

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
  let currentCell: any;
  const graph = new Graph({
    panning: true,
    container: Array.from(document.getElementsByClassName('logic-ui-canvas-pane') as HTMLCollectionOf<HTMLElement>)[0],
    grid: true,
    // 自动更新画布大小，防止节点超出画布
    autoResize: true,
    // 滚动条，开启后
    // scroller: {
    //   enabled: true,
    //   pannable: true,
    //   // cursor: 'pointer',
    // },
    // 开启后可添加事件 e.g graph.on('node:selected')
    selecting: true,
    history: true,
    connecting: {
      snap: true,
      allowBlank: false,
      allowMulti: false
    },
    // 对齐线 https://x6.antv.vision/zh/docs/tutorial/basic/snapline/#graphgetsnaplinetolerance
    snapline: true,
  });

  const edge = new Shape.Edge({
    source: { 
      cell: 'node1', 
      anchor: { 
        name: 'midSide', 
        args: {
          dx: 10,
        },
      },
    },
    target: { 
      cell: 'node2', 
      anchor: 'orth', // 没有参数时可以简化写法
    },
  })

  // 自定义连接桩
  const ports = {
    groups: {
      top: {
        position: { name: 'top' },
        attrs: {
          circle: {
            r: 6,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          }
        }
      },
      right: {
        position: { name: 'right' },
        attrs: {
          circle: {
            r: 6,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          }
        }
      },
      bottom: {
        position: { name: 'bottom' },
        attrs: {
          circle: {
            r: 6,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          }
        }
      },
      left: {
        position: { name: 'left' },
        attrs: {
          circle: {
            r: 6,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
          }
        }
      }
    }
  }

  const data = {
    nodes: [
      {
        id: 'node1',
        shape: 'rect', // 使用 rect 渲染
        x: 300,
        y: 300,
        width: 80,
        height: 40,
        attrs: {
          body: {
            strokeWidth: 1,
            stroke: '#108ee9',
            fill: '#fff',
            rx: 5,
            ry: 5,
          },
        },
        label: 'hello',
        portMarkup: [Markup.getForeignObjectMarkup()],
        ports: {
          items: [
            { group: 'in', id: 'in1' },
            { group: 'in', id: 'in2' },
            { group: 'out', id: 'out1' },
            { group: 'out', id: 'out2' },
          ],
          groups: {
            in: {
              position: { name: 'top' },
              attrs: {
                fo: {
                  width: 10,
                  height: 10,
                  x: -5,
                  y: -5,
                  magnet: 'true',
                },
              },
              zIndex: 1,
            },
            out: {
              position: { name: 'bottom' },
              attrs: {
                fo: {
                  width: 10,
                  height: 10,
                  x: -5,
                  y: -5,
                  magnet: 'true',
                },
              },
              zIndex: 1,
            },
          },
        },
      },
      {
        id: 'node2',
        shape: 'ellipse', // 使用 ellipse 渲染
        x: 500,
        y: 300,
        width: 80,
        height: 40,
        label: 'world',
        portMarkup: [Markup.getForeignObjectMarkup()],
        ports: {
          groups: {
            in: {
              position: { name: 'top' },
              attrs: {
                fo: {
                  width: 5,
                  height: 5,
                  x: -5,
                  y: -5,
                  magnet: 'true',
                },
              },
              zIndex: 1,
            },
            out: {
              position: { name: 'bottom' },
              attrs: {
                fo: {
                  width: 5,
                  height: 5,
                  x: -5,
                  y: -5,
                  magnet: 'true',
                },
              },
              zIndex: 1,
            },
          },
          items: [
            { group: 'in', id: 'in1' },
            { group: 'in', id: 'in2' },
            { group: 'out', id: 'out1' },
            { group: 'out', id: 'out2' },
          ],
        },
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
      // {
      //   source: 'node2',
      //   target: 'node1'
      // }
    ],
  };

  graph.fromJSON(data);
    
  graph.zoom(0.2);

  graph.on('node:selected', (e) => {
    console.log(e, 'this is node props')
  })

  graph.on('blank:click', ({ e }) => {
    console.log(e, 'e===')
    e.preventDefault();
    e.stopPropagation();
    currentCell.removeTools();
  })

  graph.on('cell:mouseenter', ({ cell }) => {
    // 可在节点上新增动作
    if (cell.isNode()) {
      // console.log(cell, 'cell====')
      if (!currentCell || currentCell?.id == cell.id) {
        currentCell = cell;
      } else {
        currentCell.removeTools();
      }
      cell.addTools([
        {
          name: 'button-remove',
          args: {
            x: 5,
            y: 5,
            offset: { x: -10, y: -10 },
          },
        },
        {
          name: 'button',
          args: {
            markup: [
              {
                tagName: 'circle',
                selector: 'button',
                attrs: {
                  r: 8,
                  // stroke: '#fe854f',
                  // 'stroke-width': 3,
                  fill: 'green',
                  cursor: 'pointer',
                  event: 'node:add'
                },
              },
              {
                tagName: 'text',
                textContent: '+',
                selector: 'icon',
                attrs: {
                  fill: 'white',
                  'font-size': 14,
                  'text-anchor': 'middle',
                  'pointer-events': 'none',
                  y: '0.3em',
                },
              },
            ],
            x: '5',
            y: '5',
            offset: { x: -10, y: -30 },
            onClick({ view }) {
              debugger
              const newNode = createNode();
              graph.freeze();
              // graph.addCell([newNode, createEdge(currentCell, newNode)]);
              graph.addCell([newNode, createEdge(currentCell, newNode)]);
              layout();

              // console.log(newNode, 'newNode==')
              // console.log(view, 'view==')
              // const node = view.cell
              // console.log(node.attr, 'attr==')
              // const fill = X6.Color.randomHex()
              // node.attr({
              //   body: {
              //     fill,
              //   },
              //   label: {
              //     fill: X6.Color.invert(fill, true),
              //   },
              // })
            },
          },
        },
      ])
    } else {
      currentCell?.removeTools();
      // 线可折
      // cell.addTools(['vertices', 'segments'])
    }
  })

  graph.on('cell:mouseleave', ({ cell }) => {
    // debugger
    if (cell.id !== currentCell.id) {
      // 离开节点隐藏动作
      // currentCell.removeTools();
      currentCell = cell;
    }
  })

  // registerNode 方法
  Graph.registerNode('test-rect', {
    inherit: 'rect', // 继承自 Shape.Rect
    width: 200, // 默认宽度
    height: 40, // 默认高度
    attrs: {
      body: {
        rx: 10, // 圆角矩形
        ry: 10,
        strokeWidth: 1,
        fill: '#5755a1',
        stroke: '#5755a1',
      },
      label: {
        fill: '#fff',
        fontSize: 18,
        refX: 10, // x 轴偏移，类似 css 中的 margin-left
        textAnchor: 'left', // 左对齐
        text: 'test-node'
      }
    },
  })

  // 注册线
  // X6.Graph.registerEdge('test-rect', {
  //   zIndex: -1,
  //   attrs: {
  //     line: {
  //       stroke: '#585858',
  //       strokeWidth: 3,
  //       sourceMarker: null,
  //       targetMarker: null,
  //     },
  //   },
  // })

  graph.addNode({
    x: 100,
    y: 60,
    shape: 'test-rect',
    label: 'My Custom Rect', // label 继承于基类的自定义选项
    portMarkup: [Markup.getForeignObjectMarkup()],
    ports: {
      groups: {
        in: {
          position: { name: 'top' },
          attrs: {
            fo: {
              width: 10,
              height: 10,
              x: -5,
              y: -5,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
        out: {
          position: { name: 'bottom' },
          attrs: {
            fo: {
              width: 10,
              height: 10,
              x: -5,
              y: -5,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
      },
      items: [
        { group: 'in', id: 'in1' },
        { group: 'in', id: 'in2' },
        { group: 'out', id: 'out1' },
        { group: 'out', id: 'out2' },
      ],
    },
  });

  // 节点可拖线
  graph.addNode({
    x: 400,
    y: 400,
    id: 'node3',
    width: 160,
    height: 30,
    label: 'Hello',
    portMarkup: [Markup.getForeignObjectMarkup()],
    ports: {
      groups: {
        in: {
          position: { name: 'top' },
          attrs: {
            fo: {
              width: 10,
              height: 10,
              x: -5,
              y: -5,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
        out: {
          position: { name: 'bottom' },
          attrs: {
            fo: {
              width: 10,
              height: 10,
              x: -5,
              y: -5,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
      },
      items: [
        { group: 'in', id: 'in1' },
        { group: 'in', id: 'in2' },
        { group: 'out', id: 'out1' },
        { group: 'out', id: 'out2' },
      ],
    },
  })

  // graph.on('node:add', ({e, node}) => {
  //   console.log(e, 'node:add, e==')
  //   console.log(node, 'node:add, node==')
  // })

  graph.on('edge:click', ({ e, edge, view }) => {
    console.log(e, 'e==')
    console.log(edge, 'edge==')
    console.log(view, 'view==')
    // edge.removeVertexAt();
  })

  function createNode() {
    return graph.createNode({
      shape: 'test-rect',
      attrs: {},
      portMarkup: [Markup.getForeignObjectMarkup()],
      ports: {
        groups: {
          in: {
            position: { name: 'top' },
            attrs: {
              fo: {
                width: 10,
                height: 10,
                x: -5,
                y: -5,
                magnet: 'true',
              },
            },
            zIndex: 1,
          },
          out: {
            position: { name: 'bottom' },
            attrs: {
              fo: {
                width: 10,
                height: 10,
                x: -5,
                y: -5,
                magnet: 'true',
              },
            },
            zIndex: 1,
          },
        },
        items: [
          { group: 'in', id: 'in1' },
          { group: 'in', id: 'in2' },
          { group: 'out', id: 'out1' },
          { group: 'out', id: 'out2' },
        ],
      },
    })
  }

  function layout() {
    const dir = 'LR';
    const nodes = graph.getNodes()
    const edges = graph.getEdges()
    const g = new dagre.graphlib.Graph()
    g.setGraph({ rankdir: dir, nodesep: 16, ranksep: 16 })
    g.setDefaultEdgeLabel(() => ({}))

    const width = 260
    const height = 90
    nodes.forEach((node) => {
      g.setNode(node.id, { width, height })
    })

    edges.forEach((edge) => {
      const source: any = edge.getSource()
      const target: any = edge.getTarget()
      g.setEdge(source.cell, target.cell)
    })

    dagre.layout(g)

    graph.freeze()

    g.nodes().forEach((id) => {
      const node: any = graph.getCell(id)
      if (node) {
        const pos = g.node(id)
        node.position(pos.x, pos.y)
      }
    })

    edges.forEach((edge) => {
      const source: any = edge.getSourceNode()
      const target: any = edge.getTargetNode()
      const sourceBBox = source.getBBox()
      const targetBBox = target.getBBox()

      console.log(sourceBBox, targetBBox)

      if ((dir === 'LR' || dir === 'RL') && sourceBBox.y !== targetBBox.y) {
        const gap =
          dir === 'LR'
            ? targetBBox.x - sourceBBox.x - sourceBBox.width
            : -sourceBBox.x + targetBBox.x + targetBBox.width
        const fix = dir === 'LR' ? sourceBBox.width : 0
        const x = sourceBBox.x + fix + gap / 2
        edge.setVertices([
          { x, y: sourceBBox.center.y },
          { x, y: targetBBox.center.y },
        ])
      } else if ((dir === 'TB' || dir === 'BT') && sourceBBox.x !== targetBBox.x) {
        const gap =
          dir === 'TB'
            ? targetBBox.y - sourceBBox.y - sourceBBox.height
            : -sourceBBox.y + targetBBox.y + targetBBox.height
        const fix = dir === 'TB' ? sourceBBox.height : 0
        const y = sourceBBox.y + fix + gap / 2
        edge.setVertices([
          { x: sourceBBox.center.x, y },
          { x: targetBBox.center.x, y },
        ])
      } else {
        edge.setVertices([])
      }
    })

    graph.unfreeze()
  }

  function createEdge(source: any, target: any) {
    return graph.createEdge({
      // shape: 'rect',
      source: { cell: source.id },
      target: { cell: target.id }
    })
  }
}, 1000)


export default CanvasPane;
