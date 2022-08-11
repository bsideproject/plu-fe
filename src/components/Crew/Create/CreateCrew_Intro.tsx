import { Button, Typography } from '@/components';
import TextField from '@/components/TextField';
import { Flex, MB20, Padding } from '@/ui';
import styled from '@emotion/styled';
import { ChangeEvent, useCallback } from 'react';
import CommomHeader from './CommonHeader';

const EmptyImage = styled('div')(() => ({
  width: 80,
  height: 80,
  borderRadius: 10,
  backgroundColor: '#E6E6E6',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '&:before': {
    position: 'absolute',
    content: `''`,
    border: '2px solid #fff',
    width: '25%',
  },
  '&:after': {
    position: 'absolute',
    content: `''`,
    border: '2px solid #fff',
    height: '25%',
  },
}));

interface Props {
  crewName: string;
  title: string;
  description: string;
  image: string;
  onChangeCrewName: (crewName: string) => void;
  onChangeTitle: (title: string) => void;
  onChangeDescription: (description: string) => void;
  onChangeImages: (image: string) => void;
  onNext: () => void;
}

const CreateCrew_Intro = (props: Props) => {
  const {
    crewName,
    title,
    description,
    image,
    onChangeCrewName: _onChangeCrewName,
    onChangeTitle: _onChangeTitle,
    onChangeDescription: _onChangeDescription,
    onChangeImages: _onChangeImages,
    onNext,
  } = props;

  const onChangeCrewName = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => _onChangeCrewName(e.currentTarget.value),
    []
  );

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => _onChangeTitle(e.currentTarget.value), []);

  const onChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => _onChangeDescription(e.currentTarget.value),
    []
  );

  const disabled = !!crewName.length && !!title.length && !!description.length;

  return (
    <Flex label="CreateCrew" direction="column" justifyContent="space-between" fullHeight>
      <div>
        <CommomHeader />
        <MB20>
          <Padding>
            <Flex label="CreateCrew-CrewInputContainer" direction="column" gap={14}>
              <Typography component="p" variant="subheadline1" weight="semibold">
                크루소개
              </Typography>
              <TextField value={crewName} onChange={onChangeCrewName} label="크루이름" fullWidth />
              <TextField value={title} onChange={onChangeTitle} label="제목" fullWidth />
              <TextField
                value={description}
                onChange={onChangeDescription}
                label="크루를 소개해 주세요."
                rows={6}
                fullWidth
                multiline
              />
            </Flex>
          </Padding>
        </MB20>

        <Padding>
          <Flex direction="column" gap={14}>
            <Typography component="p" variant="subheadline1" weight="semibold">
              대표 사진
            </Typography>
            {!image ? <EmptyImage /> : <img src={image} width={80} height={80} alt="Crew Image" />}
          </Flex>
        </Padding>
      </div>

      <Button fullWidth disabled={!disabled} onClick={onNext}>
        다음
      </Button>
    </Flex>
  );
};

export default CreateCrew_Intro;
