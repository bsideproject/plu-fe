import type { NextPage } from 'next';
import styled from '@emotion/styled';

const MyStyleComponent = styled.div({ backgroundColor: 'red' });

const Home: NextPage = () => {
  return <MyStyleComponent>hello, bside</MyStyleComponent>;
};

export default Home;
