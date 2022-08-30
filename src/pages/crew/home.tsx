import { NavigationBottom, Typography } from '@/components';
import CrewMainItem from '@/components/CrewMainItem';
import CrewMyScheduleItem from '@/components/CrewMyScheduleItem';
import { Flex, FlexItem, MainLayout, MB20, Padding } from '@/ui';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  overflowY: 'scroll',
}));

// TODO: 실 데이터
// TODO: select 변경 해야 함

const MainInfoText = styled('div')(() => ({
  background: 'rgba(25, 200, 133, 0.1)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  height: 46,
  margin: '10px 0 40px',
  display: 'flex',
  alignItems: 'center',
}));

const CrewHomePage = () => {
  return (
    <Flex direction="column" justifyContent="space-between" fullHeight>
      <Container>
        <Padding noLRPadding>
          <MainLayout inner>
            <FlexItem>
              <MB20>
                <Typography variant="headline" weight="bold" component="p">
                  안녕하세요 김유저님
                </Typography>
              </MB20>
            </FlexItem>
            <FlexItem>
              <MainInfoText>
                <Padding>
                  <Flex gap={14} alignItems="center">
                    <Typography>🌍</Typography>
                    <Typography color="#19C885">지구를 깨끗하게 해주셔서 감사해요!</Typography>
                  </Flex>
                </Padding>
              </MainInfoText>
            </FlexItem>
            <FlexItem>
              <Padding>
                <Typography weight="bold" component="p">
                  내 일정
                </Typography>
              </Padding>
              <MB20>
                <Flex
                  style={{
                    overflowX: 'scroll',
                    padding: 8,
                  }}
                  gap={10}
                >
                  {[1, 2, 3, 4, 5].map((item, key) => {
                    return <CrewMyScheduleItem key={key} />;
                  })}
                </Flex>
              </MB20>
            </FlexItem>
            <FlexItem>
              <Padding>
                <Typography variant="headline" weight="bold" component="p">
                  크루 리스트
                </Typography>
              </Padding>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {[1, 2, 3, 4, 5].map((item, key) => {
                  return <CrewMainItem key={key} />;
                })}
              </div>
            </FlexItem>
          </MainLayout>
        </Padding>
      </Container>
      <NavigationBottom />
    </Flex>
  );
};

export default CrewHomePage;
