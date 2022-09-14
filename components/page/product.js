import { Box, Button, Text } from 'grommet';
import { HomeTable } from '../ui/table';
const highColor = '#00CCFF';
const blueColor = '#0099FF';
const titleWidth = '10vw';
const titleFontStyle = {
  fontSize: '1.5vw',
};
const titleFontWeightStyle = {
  fontWeight: 600,
};
const tileStyle = {
  ...titleFontStyle,
  ...titleFontWeightStyle,
};

const TitleTextBox = ({ title = '', texts = [] }) => {
  return (
    <>
      <Text
        style={{
          ...titleFontStyle,
          ...titleFontWeightStyle,
        }}
      >
        {title}
      </Text>
      <Box align='center'>
        {texts.map((text) => (
          <Text
            style={{
              fontSize: '1.3vw',
              lineHeight: '2vw',
            }}
            key={text}
          >
            {text}
          </Text>
        ))}
      </Box>
    </>
  );
};

const makeTilte = ({ title } = {}) => {
  const list = Array.isArray(title) ? title : [title];
  return {
    area: 'title',
    background: highColor,
    gap: '1vw',
    children: list.map((text) => (
      <Text color='#fff' style={tileStyle}>
        {text}
      </Text>
    )),
  };
};

const smartApp = {
  rows: ['10vw'],
  style: {
    borderBottom: '2px solid #0099FF',
  },
  columns: [titleWidth, 'repeat(4,auto)'],
  areas: [
    { name: 'title', start: [0, 0], end: [0, 0] },
    { name: 'manage', start: [1, 0], end: [1, 0] },
    { name: 'traffic', start: [2, 0], end: [2, 0] },
    { name: 'experience', start: [3, 0], end: [3, 0] },
    { name: 'Integrate', start: [4, 0], end: [4, 0] },
  ],
  areaList: [
    makeTilte({ title: '智能应用层' }),
    ...[
      {
        area: 'manage',
        title: '智慧管理服务',
        texts: ['指挥调度 | AI慧眼', '无人环卫 | 智慧公厕'],
      },
      {
        area: 'traffic',
        title: '畅行交通',
        texts: ['智能导航 | 智能停车', '自动驾驶服务 | 约车服务'],
      },
      {
        area: 'experience',
        title: '沉浸体验',
        texts: ['人机交互 | 数字伴游', '虚拟导游（AR/VR） '],
      },
      {
        area: 'Integrate',
        title: '整合营销',
        texts: ['游客画像 | 产品分销', '精准推送'],
      },
    ].map(({ area, ...props }) => ({
      area,
      background: blueColor,
      justify: 'around',
      children: <TitleTextBox {...props} />,
    })),
  ],
};

const engine = {
  style: {
    borderBottom: '2px solid #0099FF',
  },
  rows: ['4vw', '4vw'],
  columns: [titleWidth, 'repeat(3,auto)'],
  areas: [
    {
      name: 'title',
      start: [0, 0],
      end: [0, 1],
    },
    {
      name: 'va',
      start: [1, 0],
      end: [1, 0],
    },
    {
      name: 'mv',
      start: [2, 0],
      end: [2, 0],
    },
    {
      name: 'billing',
      start: [3, 0],
      end: [3, 0],
    },
    {
      name: 'mqtt',
      start: [1, 1],
      end: [1, 1],
    },
    {
      name: 'lbs',
      start: [2, 1],
      end: [2, 1],
    },
    {
      name: 'tsdb',
      start: [3, 1],
      end: [3, 1],
    },
  ],
  areaList: [
    makeTilte({ title: '智能引擎层' }),
    ...[
      {
        area: 'va',
        title: '音视频传输',
      },
      {
        area: 'mv',
        title: '机器视觉',
      },
      {
        area: 'billing',
        title: 'Billing',
      },
      {
        area: 'mqtt',
        title: 'MQTT（接入）',
      },
      {
        area: 'lbs',
        title: 'LBS（位置）',
      },
      {
        area: 'tsdb',
        title: 'TSDB（存储）',
      },
    ].map(({ area, title }) => ({
      area,
      background: blueColor,
      children: title,
      style: titleFontStyle,
    })),
  ],
};

