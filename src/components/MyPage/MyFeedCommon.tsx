import { Button, Typography } from '@/components';
import { Flex, FlexItem, MainLayout, MB20 } from '@/ui';

interface Props {
  profileImage: string;
  name: string;
}

const MyFeedCommon = (props: Props) => {
  const { profileImage, name } = props;

  return (
    <>
      <MB20>
        <MainLayout style={{ paddingTop: 16 }}>
          <Typography weight="semibold" textAlign="center" component="p" variant="subheadline1">
            마이
          </Typography>
        </MainLayout>
      </MB20>
      <MB20>
        <MainLayout inner>
          <Flex gap={10} alignItems="center">
            <div>프로필 이미지</div>
            <FlexItem>
              <Flex gap={10} direction="column">
                <Typography variant="subheadline1" weight="semibold">
                  {name}님
                </Typography>
                <Typography>안녕하세요.</Typography>
              </Flex>
            </FlexItem>
          </Flex>
        </MainLayout>
      </MB20>
      <MB20>
        <MainLayout inner>
          <Button fullWidth variant="normal">
            프로필 편집
          </Button>
        </MainLayout>
      </MB20>
    </>
  );
};

export default MyFeedCommon;
