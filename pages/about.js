import { withProjectPage } from '../components';

import Router from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Box, Text, Paragraph } from 'grommet';
import { Close } from 'grommet-icons';

const highLightColor = { color: '#00FFCC' };

const TextStyle = {
  width: '26vw',
  fontSize: '1.5vw',
  lineHeight: '2.5vw',
  color: '#fff',
  letterSpacing: '1px',
};

const Component = () => {
  return (
    <Box height={'100%'}>
      <Box
        margin={{
          left: '5vw',
          top: '5vw',
        }}
      >
        <Box
          flex={true}
          style={{
            fontSize: '3vw',
            lineHeight: '3vw',
            color: '#fff',
            letterSpacing: '5px',
          }}
        >
          公司介绍
        </Box>
        <Box width='15vw' margin={'1.5vw 0 1vw'} background={'#fff'} height='1px'></Box>
        <Box
          style={{
            fontSize: '1.5vw',
            lineHeight: '1.5vw',
            letterSpacing: '2px',
            ...highLightColor,
          }}
        >
          ABOUT US
        </Box>
        <Box margin={{ top: '3vw' }} direction='row' gap='4vw'>
          <p style={TextStyle}>
            致力于交旅融合、智慧农业、产业互 联网等领域的产品研发及能力转化。 面向人工智能、车联网、物联网等新
            一代信息技术，为用户提供全栈自主 研发的<span style={highLightColor}>“平台+应用”</span>智能化解决方
            案，助力行业企业及最终用户产业数 字化。主要产品包括智能AIoT PaaS 平台、智能网络视觉感知设备、各类
            智能传感设备、数字交互平台等。
          </p>
          <Box>
            <p style={TextStyle}>
              我们将竭诚以高品质的智能化产品和 全方位的贴身服务为您提供优质的用 户体验。依托PaaS赋能行业 、
              服务 企业，着重打造交旅及农业科技应用 标杆示范，目标三年内成为助力区域
              特色经济发展的第一科技品牌！
            </p>
            <p
              style={{
                ...TextStyle,
                wordSpace: 'pre',
              }}
            >
              <br></br>
            </p>
            <p style={TextStyle}>
              我们的使命：<span style={highLightColor}>科技服务美好生活！</span>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
