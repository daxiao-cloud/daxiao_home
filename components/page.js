import { useEffect, useState } from 'react';
import { Head, Login, NotificationLayer } from './index';
import { LinkPrevious } from 'grommet-icons';
import { Grommet, Box } from 'grommet';
import Router from 'next/router';

// color: 'error',
// message: '',
// open: false,

const withProjectPage = ({
  getData,
  show: { back = true } = {},
  Component = () => null,
  fnc = {},
  head = {},
  background = 'linear-gradient(to bottom left, #00CCFF, #0033CC)',
}) => {
  const PageComponent = ({ delegate, pageProps } = {}) => {
    const [noti, setNoti] = useState({ color: '', message: '', open: false });
    useEffect(() => {
      delegate?.setNotification(() => setNoti);
    }, []);
    //console.log('PageComponent',pageProps);

    return (
      <Grommet full>
        <Box width='100vw' height='100vh' justify='center' background={background} overflow='auto'>
          <Head headerStyle={head.style?.header} />
          <Box
            // width={{ max: '100vw', width: '100vw' }}
            // height={{ max: '100vh', height: '100vh' }}
            width={'100%'}
            flex={true}
            alignSelf='center'
            style={{ minWidth: '200px', boxSizing: 'border-box' }}
          >
            {/* {back && <NavBack />} */}
            <Component {...delegate} fnc={fnc} {...pageProps} />
            <NotificationLayer {...noti}></NotificationLayer>
          </Box>
        </Box>
      </Grommet>
    );
  };

  PageComponent.makeGetServerSideProps = ({ pageServerSide = () => {} } = {}) => {
    return async (config) => {
      // const cookie = config.req?.headers?.cookie;
      const {
        req: {
          headers: { cookie, host },
        },
        query,
      } = config;

      pageServerSide(config);
      return {
        props: {
          query,
        },
      };
    };
  };

  return PageComponent;
};

export { withProjectPage };
