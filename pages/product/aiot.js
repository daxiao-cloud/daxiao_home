import { withProjectPage } from '../../components';

import { Box } from 'grommet';

const Component = () => {
  return (
    <Box
      flex={true}
      justify='center'
      align='center'
      background={{
        image: 'url(https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/4.png)',
        repeat: 'no-repeat',
        position: 'center ',
        size: 'contain',
      }}
    ></Box>
  );
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
