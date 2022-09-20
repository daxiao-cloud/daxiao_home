import { Box } from 'grommet';
import { PageStyle } from '../common/head';
const highLightColor = { color: '#00FFCC' };

const TextStyle = {
  width: 'auto',
  fontSize: '1.5vw',
  lineHeight: '2.5vw',
  color: '#fff',
  letterSpacing: '1px',
};

const About = () => {
  return (
    <Box width={'100%'} id='about' height={'100vh'}>
      <Box
        margin={{
          top: '5vw',
        }}
        alignSelf='center'
        width='80vw'
        justify='center'
      >
        <Box
          flex={true}
          style={{
            fontSize: '3vw',
            lineHeight: '3vw',
            color: '#fff',
            letterSpacing: '5px',
          }}
        >
          公司介绍
        </Box>
        <Box width='15vw' margin={'1.5vw 0 1vw'} background={'#fff'} height='1px'></Box>
        <Box
          style={{
            fontSize: '1.5vw',
            lineHeight: '1.5vw',
            letterSpacing: '2px',
            ...highLightColor,
          }}
        >
          ABOUT US
        </Box>
        <Box margin={{ top: '3vw' }} gap='2vw'>
          <p style={TextStyle}>
            致力于交旅融合、智慧农业、产业互联网等领域的产品研发及能力转化。面向人工智能、车联网、物联网等新一代信息技术，为用户提供全栈自主研发的
            <span style={highLightColor}>“平台+应用”</span>
            智能化解决方案，助力行业企业及最终用户产业数字化。主要产品包括智能AIoT
            PaaS平台、智能网络视觉感知设备、各类 智能传感设备、数字交互平台等。
          </p>
          <p style={TextStyle}>
            我们将竭诚以高品质的智能化产品和全方位的贴身服务为您提供优质的用户体验。依托PaaS赋能行业、服务企业，着重打造交旅及农业科技应用标杆示范，目标三年内成为助力区域特色经济发展的第一科技品牌！
          </p>
          {/* <p
            style={{
              ...TextStyle,
              wordSpace: 'pre',
            }}
          >
            <br></br>
          </p> */}
          <p style={TextStyle}>
            我们的使命：<span style={highLightColor}>科技服务美好生活！</span>
          </p>
          {/* <Box></Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export { About };
