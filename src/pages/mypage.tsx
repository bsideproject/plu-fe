import { NavigationBottom, Tab } from '@/components';
import CrewMainItem from '@/components/CrewMainItem';
import MyFeed from '@/components/MyPage/MyFeed';
import MyFeedCommon from '@/components/MyPage/MyFeedCommon';
import { Flex } from '@/ui';
import styled from '@emotion/styled';
import { useState } from 'react';

const TAB_NAME = ['피드', '내 크루'];

const Container = styled('div')(() => ({
  overflowY: 'scroll',
}));

// TODO: 이미지 넣어야 함

const MyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const onChangeTabIndex = (index: number) => setTabIndex(index);

  return (
    <>
      <Flex direction="column" justifyContent={'space-between'} fullHeight>
        <Container>
          <MyFeedCommon profileImage="나중에이미지넣어야함" name="김유저" />
          <Tab tabPadding={8} tabNames={TAB_NAME} tabIndex={tabIndex} onChangeTabIndex={onChangeTabIndex} />
          {tabIndex === 0 && <MyFeed images={[]} />}
          {tabIndex === 1 && (
            <>
              {/* TODO: 추후 실 데이터 넣어야 함 */}
              {[].map((key) => {
                return <CrewMainItem key={key} />;
              })}
            </>
          )}
        </Container>
        <NavigationBottom />
      </Flex>
    </>
  );
};

export default MyPage;
