import { Header, Anchor, Box, Paragraph, Drop, Button, Menu, Text } from 'grommet';
import { User, Logout, Group, Cloud } from 'grommet-icons';
import { useRouter } from 'next/router';
// import setLanguage from 'next-translate/setLanguage';
// import useTranslation from 'next-translate/useTranslation';
// import { SelectLanguageGrommet } from '../index';
import { sessionKey, tokenKey } from '../../data/cookie';

const head = {
  '/about': {
    name: '公司介绍',
    order: 1,
  },
  // '/product': {
  //   name: '产品方案',
  // },
  '/aiot': {
    name: '智能设备',
    order: 3,
  },
  '/case': {
    name: '案例介绍',
    order: 4,
  },
  '/backgroud': {
    name: '研发背景',
    order: 5,
  },
};

const Head = ({ list = [], background, headerStyle = {}, href, iconBackground, iconColor }) => {
  // const { username = '', name = '' } = userInfo || {};
  //console.log('userInfo', userInfo);
  const lang = '';
  // const { lang } = useTranslation();
  const router = useRouter();

  return (
    <Header
      width='100%'
      flex={{ shrink: 0 }}
      direction='row'
      pad={{ horizontal: 'medium', vertical: 'xsmall' }}
      justify='end'
      style={{
        // position: 'absolute',
        // top: '20px',
        // right: '20px',
        ...headerStyle,
      }}
    >
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
      <Menu
        icon={false}
        dropBackground='#00CCFF'
        label='产品方案'
        color='#fff !important'
        style={{
          order: 2,
          fontWeight: 600,
          background: router.pathname.split('/')[1] === 'product' ? '#0099FF' : '',
          borderRadius: '25px',
          width: '100px',
          height: '50px',
          lineHeight: '50px',
        }}
        order={2}
        items={[
          { label: '介绍', color: '#fff', href: '/product' },
          { label: '交旅融合', color: '#fff', href: '/product/travel_integration' },
          { label: '智慧农业', color: '#fff', href: '/product/smart_agriculture' },
          { label: 'AIoT Paas', color: '#fff', href: '/product/aiot' },
        ]}
      ></Menu>
    </Header>
  );
};

export { Head };
