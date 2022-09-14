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

const makeTilte = ({ title } = {}) => ({
  area: 'title',
  background: highColor,
  flex: false,
  children: (
    <Text color='#fff' style={tileStyle}>
      {title}
    </Text>
  ),
});

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
      { area: 'bigdata', children: 'AI计算' },
      { area: 'safety', children: '大数据计算存储' },
      { area: 'ai', children: '安全防护' },
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

const Product = () => {
  return (
    <Box
      height={{
        min: '100vh',
      }}
      id='product_travel_integration'
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
        交旅融合
      </Box>
      <HomeTable list={[smartApp, engine, facility]}></HomeTable>
    </Box>
  );
};

export { Product };
