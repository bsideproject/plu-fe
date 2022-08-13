import { Button, Typography } from '@/components';
import TextField from '@/components/TextField';
import { MainLayout } from '@/ui';
import styled from '@emotion/styled';
import { ChangeEvent, useCallback, useState } from 'react';

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const NicknameContainer = styled('div')(() => ({
  marginTop: '10vh',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}));

const NicknameField = styled(TextField)(() => ({
  marginTop: 20,
}));

const Signup = () => {
  const [nickname, setNickname] = useState('');

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setNickname(e.target.value), []);

  return (
    <MainLayout>
      <Container>
        <NicknameContainer>
          <Typography variant="headline" weight="bold">
            플로그에서 사용할
          </Typography>
          <Typography variant="headline" weight="bold">
            닉네임을 입력해주세요.
          </Typography>
          <NicknameField label="닉네임" value={nickname} onChange={onChangeNickname} />
        </NicknameContainer>
        <Button>확인</Button>
      </Container>
    </MainLayout>
  );
};

export default Signup;
