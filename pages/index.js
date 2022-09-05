import { withProjectPage, About, Aiot, Case, Background, Contact } from '../components';
import { PageStyle } from '../components/common/head';
import { Grommet, Button, Box, Text } from 'grommet';

const titleStyle = {
  fontSize: '5vw',
  lineHeight: '5vw',
  color: '#fff',
};

const Component = () => {
  return (
    <Grommet
      full
      algin='center'
      overflow={{ vertical: 'scroll' }}
      background='linear-gradient(to bottom right, #00CCFF, #0033CC)'
    >
      <Box id='main' style={PageStyle} height={'100vh'} justify='center'>
        <Box
          margin={{
            left: '5vw',
          }}
          width={'31vw'}
          height={'20vw'}
        >
          <Box flex={true} style={titleStyle}>
            上海大晓智能
          </Box>
          <Box flex={true} style={titleStyle}>
            科技有限公司
          </Box>
          <Box margin={'1.5vw 0'} background={'#fff'} height='1px' width={'auto'}></Box>
          <Box
            style={{
              fontSize: '1.5vw',
              lineHeight: '1.5vw',
              color: '#fff',
            }}
          >
            科技服务美好生活
          </Box>
        </Box>
      </Box>
      <About></About>
      {[
        { name: '2', id: 'product_travel_integration' },
        { name: '3', id: 'product_smart_agriculture' },
        { name: '4', id: 'product_aiot' },
      ].map(({ name, id }) => (
        <img
          id={id}
          key={name}
          style={{
            ...PageStyle,
            width: '100%',
            objectFit: 'contain',
          }}
          src={`https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/${name}.png`}
        ></img>
      ))}
      <Aiot></Aiot>
      <Case />
      <Background />
      <Contact />
    </Grommet>
  );
};

const Page = withProjectPage({ Component, background: 'linear-gradient(to bottom right, #00CCFF, #0033CC)' });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