const facility = {
  rows: ['4vw', '3vw', '3vw', '3vw'],
  columns: [titleWidth, 'repeat(4,auto)'],
  areas: [
    { name: 'title', start: [0, 0], end: [0, 3] },
    { name: 'aiot', start: [1, 0], end: [1, 0] },
    { name: 'aiotv', start: [1, 1], end: [1, 1] },
    { name: 'aisensor', start: [1, 2], end: [1, 2] },
    { name: 'aicar', start: [1, 3], end: [1, 3] },
    { name: 'aicenter', start: [2, 0], end: [2, 0] },
    { name: 'ai', start: [2, 1], end: [2, 1] },
    { name: 'bigdata', start: [2, 2], end: [2, 2] },
    { name: 'safety', start: [2, 3], end: [2, 3] },
    { name: 'aimap', start: [3, 0], end: [3, 0] },
    { name: 'navmap', start: [3, 1], end: [3, 1] },
    { name: 'hdmap', start: [3, 2], end: [3, 2] },
    { name: 'handmap', start: [3, 3], end: [3, 3] },
    { name: 'aicloud', start: [4, 0], end: [4, 0] },
    { name: 'arvr', start: [4, 1], end: [4, 1] },
    { name: 'car', start: [4, 2], end: [4, 2] },
    { name: 'outside', start: [4, 3], end: [4, 3] },
  ],
  areaList: [
    makeTilte({ title: '基础设施层' }),
    ...[
      {
        area: 'aiot',
        title: '智能设备',
      },
      {
        area: 'aicenter',
        title: '智能算力中心',
      },
      {
        area: 'aimap',
        title: '智能地图',
      },
      {
        area: 'aicloud',
        title: '智能终端',
      },
    ].map(({ area, title }) => ({
      area,
      background: blueColor,
      children: title,
      style: titleFontStyle,
    })),
    ...[
      { area: 'aiotv', children: '智能视觉设备' },
      { area: 'aisensor', children: '智能传感器' },
      { area: 'aicar', children: '自动驾驶汽车' },
      { area: 'navmap', children: '导航地图' },
      { area: 'hdmap', children: '高清地图' },
      { area: 'handmap', children: '手绘地图' },
    ].map((data) => ({
      ...data,
      background: '#66CCCC',
      style: {
        color: '#000',
      },
    })),
    ...[
      { area: 'ai', children: 'AI计算' },
      { area: 'bigdata', children: '大数据计算存储' },
      { area: 'safety', children: '安全防护' },
      { area: 'arvr', children: 'AR/VR设备' },
      { area: 'car', children: '车载交互屏' },
      { area: 'outside', children: '室外交互屏' },
    ].map((data) => ({
      ...data,
      background: '#CC9933',
      style: {
        color: '#000',
      },
    })),
  ],
};

