import ProfileIcon from '@/icons/ProfileIcon';
import { Flex, FlexItem, Padding } from '@/ui';
import styled from '@emotion/styled';
import React from 'react';
import Typography from './Typography';

const Container = styled(Flex)<{ border: boolean }>(({ border }) => ({
  borderBottom: border ? '1px solid #e6e6e6' : undefined,
}));

interface Props {
  iconColor?: React.CSSProperties['color'];
  nickname: string;
  border?: boolean;
  startInfo?: {
    text: number;
    bold: boolean;
  };
  endInfo?: {
    text: '크루장' | '크루원' | number;
    bold: boolean;
  };
}

const Profile = (props: Props) => {
  const { iconColor = '#19C885', nickname, border = true, startInfo, endInfo } = props;

  return (
    <Container border={border} alignItems="center" justifyContent="space-between">
      <FlexItem>
        <Flex alignItems={'center'} gap={10}>
          {startInfo && (
            <Padding>
              <Typography weight={startInfo.bold ? 'semibold' : undefined}>{startInfo.text}</Typography>
            </Padding>
          )}
          <FlexItem>
            <Padding>
              <ProfileIcon color={iconColor} />
            </Padding>
          </FlexItem>
          <FlexItem>
            <Padding>
              <Typography>{nickname}</Typography>
            </Padding>
          </FlexItem>
        </Flex>
      </FlexItem>
      <FlexItem>
        {endInfo && (
          <Padding>
            <Typography weight={endInfo.bold ? 'semibold' : undefined}>{endInfo.text}</Typography>
          </Padding>
        )}
      </FlexItem>
    </Container>
  );
};

export default Profile;
