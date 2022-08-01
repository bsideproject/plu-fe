import type { GetServerSideProps, NextPage } from 'next';
import styled from '@emotion/styled';

import { serviceQueryKey } from '@/commons/serviceQueryKey';
import { testRequest } from '@/networks/test';
import { useTestQuery } from '@/hooks/test';
import { usePrefetchQuery } from '@/hooks/commons/prefetchQuery.hook';
import { fetchAdminInfo } from '@/networks/admin';


const MyStyleComponent = styled.div({ backgroundColor: 'red' });

const Home: NextPage = () => {
  const { data } = useTestQuery();

  return <MyStyleComponent>{data}</MyStyleComponent>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resources = [{ key: serviceQueryKey.FETCH_TEST(), fetcher: testRequest }];

  const { dehydratedState } = await usePrefetchQuery(resources);

  return {
    props: {
      dehydratedState,
    },
  };
};

export default Home;
