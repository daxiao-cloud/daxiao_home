import { Header, Anchor, Box, Paragraph, Drop, Button, Menu, Text, DropButton } from 'grommet';
import { User, Logout, Group, Cloud } from 'grommet-icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import setLanguage from 'next-translate/setLanguage';
// import useTranslation from 'next-translate/useTranslation';
// import { SelectLanguageGrommet } from '../index';
import { sessionKey, tokenKey } from '../../data/cookie';

const height = '64px';

const head = {
  '#main': {
    name: '首页',
    order: 1,
  },
  '#about': {
    name: '公司介绍',
    order: 2,
  },
  // '/product': {
  //   name: '产品方案',
  // },
  '#aiot': {
    name: '智能设备',
    order: 13,
  },
  // '#case': {
  //   name: '案例介绍',
  //   order: 14,
  // },
  '#backgroud': {
    name: '创新引领',
    order: 15,
  },
  '#contact': {
    name: '联系我们',
    order: 16,
  },
};

const Head = ({ list = [], background, headerStyle = {}, href, iconBackground, iconColor }) => {
  // const { username = '', name = '' } = userInfo || {};
  //console.log('userInfo', userInfo);
  const lang = '';
  // const { lang } = useTranslation();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <Header
      width='100%'
      height={height}
      flex={{ shrink: 0 }}
      direction='row'
      justify='around'
      align='center'
      gap='none'
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        ...headerStyle,
      }}
    >
      <Box width={'small'} flex={false}>
        <img
          height={'36px'}
          style={{
            objectFit: 'contain',
          }}
          src='https://daxiaocloud.oss-accelerate.aliyuncs.com/home/images/logo.svg'
        ></img>
      </Box>
      {Object.entries(head).map(([path, value]) => {
        // const active = router.pathname.split('/')[1] === path.replace('/', '');
        const active = router.pathname === path;
        // const active = true;1
        // console.log(Router);

        return (
          <Anchor
            key={path}
            color={'#fff'}
            href={path}
            label={value.name}
            style={{
              order: value.order,
              width: '100px',
              height: '50px',
              lineHeight: '50px',
              padding: '0',
              outline: 'none',
              textDecoration: 'none !important',
              borderRadius: '25px',
              textAlign: 'center',
              background: active ? '#0099FF' : 'transparent',
            }}
          ></Anchor>
        );
      })}

      <DropButton
        order={5}
        plain={true}
        label='解决方案'
        color={'#fff'}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        style={{
          order: 5,
          fontWeight: 600,
          height: '50px',
          // background: router.pathname.split('#').pop === 'product' ? '#0099FF' : '',
        }}
        onClose={() => setOpen(false)}
        dropProps={{
          align: {
            top: 'bottom',
          },
        }}
        dropContent={
          <Box
            align='center'
            pad={{ horizontal: '20px' }}
            gap='20px'
            height={'50px'}
            direction='row'
            background={'#00CCFF'}
            style={{}}
          >
            {[
              { label: '交旅融合', color: '#fff', href: '#product_travel_integration' },
              { label: '智慧农业', color: '#fff', href: '#product_smart_agriculture' },
              { label: 'AIoT Paas', color: '#fff', href: '#product_aiot' },
            ].map((props, i) => (
              <Anchor key={i} {...props}></Anchor>
            ))}
          </Box>
        }
      />
    </Header>
  );
};

{
  /* <Menu
        icon={false}
        dropBackground='#00CCFF'
        label='解决方案'
        color='#fff !important'
        style={{
          fontWeight: 600,
          background: router.pathname.split('/')[1] === 'product' ? '#0099FF' : '',
          borderRadius: '25px',
          width: '100px',
          height: '50px',
          lineHeight: '50px',
        }}
        order={5}
        items={[
          // { label: '介绍', color: '#fff', href: '#product' },
          { label: '交旅融合', color: '#fff', href: '#product_travel_integration' },
          { label: '智慧农业', color: '#fff', href: '#product_smart_agriculture' },
          { label: 'AIoT Paas', color: '#fff', href: '#product_aiot' },
        ]}
      ></Menu> */
}

const HeadBox = () => <Box height={height} flex={{ shrink: 0 }}></Box>;

const PageStyle = {};

export { Head, height as headHeight, PageStyle };