const agricultureList = [
  {
    rows: ['10vw'],
    style: {
      borderBottom: '2px solid #0099FF',
    },
    columns: [titleWidth, 'repeat(5,auto)'],
    areas: [
      { name: 'title', start: [0, 0], end: [0, 0] },
      { name: 't1', start: [1, 0], end: [1, 0] },
      { name: 't2', start: [2, 0], end: [2, 0] },
      { name: 't3', start: [3, 0], end: [3, 0] },
      { name: 't4', start: [4, 0], end: [4, 0] },
      { name: 't5', start: [5, 0], end: [5, 0] },
    ],
    areaList: [
      makeTilte({ title: '智能应用层' }),
      ...[
        {
          area: 't1',
          texts: ['种植/养殖', '监控与管理'],
        },
        {
          area: 't2',
          texts: ['场地/机械', '监测与运行'],
        },
        {
          area: 't3',
          texts: ['产品品质', '跟踪与监测'],
        },
        {
          area: 't4',
          texts: ['科技文旅', '融合与创新'],
        },
        {
          area: 't5',
          texts: ['线上/线下', '沉浸式体验'],
        },
      ].map(({ area, texts }) => ({
        area,
        background: blueColor,
        justify: 'center',
        gap: '0.5vw',
        children: texts.map((text) => <Text style={titleFontStyle}>{text}</Text>),
      })),
    ],
  },
  engine,
  {
    rows: ['4vw', '3vw', '3vw', '3vw'],
    columns: [titleWidth, 'repeat(4,auto)'],
    areas: [
      { name: 'title', start: [0, 0], end: [0, 3] },
      { name: 'aiot', start: [1, 0], end: [1, 0] },
      { name: 'aiotv', start: [1, 1], end: [1, 1] },
      { name: 'aisensor', start: [1, 2], end: [1, 2] },
      { name: 'ainj', start: [1, 3], end: [1, 3] },
      { name: 'aicenter', start: [2, 0], end: [2, 0] },
      { name: 'ai', start: [2, 1], end: [2, 1] },
      { name: 'bigdata', start: [2, 2], end: [2, 2] },
      { name: 'safety', start: [2, 3], end: [2, 3] },
      { name: 'aimap', start: [3, 0], end: [3, 0] },
      { name: 'navmap', start: [3, 1], end: [3, 1] },
      { name: 'hdmap', start: [3, 2], end: [3, 2] },
      { name: 'handmap', start: [3, 3], end: [3, 3] },
      { name: 'Telecommunication', start: [4, 0], end: [4, 0] },
      { name: '5g', start: [4, 1], end: [4, 1] },
      { name: 'zw', start: [4, 2], end: [4, 2] },
      { name: 'nb', start: [4, 3], end: [4, 3] },
    ],
    areaList: [
      makeTilte({ title: '基础设施层' }),
      ...[
        {
          area: 'aiot',
          title: '智能设备',
        },
        {
          area: 'aicenter',
          title: '智能算力中心',
        },
        {
          area: 'aimap',
          title: '智能地图',
        },
        {
          area: 'Telecommunication',
          title: '网络通信',
        },
      ].map(({ area, title }) => ({
        area,
        background: blueColor,
        children: title,
        style: titleFontStyle,
      })),
      ...[
        { area: 'aiotv', children: '智能视觉设备' },
        { area: 'aisensor', children: '智能传感器' },
        { area: 'ainj', children: '智能农机化' },
        { area: 'navmap', children: '导航地图' },
        { area: 'hdmap', children: '高清地图' },
        { area: 'handmap', children: '手绘地图' },
      ].map((data) => ({
        ...data,
        background: '#66CCCC',
        style: {
          color: '#000',
        },
      })),
      ...[
        { area: 'ai', children: 'AI计算' },
        { area: 'bigdata', children: '大数据计算存储' },
        { area: 'safety', children: '安全防护' },
        { area: '5g', children: '5G/4G网络' },
        { area: 'zw', children: '专线网络' },
        { area: 'nb', children: 'NBLora…' },
      ].map((data) => ({
        ...data,
        background: '#CC9933',
        style: {
          color: '#000',
        },
      })),
    ],
  },
];

