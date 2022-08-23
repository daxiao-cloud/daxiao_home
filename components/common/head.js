import { Header, Anchor, Box, Paragraph, Drop, Button, Menu, Text } from 'grommet';
import { User, Logout, Group, Cloud } from 'grommet-icons';
import Router from 'next/router';
// import setLanguage from 'next-translate/setLanguage';
// import useTranslation from 'next-translate/useTranslation';
// import { SelectLanguageGrommet } from '../index';
import { sessionKey, tokenKey } from '../../data/cookie';

const head = {
  '/about': {
    name: '公司介绍',
  },
  '/product': {
    name: '产品方案',
  },
  '/aiot': {
    name: '智能设备',
  },
  '/case': {
    name: '案例介绍',
  },
  '/backgroud': {
    name: '研发背景',
  },
};

const Head = ({ list = [], background, headerStyle = {}, href, iconBackground, iconColor }) => {
  // const { username = '', name = '' } = userInfo || {};
  //console.log('userInfo', userInfo);
  const lang = '';
  // const { lang } = useTranslation();

  return (
    <Header
      width='100%'
      flex={{ shrink: 0 }}
      direction='row'
      pad={{ horizontal: 'medium', vertical: 'xsmall' }}
      justify='end'
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        ...headerStyle,
      }}
    >
      {Object.entries(head).map(([path, value]) => {
        const active = Router.pathname === path;
        return (
          <Anchor
            color={'#fff'}
            href={path}
            label={value.name}
            style={{
              padding: '10px',
              borderRadius: '5px',
              background: active ? '#0099FF' : 'transparent',
            }}
          ></Anchor>
        );
      })}
    </Header>
  );
};

export { Head };
