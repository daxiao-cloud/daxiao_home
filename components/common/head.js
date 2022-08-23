import { Header, Anchor, Box, Paragraph, Drop, Button, Menu, Text } from 'grommet';
import { User, Logout, Group, Cloud } from 'grommet-icons';
import Router from 'next/router';
// import setLanguage from 'next-translate/setLanguage';
// import useTranslation from 'next-translate/useTranslation';
// import { SelectLanguageGrommet } from '../index';
import { sessionKey, tokenKey } from '../../data/cookie';

const Head = ({ list = [], background, headerStyle = {}, href, iconBackground, iconColor }) => {
  // const { username = '', name = '' } = userInfo || {};
  //console.log('userInfo', userInfo);
  const lang = '';
  // const { lang } = useTranslation();

  const listItem = list?.map((item) => {
    return {
      label: <Box align='center'>{item.label}</Box>,
      onClick: item.onClick,
      icon: (
        <Box pad={{ right: 'small' }}>
          <item.icon />
        </Box>
      ),
    };
  });

  return (
    <Header
      background={background || 'white'}
      width='100%'
      flex={{ shrink: 0 }}
      direction='row'
      pad={{ horizontal: 'medium', vertical: 'xsmall' }}
      border='bottom'
      justify='start'
      {...headerStyle}
    ></Header>
  );
};

export { Head };
