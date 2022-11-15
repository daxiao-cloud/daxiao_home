import { withProjectPage, About, Aiot, Case, Background, Contact, Product, Foot } from '../components';
import { PageStyle } from '../components/common/head';
import { Grommet, Button, Box, Text } from 'grommet';

const highColor = '#00FFCC';

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
      <Box id='main' align='center' style={PageStyle} height={'100vh'} justify='center'>
        <Box
          // margin={{
          //   left: '5vw',
          // }}
          width={'62vw'}
          height={'auto'}
        >
          <Box flex={true} style={titleStyle}>
            上海大晓智能科技有限公司
          </Box>
          <Box margin={'1.5vw 0'} background={'#fff'} height='1px' width={'auto'}></Box>
          <Box
            style={{
              fontSize: '2vw',
              lineHeight: '2vw',
              color: highColor,
              textAlign: 'center',
            }}
          >
            科技服务美好生活
          </Box>
        </Box>
      </Box>
      <About></About>
      <Product />

      <Aiot></Aiot>
      {/* <Case /> */}
      <Background />
      <Contact />
    </Grommet>
  );
};

const Page = withProjectPage({ Component, background: 'linear-gradient(to bottom right, #00CCFF, #0033CC)' });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
