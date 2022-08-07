import { Button, NavigationBar, Typography } from '@/components';
import TextField from '@/components/TextField';
import { ArrowLeftIcon } from '@/icons';
import { Flex, FlexItem, MB20 } from '@/ui';
import { ChangeEvent, useCallback, useState } from 'react';

const CREW_CATEGORY = {
  플로깅: '플로깅',
  비치코밍: '비치코밍',
} as const;

type CrewCategry = typeof CREW_CATEGORY[keyof typeof CREW_CATEGORY];

const CreateCrew = () => {
  const [crewName, setCrewName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<CrewCategry>('플로깅');

  const onChangeCrewName = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setCrewName(e.currentTarget.value), []);

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setTitle(e.currentTarget.value), []);

  const onChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value),
    []
  );

  const onChangeType = useCallback((type: CrewCategry) => () => setType(type), []);

  const disabled = !!crewName.length && !!title.length && !!description.length;

  return (
    <Flex label="CreateCrew" direction="column" justifyContent="space-between" fullHeight>
      <div>
        <MB20>
          <NavigationBar startIcon={<ArrowLeftIcon />} title="크루생성" />
        </MB20>
        <MB20>
          <Flex label="CreateCrew-CategoryContainer" direction="column" gap={14} padding={8}>
            <Typography component="p" variant="subheadline1" weight="semibold">
              카테고리
            </Typography>
            <Flex label="CreateCrew-CategoryContainer-CategoryButtonContainer" gap={2}>
              <FlexItem grow={1}>
                <Button
                  onClick={onChangeType(CREW_CATEGORY.플로깅)}
                  fullWidth
                  variant={type === CREW_CATEGORY.플로깅 ? 'outlined' : 'normal'}
                  value={CREW_CATEGORY.플로깅}
                >
                  플로깅
                </Button>
              </FlexItem>
              <FlexItem grow={1}>
                <Button
                  onClick={onChangeType(CREW_CATEGORY.비치코밍)}
                  fullWidth
                  variant={type !== CREW_CATEGORY.플로깅 ? 'outlined' : 'normal'}
                  value={CREW_CATEGORY.비치코밍}
                >
                  비치코밍
                </Button>
              </FlexItem>
            </Flex>
          </Flex>
        </MB20>
        <Flex label="CreateCrew-CrewInputContainer" padding={8} direction="column" gap={14}>
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
      </div>

      <Button fullWidth disabled={!disabled}>
        확인
      </Button>
    </Flex>
  );
};

export default CreateCrew;
