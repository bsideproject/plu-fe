import { NavigationIcon } from '@/icons';
import { Flex } from '@/ui';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { useMemo } from 'react';
import Typography from '../Typography';
import { NavigationBottomData, NavigationBottomProps } from './types';

const Container = styled('div', {
  shouldForwardProp: shouldForwardProp(['size']),
})<{ size: number }>(({ size }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${size}, 1fr)`,
  borderTop: '1px solid #e6e6e6',
  paddingBottom: 16,
}));

const DATA: NavigationBottomData[] = [
  {
    icon: <NavigationIcon />,
    text: '홈',
  },
  {
    icon: <NavigationIcon />,
    text: '랭킹',
  },
  {
    icon: <NavigationIcon />,
    text: '아티클',
  },
  {
    icon: <NavigationIcon />,
    text: '기록',
  },
  {
    icon: <NavigationIcon />,
    text: '마이',
  },
];

const NavigationBottom = (props: NavigationBottomProps) => {
  const { data = DATA } = props;

  const size = useMemo(() => data.length, [data.length]);

  return (
    <Container size={size}>
      {data.map((item, index) => {
        const { icon, text } = item;
        return (
          <Flex key={index} direction="column" alignItems={'center'} justifyContent="space-around" height={60}>
            {icon}
            <Typography color="#007AFF">{text}</Typography>
          </Flex>
        );
      })}
    </Container>
  );
};

export default NavigationBottom;
