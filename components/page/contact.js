import { Anchor, Box, Text } from 'grommet';
import { Location, Mail } from 'grommet-icons';
// import AMapLoader from '@amap/amap-jsapi-loader';
import { useEffect } from 'react';
const loadMap = async () => {
  const { default: AMapLoader } = await import('@amap/amap-jsapi-loader');
  const position = [121.3231, 31.212283];
  const AMap = await AMapLoader.load({
    key: 'c4d7e680f22b2d5259917c3c11db3aba',
    version: '2.0',
  });
  const map = new AMap.Map('container', {
    zoom: 16, //级别
    center: position, //中心点坐标
    viewMode: '3D', //使用3D视图
  });
  const center = new AMap.Marker({
    position,
    title: '大晓智能',
  });
  map.add(center);
};
const Contact = () => {
  useEffect(() => {
    loadMap();
  }, []);

  return (
    <Box
      align='center'
      pad={{
        horizontal: 'xlarge',
        vertical: 'medium',
      }}
      flex={true}
      height={{
        min: '100%',
      }}
      justify='between'
      id='contact'
    >
      <Text
        style={{
          color: '#fff',
          fontSize: '3vw',
          lineHeight: '3vw',
        }}
      >
        科技服务美好生活
      </Text>
      <Box width={'100%'} direction='row' justify='between'>
        <Box id='container' flex={{ shrink: 1 }} width={'40vw'}></Box>
        <img
          src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/scape.jpg'
          style={{
            width: '40vw',
            flex: '0 1 auto',
            objectFit: 'cover',
          }}
        ></img>
      </Box>
      <Box gap='medium' width={'100%'} justify='around'>
        <Box direction='row' gap='small' align='center'>
          <Location color='#00FFCC' />
          <Box gap='xxsmall'>
            <Anchor
              href='https://surl.amap.com/3RWlpkqbKs'
              label='上海虹桥国际中央商务区虹桥国际展汇1幢3楼'
              color='#fff'
              target={'_blank'}
            ></Anchor>

            <Text color={'#fff'} size='small'>
              上海市闵行区申昆路2377号
            </Text>
          </Box>
        </Box>
        <Box direction='row' gap='small' align='center'>
          <Mail color='#00FFCC' />
          <Text color='#fff'>邮箱：yunasha@daxiaogroup.com </Text>
        </Box>
      </Box>
    </Box>
  );
};

export { Contact };
