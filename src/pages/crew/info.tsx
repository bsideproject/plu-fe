import { Tab } from '@/components';
import CommomHeader from '@/components/Crew/Create/CommonHeader';
import CrewInfoFeed from '@/components/Crew/CrewInfo/Feed';
import CrewInfoMain from '@/components/Crew/CrewInfo/Main';
import CrewInfoProfile from '@/components/Crew/CrewInfo/Profile';
import { Flex } from '@/ui';
import styled from '@emotion/styled';
import { useState } from 'react';

const TAB_NAME = ['크루 정보', '프로필', '피드'];

type TabIndex = 0 | 1 | 2;

const Container = styled('div')(() => ({
  overflowY: 'scroll',
  height: '100%',
}));

// TODO: 실 데이터 넣기

const CrewInfoPage = () => {
  const [tabIndex, setTabIndex] = useState<TabIndex>(0);

  const onChangeTabIndex = (index: number) => setTabIndex(index as TabIndex);

  const Components = {
    0: <CrewInfoMain />,
    1: <CrewInfoProfile />,
    2: <CrewInfoFeed images={[]} />,
  };

  return (
    <Flex direction="column" fullHeight>
      <CommomHeader title="[크루명]" />
      <Tab tabPadding={8} tabNames={TAB_NAME} tabIndex={tabIndex} onChangeTabIndex={onChangeTabIndex} />

      <Container>{Components[tabIndex]}</Container>
    </Flex>
  );
};

export default CrewInfoPage;
