import { withProjectPage } from '../../components';

import Router from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Box, Anchor } from 'grommet';
import { Close } from 'grommet-icons';

const Component = () => {
  return (
    <Box
      flex={true}
      justify='center'
      align='center'
      background={{
        image: 'url(https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/1t.png)',
        repeat: 'no-repeat',
        position: 'center ',
        size: 'cover',
      }}
    >
      {[
        {
          props: {
            href: '/product/travel_integration',
            label: '交旅融合',
          },
          style: { transform: 'translate(-23vw, 3vw)' },
        },
        {
          props: {
            href: '/product/smart_agriculture',
            label: '智慧农业',
          },
          style: { transform: 'translate(23vw, -2vw)' },
        },
        {
          props: {
            href: '/product/aiot',
            label: 'AIoT Paas',
          },
          style: { transform: 'translate(0, 11.3vw)' },
        },
      ].map(({ props, style }, i) => (
        <Anchor
          key={i}
          color={'#fff'}
          {...props}
          style={{
            width: '20vw',
            height: '5vw',
            lineHeight: 'calc(5vw - 6px)',
            borderRadius: '25px',
            textAlign: 'center',
            fontSize: '2.5vw',
            background: '#0099FF',
            border: 'solid #00FFCC 3px',
            ...style,
          }}
        ></Anchor>
      ))}
    </Box>
  );
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
