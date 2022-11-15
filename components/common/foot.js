import { Box, Text, Anchor, Footer } from 'grommet';
const Foot = () => {
  return (
    <Footer height={'36px'} align='center' justify='center' color='#fff'>
      <Anchor
        target={'_blank'}
        href='https://beian.miit.gov.cn/'
        label='沪ICP备2022022681号-3'
        color={'#00FFCC'}
      ></Anchor>
      <Text color='#fff'>
        Copyright © {new Date().getFullYear()} DaXiao All Rights Reserved. 大晓智能 版权所有
      </Text>
    </Footer>
  );
};

export { Foot };
