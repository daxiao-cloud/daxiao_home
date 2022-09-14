import { Button, Box, Text } from 'grommet';
import { PageStyle } from '../common/head';

const hlc = '#1F4BD0';
const fontStyle = { fontSize: '1.5vw', lineHeight: '2vw', letterSpacing: '2px' };
const HighLightText = ({ children }) => (
  <Text color={hlc} style={fontStyle}>
    {children}
  </Text>
);
const ShowP = ({ children }) => (
  <p
    className='ShowPText'
    style={{
      ...fontStyle,
      width: '40vw',
      textAlign: 'justify',
      whiteSpace: 'pre-wrap',
    }}
  >
    {children}
  </p>
);

const Background = () => {
  return (
    <Box id='backgroud' style={PageStyle} height={'100%'} justify='center'>
      <Box
        direction='row'
        gap='10vw'
        alignSelf='center'
        justify='center'
        height={{
          height: '80vh',
          min: '40vw',
        }}
      >
        <img
          style={{
            objectFit: 'contain',
          }}
          src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/jim2.jpg'
        ></img>
        <Box
          width={'50vw'}
          background={'#fff'}
          align='center'
          pad='3vw'
          gap='10%'
          style={{
            borderRadius: '1vw',
          }}
        >
          <p
            style={{
              width: '100%',
              height: '5vw',
              lineHeight: '5vw',
              textAlign: 'center',
              borderRadius: '2.5vw',
              color: hlc,
              fontSize: '1.5vw',
              fontWeight: 600,
              margin: '2vw 0 5vw',
              background: 'linear-gradient(to right, #E3E9FF, #B7C5FF) ',
            }}
          >
            大晓智能 – CTO 金蒙
          </p>
          <ShowP>
            曾任百度云智能物联网 <HighLightText>核心产品发起人、研发 负责人</HighLightText>
          </ShowP>
          <Box></Box>
          <ShowP>
            曾任Microsoft (微软) 亚洲工程院 - <HighLightText>软件架构师</HighLightText>
          </ShowP>
        </Box>
      </Box>
    </Box>
  );
};
export { Background };
