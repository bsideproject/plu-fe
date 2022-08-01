import { Button, Typography } from '@/components';
import { AppleIcon, KakaoIcon, NaverIcon } from '@/icons';
import styled from '@emotion/styled';

const Container = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const MainContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TmpImg = styled('div')(() => ({
  width: 150,
  height: 150,
  background: 'pink',
  marginBottom: 30,
}));

const LoginButtonGroup = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}));

const Login = () => {
  return (
    <Container>
      <div></div>
      <MainContainer>
        <TmpImg />
        <Typography>지금 플로그와</Typography>
        <Typography>플로깅을 시작하세요!</Typography>
        <Typography>환경보호 부터 건강까지</Typography>
      </MainContainer>
      <LoginButtonGroup>
        <Button startIcon={<KakaoIcon />} bgColor={'#FFE446'}>
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
  );
};

export default Login;
