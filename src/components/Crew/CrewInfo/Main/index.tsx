import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { Flex, FlexItem, Padding } from '@/ui';
import styled from '@emotion/styled';

// ...

const Container = styled(Flex)(() => ({
  height: '100%',
}));

const BackgroundImage = styled('div')<{ image: string }>(({ image }) => ({
  width: '100%',
  // paddingBottom: '30vh',
  height: '30vh',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // position: 'absolute',
}));

const InfoContainer = styled('div')(() => ({
  background: 'white',
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '60%',
}));

const CrewInfoMain = () => {
  return (
    <Container fullHeight direction="column">
      <BackgroundImage image="" />
      <InfoContainer>
        <Flex fullHeight direction="column">
          <FlexItem
            grow={1}
            style={{
              overflowY: 'scroll',
              padding: '25px 16px 0',
            }}
          >
            <Flex fullHeight direction="column">
              <FlexItem>
                <Typography variant="headline" component="p">
                  잠원 한강 플로깅
                </Typography>
                <Typography component="p">안녕하세요. 반가워요!</Typography>
                <Typography component="p">같이 잠원 한강공원에서 즐겁게 플로깅해요!</Typography>
              </FlexItem>
              <FlexItem grow={1}>
                <Typography>일정</Typography>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Padding>
              <Button fullWidth>가입하기</Button>
            </Padding>
          </FlexItem>
        </Flex>
      </InfoContainer>
    </Container>
  );
};

export default CrewInfoMain;
