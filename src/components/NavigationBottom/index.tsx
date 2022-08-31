import { ArticleIcon, HomeIcon, MyPageIcon, RankIcon, RecordIcon } from '@/icons';
import { Flex } from '@/ui';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import Typography from '../Typography';

const Container = styled('div', {
  shouldForwardProp: shouldForwardProp(['size']),
})<{ size: number }>(({ size }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${size}, 1fr)`,
  borderTop: '1px solid #e6e6e6',
  paddingBottom: 16,
}));

const NavigationBottom = () => {
  const router = useRouter();

  const DATA = useMemo(
    () => [
      {
        icon: <HomeIcon color={router.pathname === '/home' ? '#666' : undefined} />,
        text: '홈',
        onClick: () => {
          router.push('/home');
        },
        color: router.pathname === '/home' ? '#666' : '#E6E6E6',
      },
      {
        icon: <RankIcon color={router.pathname === '/rank' ? '#666' : undefined} />,
        text: '랭킹',
        onClick: () => {
          router.push('/rank');
        },
        color: router.pathname === '/rank' ? '#666' : '#E6E6E6',
      },
      {
        icon: <ArticleIcon color={router.pathname === '/article' ? '#666' : undefined} />,
        text: '아티클',
        onClick: () => {
          router.push('/article');
        },
        color: router.pathname === '/article' ? '#666' : '#E6E6E6',
      },
      {
        icon: <RecordIcon color={router.pathname === '/history' ? '#666' : undefined} />,
        text: '기록',
        onClick: () => {
          router.push('/history');
        },
        color: router.pathname === '/history' ? '#666' : '#E6E6E6',
      },
      {
        icon: <MyPageIcon color={router.pathname === '/mypage' ? '#666' : undefined} />,
        text: '마이',
        onClick: () => {
          router.push('/mypage');
        },
        color: router.pathname === '/mypage' ? '#666' : '#E6E6E6',
      },
    ],
    [router]
  );

  const size = useMemo(() => DATA.length, [DATA.length]);

  return (
    <Container size={size}>
      {DATA.map((item, index) => {
        const { icon, text, onClick, color } = item;
        return (
          <Flex
            onClick={onClick}
            key={index}
            direction="column"
            alignItems={'center'}
            justifyContent="space-around"
            height={60}
          >
            {icon}
            <Typography color={color}>{text}</Typography>
          </Flex>
        );
      })}
    </Container>
  );
};

export default NavigationBottom;
