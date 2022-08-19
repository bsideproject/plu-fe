import { Button, Typography } from '@/components';
import { AppleIcon, KakaoIcon, NaverIcon } from '@/icons';
import { Flex, MainLayout, MB20 } from '@/ui';
import styled from '@emotion/styled';

// ...

const Container = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const MainContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 20,
}));

const LoginButtonGroup = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}));

const MainLogoText = styled(Typography)(() => ({
  fontSize: 50,
}));

const Login = () => {
  return (
    <MainLayout>
      <Container>
        <div></div>
        <MainContainer>
          <MB20>
            <Flex direction="column" gap={6}>
              <Typography weight="bold" variant="title3" component="p">
                함께 달리고, 줍고, 지키는
              </Typography>
              <Typography weight="bold" variant="title3" component="p">
                플로깅 커뮤니티
              </Typography>
            </Flex>
          </MB20>
          <MainLogoText color="#19C885" weight="bold" variant="title2" component="p">
            TOPLO
          </MainLogoText>
        </MainContainer>
        <div></div>
        <div></div>
        <LoginButtonGroup>
          <Button startIcon={<KakaoIcon />} color="black" bgColor={'#FFE446'}>
            카카오톡 로그인
          </Button>
          <Button startIcon={<NaverIcon />} color="white" bgColor={'#03C75A'}>
            네이버 로그인
          </Button>
          <Button startIcon={<AppleIcon />} color="white" bgColor={'#000000'}>
            Apple 로그인
          </Button>
        </LoginButtonGroup>
      </Container>
    </MainLayout>
  );
};

export default Login;
