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

const makeTilte = ({ title, area = '1/1' } = {}) => {
  const list = Array.isArray(title) ? title : [title];
  return {
    area,
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
  columns: [titleWidth, 'repeat(4,1fr)'],
  areaList: [
    makeTilte({ title: '智能应用层', area: '1/1' }),
    ...[
      {
        area: '1/2',
        title: '智慧管理服务',
        texts: ['指挥调度 | AI慧眼', '无人环卫 | 智慧公厕'],
      },
      {
        area: '1/3',
        title: '畅行交通',
        texts: ['智能导航 | 智能停车', '自动驾驶服务 | 约车服务'],
      },
      {
        area: '1/4',
        title: '沉浸体验',
        texts: ['人机交互 | 数字伴游', '虚拟导游（AR/VR） '],
      },
      {
        area: '1/5',
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
  columns: [titleWidth, 'repeat(3,1fr)'],
  areaList: [
    makeTilte({ title: '智能引擎层', area: '1/1/3/2' }),
    ...[
      {
        area: '1/2',
        title: '音视频传输',
      },
      {
        area: '1/3',
        title: '机器视觉',
      },
      {
        area: '1/4',

        title: 'Billing',
      },
      {
        area: '2/2',
        title: 'MQTT（接入）',
      },
      {
        area: '2/3',
        title: 'LBS（位置）',
      },
      {
        area: '2/4',
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
  columns: [titleWidth, 'repeat(4,1fr)'],

  areaList: [
    makeTilte({ title: '基础设施层', area: '1/1/5/2' }),
    ...[
      {
        area: '1/2',
        title: '智能设备',
      },
      {
        area: '1/3',
        title: '智能算力中心',
      },
      {
        area: '1/4',
        title: '智能地图',
      },
      {
        area: '1/5',
        title: '智能终端',
      },
    ].map(({ area, title }) => ({
      area,
      background: blueColor,
      children: title,
      style: titleFontStyle,
    })),
    ...[
      { area: '2/2', children: '智能视觉设备' },
      { area: '3/2', children: '智能传感器' },
      { area: '4/2', children: '自动驾驶汽车' },
      { area: '2/4', children: '导航地图' },
      { area: '3/4', children: '高清地图' },
      { area: '4/4', children: '手绘地图' },
    ].map((data) => ({
      ...data,
      background: '#66CCCC',
      style: {
        color: '#000',
      },
    })),
    ...[
      { area: '2/3', children: 'AI计算' },
      { area: '3/3', children: '大数据计算存储' },
      { area: '4/3', children: '安全防护' },
      { area: '2/5', children: 'AR/VR设备' },
      { area: '3/5', children: '车载交互屏' },
      { area: '4/5', children: '室外交互屏' },
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
    columns: [titleWidth, 'repeat(5,1fr)'],

    areaList: [
      makeTilte({ title: '智能应用层' }),
      ...[
        {
          area: '1/2',
          texts: ['种植/养殖', '监控与管理'],
        },
        {
          area: '1/3',
          texts: ['场地/机械', '监测与运行'],
        },
        {
          area: '1/4',
          texts: ['产品品质', '跟踪与监测'],
        },
        {
          area: '1/5',
          texts: ['科技文旅', '融合与创新'],
        },
        {
          area: '1/6',
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
    columns: [titleWidth, 'repeat(4,1fr)'],
    areaList: [
      makeTilte({ title: '基础设施层', area: '1/1/5/2' }),
      ...[
        {
          area: '1/2',
          title: '智能设备',
        },
        {
          area: '1/3',
          title: '智能算力中心',
        },
        {
          area: '1/4',
          title: '智能地图',
        },
        {
          area: '1/5',
          title: '网络通信',
        },
      ].map(({ area, title }) => ({
        area,
        background: blueColor,
        children: title,
        style: titleFontStyle,
      })),
      ...[
        { area: '2/2', children: '智能视觉设备' },
        { area: '3/2', children: '智能传感器' },
        { area: '4/2', children: '智能农机化' },
        { area: '2/4', children: '导航地图' },
        { area: '3/4', children: '高清地图' },
        { area: '4/4', children: '手绘地图' },
      ].map((data) => ({
        ...data,
        background: '#66CCCC',
        style: {
          color: '#000',
        },
      })),
      ...[
        { area: '2/3', children: 'AI计算' },
        { area: '3/3', children: '大数据计算存储' },
        { area: '4/3', children: '安全防护' },
        { area: '2/5', children: '5G/4G网络' },
        { area: '3/5', children: '专线网络' },
        { area: '4/5', children: 'NBLora…' },
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
    columns: [titleWidth, 'repeat(2,1fr)'],

    areaList: [
      makeTilte({ title: '产品方案' }),
      ...[
        {
          area: '1/2',
          children: '交旅融合',
        },
        {
          area: '1/3',
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
    style: {
      borderBottom: '2px solid #0099FF',
    },
    rows: ['3vw', '3vw', '3vw'],
    columns: [titleWidth, 'repeat(3,1fr)'],
    areaList: [
      makeTilte({ title: ['AIoT PaaS', '平台'], area: '1/1/4/2' }),
      ...[
        { area: '1/2', children: '音视频传输' },
        { area: '1/4', children: 'Billing' },
        { area: '2/2', children: 'MQTT（接入）' },
        { area: '2/4', children: 'TSDB（存储）' },
        { area: '3/2', children: '金乌Web IPC ' },
        { area: '3/4', children: '智能机器人' },
      ].map((data) => ({
        ...data,
        background: '#66CCCC',

        style: {
          color: '#000',
          ...titleFontStyle,
        },
      })),
      ...[
        { area: '1/3', children: '机器视觉' },
        { area: '2/3', children: 'LBS（位置）' },
        { area: '3/3', children: '智能感知终端' },
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
    columns: [titleWidth, 'repeat(3,1fr)'],

    areaList: [
      makeTilte({ title: '基础设备' }),
      ...[
        {
          area: '1/2',
          children: '智能算力中心',
        },
        {
          area: '1/3',
          children: '网络通信',
        },
        {
          area: '1/4',
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
