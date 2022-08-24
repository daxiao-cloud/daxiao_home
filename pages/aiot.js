import { withProjectPage } from '../components';

import { Box, Text } from 'grommet';

import { RadialSelected } from 'grommet-icons';

const hlc = '#00CCFF';

const fontStyle = {
  fontSize: '2vw',
  lineHeight: '5vw',
  letterSpacing: '2px',
};

const ShowP = ({ children }) => (
  <Box direction='row' align='center' gap='10px'>
    <RadialSelected size='large' color={hlc}></RadialSelected>
    <p style={fontStyle}>{children}</p>
  </Box>
);

const HighLightText = ({ children }) => (
  <Text
    style={{
      ...fontStyle,
      color: hlc,
    }}
  >
    {children}
  </Text>
);

const Component = () => {
  return (
    <Box flex={true} direction='row' align='center' justify='around'>
      <Box width='25vw'>
        <p
          style={{
            ...fontStyle,
            color: '#fff',
            background: hlc,
            borderRadius: '1vw',
            textAlign: 'center',
          }}
        >
          金乌 Web IPC
        </p>
        <Box
          background={hlc}
          height='30vw'
          align='center'
          justify='between'
          style={{
            marginTop: '1vw',
            padding: '3vw 10% 2vw',
            borderRadius: '2vw',
          }}
        >
          <img
            src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/jw.png'
            style={{
              objectFit: 'contain',
              // width: '80%',
            }}
          ></img>
          <p
            style={{
              ...fontStyle,
              color: hlc,
              background: '#fff',
              borderRadius: '1vw',
              height: '4vw',
              lineHeight: '4vw',
              width: '100%',
              textAlign: 'center',
            }}
          >
            大晓金乌1号
          </p>
        </Box>
      </Box>
      <Box>
        <Box height={'6vw'}>
          <img
            src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.png'
            style={{
              objectFit: 'contain',
              height: ' 100%',
              alignSelf: 'end',
            }}
          ></img>
        </Box>
        <Box>
          <ShowP>
            高达 3K（<HighLightText>3200×1800</HighLightText>）的视频分辨率。
          </ShowP>
          <ShowP>
            全新视频传输技术，<HighLightText>全球</HighLightText>视频延时<HighLightText>最小</HighLightText>。
          </ShowP>
          <ShowP>
            全新控制技术， 端到端加密，<HighLightText>全球</HighLightText>安全性
            <HighLightText>最高</HighLightText>。
          </ShowP>
          <ShowP>
            <HighLightText>温度、湿度、位置</HighLightText>等全息感知。
          </ShowP>
          <ShowP>
            支持<HighLightText>5G/4G</HighLightText>蜂窝网络。
          </ShowP>
          <ShowP>
            符合<HighLightText>IP66</HighLightText>防护标准。
          </ShowP>
        </Box>
      </Box>
    </Box>
  );
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