const aiotList = [
  {
    rows: ['10vw'],
    style: {
      borderBottom: '2px solid #0099FF',
    },
    columns: [titleWidth, 'repeat(2,auto)'],
    areas: [
      { name: 'title', start: [0, 0], end: [0, 0] },
      { name: 'travel_integration', start: [1, 0], end: [1, 0] },
      { name: 'smart_agriculture', start: [2, 0], end: [2, 0] },
    ],
    areaList: [
      makeTilte({ title: '产品方案' }),
      ...[
        {
          area: 'travel_integration',
          children: '交旅融合',
        },
        {
          area: 'smart_agriculture',
          children: '智慧农业',
        },
      ].map(({ area, children }) => ({
        area,
        background: blueColor,
        justify: 'around',
        children,
        style: titleFontStyle,
      })),
    ],
  },
  {
    rows: ['3vw', '3vw', '3vw'],
    columns: [titleWidth, 'repeat(3,auto)'],
    areas: [
      { name: 'title', start: [0, 0], end: [0, 2] },
      { name: 'va', start: [1, 0], end: [1, 0] },
      { name: 'mqtt', start: [1, 1], end: [1, 1] },
      { name: 'webipc', start: [1, 2], end: [1, 2] },
      { name: 'mv', start: [2, 0], end: [2, 0] },
      { name: 'lbs', start: [2, 1], end: [2, 1] },
      { name: 'aitem', start: [2, 2], end: [2, 2] },
      { name: 'billing', start: [4, 0], end: [4, 0] },
      { name: 'tsdb', start: [3, 1], end: [3, 1] },
      { name: 'aipepole', start: [3, 2], end: [3, 2] },
    ],
    areaList: [
      makeTilte({ title: ['AIoT PaaS', '平台'] }),
      ...[
        { area: 'va', children: '音视频传输' },
        { area: 'billing', children: 'Billing' },
        { area: 'mqtt', children: 'MQTT（接入）' },
        { area: 'tsdb', children: 'TSDB（存储）' },
        { area: 'webipc', children: '金乌Web IPC ' },
        { area: 'aipepole', children: '智能机器人' },
      ].map((data) => ({
        ...data,
        background: '#66CCCC',

        style: {
          color: '#000',
          ...titleFontStyle,
        },
      })),
      ...[
        { area: 'mv', children: '机器视觉' },
        { area: 'lbs', children: 'LBS（位置）' },
        { area: 'aitem', children: '智能感知终端' },
      ].map((data) => ({
        ...data,
        background: '#CC9933',
        style: {
          color: '#000',
          ...titleFontStyle,
        },
      })),
    ],
  },
  {
    rows: ['10vw'],
    columns: [titleWidth, 'repeat(3,auto)'],
    areas: [
      { name: 'title', start: [0, 0], end: [0, 0] },
      { name: 'aicenter', start: [1, 0], end: [1, 0] },
      { name: 'net', start: [2, 0], end: [2, 0] },
      { name: 'more', start: [3, 0], end: [3, 0] },
    ],
    areaList: [
      makeTilte({ title: '基础设备' }),
      ...[
        {
          area: 'aicenter',
          children: '智能算力中心',
        },
        {
          area: 'net',
          children: '网络通信',
        },
        {
          area: 'more',
          children: '......',
        },
      ].map(({ area, children }) => ({
        area,
        background: blueColor,
        justify: 'around',
        children,
        style: titleFontStyle,
      })),
    ],
  },
];

const Product = () => {
  return (
    <>
      {[
        { id: 'product_travel_integration', title: '交旅融合', list: [smartApp, engine, facility] },
        {
          id: 'product_smart_agriculture',
          title: '智慧农业',
          list: agricultureList,
        },
        {
          id: 'product_aiot',
          title: 'AIoT PaaS',
          list: aiotList,
        },
      ].map(({ id, title, list }) => (
        <Box
          key={title}
          height={{
            min: '100vh',
          }}
          id={id}
          align='center'
          pad='1vw'
          gap='1vw'
          style={{
            color: '#fff',
          }}
        >
          <Box
            width={'30vw'}
            height='4vw'
            style={{
              border: `2px solid ${blueColor}`,
              borderRadius: '10px',
              textAlign: 'center',
              lineHeight: '4vw',
              fontSize: '2vw',
              background: '#fff',
              color: blueColor,
            }}
          >
            {title}
          </Box>
          <HomeTable list={list}></HomeTable>
        </Box>
      ))}
    </>
  );
};

export { Product };
