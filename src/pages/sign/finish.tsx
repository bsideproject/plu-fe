import { Button, Typography } from '@/components';
import { LogoIcon } from '@/icons';
import { Flex, FlexItem, MainLayout } from '@/ui';

const Finish = () => {
  return (
    <MainLayout>
      <Flex direction="column" fullHeight justifyContent={'space-between'}>
        <div></div>
        <FlexItem>
          <Flex direction="column" alignItems="center" gap={30}>
            <LogoIcon />
            <FlexItem>
              <Flex direction="column" gap={15}>
                <Typography textAlign="center" weight="bold" variant="headline" component="p">
                  [닉네임]님 다양한 크루와 함께
                </Typography>
                <Typography textAlign="center" weight="bold" variant="headline" component="p">
                  플로깅을 즐겨주세요!
                </Typography>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
        <div></div>
        <Button fullWidth>확인</Button>
      </Flex>
    </MainLayout>
  );
};

export default Finish;
