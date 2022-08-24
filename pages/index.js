import { withProjectPage } from '../components';

import { Button, Box, Text } from 'grommet';

const titleStyle = {
  fontSize: '5vw',
  lineHeight: '5vw',
  color: '#fff',
};

const Component = () => {
  return (
    <Box height={'100%'} justify='center'>
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
  );
};

const Page = withProjectPage({ Component, background: 'linear-gradient(to bottom right, #00CCFF, #0033CC)' });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
