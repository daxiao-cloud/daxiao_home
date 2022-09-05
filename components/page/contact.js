import { Box, Text } from 'grommet';

const Contact = () => {
  return (
    <Box align='center' flex={true} height={'200px'} justify='end' id='contact'>
      <Box pad={{ bottom: '30px' }} width={'100%'} direction='row' justify='around'>
        <Text color='#fff'>邮箱：yunasha@daxiaogroup.com </Text>
        <Text color='#fff'>地址：上海市闵行区申昆路2377号虹桥国际展汇1号楼301b,302-304</Text>
      </Box>
    </Box>
  );
};

export { Contact };
