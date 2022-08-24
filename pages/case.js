import { withProjectPage } from '../components';

import Router from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Box, Text } from 'grommet';
import { Close } from 'grommet-icons';

const Video = ({ texts, name, img = '', videoStyle = {}, videoProps = {} }) => {
  return (
    <Box align='center'>
      <Box
        align='center'
        pad='20px'
        background={{
          image: img ? `url(https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/${img}.png)` : 'none',
          repeat: 'no-repeat',
          position: 'center',
          size: 'cover',
        }}
      >
        <video
          preload={true}
          controls={true}
          src={`https://daxiaocloud.oss-accelerate.aliyuncs.com/home/video/${name}.mp4`}
          {...videoProps}
          style={{
            objectFit: 'contain',
            ...videoStyle,
          }}
        ></video>
      </Box>
      {texts.map((text) => (
        <Text
          key={text}
          color='#fff'
          style={{
            fontSize: '1.2vw',
            height: '2vw',
            lineHeight: '2vw',
            fontWeight: 600,
          }}
        >
          {text}
        </Text>
      ))}
    </Box>
  );
};

const Component = () => {
  return (
    <Box flex={true} justify='around' gap='10px'>
      <Video
        videoStyle={{
          width: '50vw',
        }}
        videoProps={{
          autoPlay: true,
        }}
        name='sx'
        texts={['历史文化名城 - 自动驾驶与车路协同 IOC']}
      ></Video>
      <Box direction='row' justify='around'>
        {[
          {
            name: 'sy1',
            texts: ['最后的江南秘境', '景区全域沉浸式体验'],
          },
          {
            name: 'ft4',
            texts: ['农林牧渔', '清洁能源生产与运行'],
          },
          {
            name: 'wz',
            texts: ['东南海滨城市', '城市拥堵指数研判'],
          },
        ].map((props, i) => (
          <Video
            key={i}
            videoStyle={{
              width: '20vw',
            }}
            img='vs'
            {...props}
          ></Video>
        ))}
      </Box>
    </Box>
  );
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
