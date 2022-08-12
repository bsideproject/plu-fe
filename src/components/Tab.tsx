import { Flex, FlexItem, Padding } from '@/ui';
import styled from '@emotion/styled';
import { useMemo } from 'react';
import Typography from './Typography';

const TabIndicator = styled('div')<{ tabLength: number; tabIndex: number }>(({ tabIndex, tabLength }) => {
  return {
    position: 'relative',
    width: `calc(100% / ${tabLength})`,
    height: 3,
    backgroundColor: '#000',
    transform: `translateX(${100 * tabIndex}%)`,
    borderRadius: 5,
    transition: '0.3s',
  };
});

interface Props {
  tabNames: string[];
  tabIndex: number;
  onChangeTabIndex: (tabIndex: number) => void;
}

const Tab = (props: Props) => {
  const { tabNames, tabIndex, onChangeTabIndex } = props;

  const tabLength = useMemo(() => tabNames.length, [tabNames]);

  return (
    <div>
      <Flex justifyContent={'space-between'}>
        {tabNames.map((name, index) => {
          return (
            <FlexItem onClick={() => onChangeTabIndex(index)} grow={1} key={`${name}-${index}`}>
              <Padding>
                <Typography component="p" textAlign="center">
                  {name}
                </Typography>
              </Padding>
            </FlexItem>
          );
        })}
      </Flex>
      <TabIndicator tabLength={tabLength} tabIndex={tabIndex} />
    </div>
  );
};

export default Tab;
