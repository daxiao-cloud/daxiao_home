import { withProjectPage } from '../components';

import Router from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Button, Box } from 'grommet';
import { Close } from 'grommet-icons';

const Component = () => {
  return <Box>home</Box>;
};

const Page = withProjectPage({ Component });

const getServerSideProps = Page.makeGetServerSideProps();

export { getServerSideProps };

export default Page;
