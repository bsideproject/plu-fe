import styled from '@emotion/styled';

interface Props {
  inner?: boolean;
}

const MainLayout = styled('div')<Props>(({ inner }) => ({
  padding: inner ? '0 16px ' : '0 20px 16px',
  height: inner ? undefined : '100%',
}));

export default MainLayout;
