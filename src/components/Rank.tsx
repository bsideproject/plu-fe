import { Flex, FlexItem, Padding } from '@/ui';
import Paper from './Paper';
import Profile from './Profile';
import Typography from './Typography';

interface Props {
  rank: number;
  score: number;
  nickname: string;
}

const Rank = (props: Props) => {
  const { rank, score, nickname } = props;

  return (
    <Paper>
      <Padding>
        <Flex justifyContent={'space-between'}>
          <FlexItem grow={1}>
            <Flex fullHeight direction="column">
              <FlexItem>
                <Typography weight="bold" component="p" textAlign="center">
                  순위
                </Typography>
              </FlexItem>
              <FlexItem grow={1}>
                <Flex fullHeight justifyContent={'center'} alignItems={'center'}>
                  <Typography color="#19C885" variant="headline" component="p" textAlign="center">
                    {rank}
                  </Typography>
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
          <FlexItem grow={1}>
            <Flex alignItems={'center'} direction="column">
              <Typography weight="bold" component="p" textAlign="center">
                닉네임
              </Typography>
              <Profile nickname={nickname} border={false} />
            </Flex>
          </FlexItem>
          <FlexItem grow={1}>
            <Flex fullHeight direction="column">
              <FlexItem>
                <Typography weight="bold" component="p" textAlign="center">
                  점수
                </Typography>
              </FlexItem>
              <FlexItem grow={1}>
                <Flex fullHeight justifyContent={'center'} alignItems={'center'}>
                  <Typography color="#19C885" variant="headline" component="p" textAlign="center">
                    {score}
                  </Typography>
                </Flex>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Padding>
    </Paper>
  );
};

export default Rank;
