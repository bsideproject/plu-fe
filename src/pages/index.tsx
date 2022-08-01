import type { GetServerSideProps, NextPage } from 'next';
import styled from '@emotion/styled';

import { serviceQueryKey } from '@/commons/serviceQueryKey';
import { testRequest } from '@/networks/test';
import { useTestQuery } from '@/hooks/test';
import { prefetchQueryWithSSR } from '@/commons/prefetchQuery';

const MyStyleComponent = styled.div({ backgroundColor: 'red' });

const Home: NextPage = () => {
  const { data } = useTestQuery();

  return <MyStyleComponent>hello, bside {data}</MyStyleComponent>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resources = [{ key: serviceQueryKey.FETCH_TEST(), fetcher: testRequest }];

  const { dehydratedState } = await prefetchQueryWithSSR(resources);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default Home;
