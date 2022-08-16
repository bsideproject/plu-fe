import { NavigationBottom, Typography } from '@/components';
import CrewMainItem from '@/components/CrewMainItem';
import { Flex, FlexItem, MainLayout, MB20, Padding } from '@/ui';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  overflowY: 'scroll',
}));

// TODO: 실 데이터
// TODO: select 변경 해야 함

const CrewHomePage = () => {
  return (
    <Flex direction="column" justifyContent="space-between" fullHeight>
      <Container>
        <Padding noLRPadding>
          <MainLayout inner>
            <FlexItem>
              <MB20>
                <select name="location">
                  <option value="전국">전국</option>
                  <option value="경기">경기</option>
                  <option value="서울">서울</option>
                  <option value="경북">경북</option>
                </select>
              </MB20>
            </FlexItem>
            <FlexItem>
              <Typography variant="headline" weight="bold" component="p">
                내 크루
              </Typography>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {[1, 2, 3, 4, 5].map((item, key) => {
                  return <CrewMainItem key={key} />;
                })}
              </div>
            </FlexItem>
            <FlexItem>
              <Typography variant="headline" weight="bold" component="p">
                크루 리스트
              </Typography>
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
