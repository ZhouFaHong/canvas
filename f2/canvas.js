
function chart() {
  // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 220 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 650 },
  ];

  // Step 1: 创建 Chart 对象
  const chart = new F2.Chart({
    id: 'myChart',
    pixelRatio: window.devicePixelRatio // 指定分辨率
  });

  // Step 2: 载入数据源
  chart.source(data);

  // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
  chart.interval().position('genre*sold').color('genre');

  // Step 4: 渲染图表
  chart.render();
}
chart()


function container() {
  const data = [{
    time: 'Jan.',
    tem: 1000
  }, {
    time: 'Feb.',
    tem: 2200
  }, {
    time: 'Mar.',
    tem: 2000
  }, {
    time: 'Apr.',
    tem: 2600
  }, {
    time: 'May.',
    tem: 2000
  }, {
    time: 'Jun.',
    tem: 2600
  }, {
    time: 'Jul.',
    tem: 2800
  }, {
    time: 'Aug.',
    tem: 2000
  }];
  const chart = new F2.Chart({
    id: 'container',
    pixelRatio: window.devicePixelRatio
  });
  
  chart.source(data);
  chart.tooltip({
    showCrosshairs: true
  });
  chart.scale({
    time: {
      range: [ 0, 1 ]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  });
  chart.axis('time', {
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.area().position('time*tem');
  chart.line().position('time*tem');
  chart.render();
}

container()



function gradient(params) {
  const data = [{
    time: '2016-08-08 00:00:00',
    tem: 10
  }, {
    time: '2016-08-08 00:10:00',
    tem: 22
  }, {
    time: '2016-08-08 00:30:00',
    tem: 16
  }, {
    time: '2016-08-09 00:35:00',
    tem: 26
  }, {
    time: '2016-08-09 01:00:00',
    tem: 12
  }, {
    time: '2016-08-09 01:20:00',
    tem: 26
  }, {
    time: '2016-08-10 01:40:00',
    tem: 18
  }, {
    time: '2016-08-10 02:00:00',
    tem: 26
  }, {
    time: '2016-08-10 02:20:00',
    tem: 12
  }];
  const chart = new F2.Chart({
    id: 'gradient',
    pixelRatio: window.devicePixelRatio
  });
  chart.source(data, {
    time: {
      type: 'timeCat',
      tickCount: 3,
      range: [ 0, 1 ]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  });
  
  chart.axis('time', {
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  });
  chart.tooltip({
    showCrosshairs: true
  });
  
  chart.area()
    .position('time*tem')
    .color('l(90) 0:#1890FF 1:#f7f7f7')
    .shape('smooth');
  chart.line()
    .position('time*tem')
    .color('l(90) 0:#1890FF 1:#f7f7f7')
    .shape('smooth');
  chart.render();
}

gradient()


function treemap() {
  const DataSet = window.DataSet;

const {
  Shape,
  Util
} = F2;


Shape.registerShape('polygon', 'labeledPolygon', {
  draw: function draw(cfg, container) {
    const points = this.parsePoints(cfg.points);
    const style = Util.mix({
      fill: cfg.color,
      points
    }, cfg.style);
    const polygon = container.addShape('Polygon', {
      className: 'polygon',
      attrs: style
    });
    // 在 polygon 的中心添加文本
    const text = container.addShape('Text', {
      // className: 'polygon',
      attrs: {
        x: (points[0].x + points[2].x) / 2,
        y: (points[0].y + points[2].y) / 2,
        text: cfg.origin._origin.name,
        fill: '#fff',
        textAlign: 'center',
        textBaseline: 'middle',
        fontSize: 12
      }
    });

    const polygonBBox = polygon.getBBox();
    const textBBox = text.getBBox();

    // 这里为了让文本显示全，根据文本和矩形框的宽度比来设置文本大小
    const ratio = polygonBBox.width / textBBox.width;
    text.attr('fontSize', ratio * 12 * 0.6);

    return [ polygon, text ];
  }
});

const data = {
  name: 'root',
  children: [{
    name: '分类 1',
    value: 560
  }, {
    name: '分类 2',
    value: 500
  }, {
    name: '分类 3',
    value: 150
  }, {
    name: '分类 4',
    value: 140
  }, {
    name: '分类 5',
    value: 115
  }, {
    name: '分类 6',
    value: 95
  }, {
    name: '分类 7',
    value: 90
  }, {
    name: '分类 8',
    value: 75
  }, {
    name: '分类 9',
    value: 98
  }, {
    name: '分类 10',
    value: 60
  }, {
    name: '分类 11',
    value: 45
  }, {
    name: '分类 12',
    value: 40
  }, {
    name: '分类 13',
    value: 40
  }, {
    name: '分类 14',
    value: 35
  }, {
    name: '分类 15',
    value: 40
  }, {
    name: '分类 16',
    value: 40
  }, {
    name: '分类 17',
    value: 40
  }, {
    name: '分类 18',
    value: 30
  }, {
    name: '分类 19',
    value: 28
  }, {
    name: '分类 20',
    value: 16
  }]
};
const dv = new DataSet.DataView();
dv.source(data, {
  type: 'hierarchy'
}).transform({
  field: 'value',
  type: 'hierarchy.treemap',
  tile: 'treemapResquarify',
  as: [ 'x', 'y' ]
});
const nodes = dv.getAllNodes();
nodes.map(function(node) {
  node.name = node.data.name;
  node.value = node.data.value;
  return node;
});

const chart = new F2.Chart({
  id: 'container',
  padding: 20,
  pixelRatio: window.devicePixelRatio
});
chart.source(nodes);
chart.scale({
  value: {
    nice: false
  }
});
chart.axis(false);
chart.legend(false);
chart.tooltip(false);
chart.polygon()
  .position('x*y')
  .color('name')
  .shape('labeledPolygon')
  .style({
    lineWidth: 1,
    stroke: '#fff'
  });
chart.render();
}