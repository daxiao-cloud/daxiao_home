import { withProjectPage } from '../components';

import Router from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Box } from 'grommet';
import { Close } from 'grommet-icons';

const Component = () => {
  return <Box>home</Box>;
};

const Page = withProjectPage({ Component, background: 'linear-gradient(to bottom right, #00CCFF, #0033CC)' });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
