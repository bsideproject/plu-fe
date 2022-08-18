import { NavigationIcon } from '@/icons';
import { Flex } from '@/ui';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
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
        icon: <NavigationIcon />,
        text: '홈',
        onClick: () => {
          router.push('/');
        },
      },
      {
        icon: <NavigationIcon />,
        text: '랭킹',
        onClick: () => {
          router.push('/rank');
        },
      },
      {
        icon: <NavigationIcon />,
        text: '아티클',
        onClick: () => {
          router.push('/article');
        },
      },
      {
        icon: <NavigationIcon />,
        text: '기록',
        onClick: () => {
          router.push('/history');
        },
      },
      {
        icon: <NavigationIcon />,
        text: '마이',
        onClick: () => {
          router.push('/mypage');
        },
      },
    ],
    [router]
  );

  const size = useMemo(() => DATA.length, [DATA.length]);

  return (
    <Container size={size}>
      {DATA.map((item, index) => {
        const { icon, text, onClick } = item;
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
            <Typography color="#007AFF">{text}</Typography>
          </Flex>
        );
      })}
    </Container>
  );
};

export default NavigationBottom;
