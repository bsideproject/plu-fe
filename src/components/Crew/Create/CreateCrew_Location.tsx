import { Button, Typography } from '@/components';
import { Location, MAX_LOCATION } from '@/pages/crew/create';
import { Flex, MB20, Padding } from '@/ui';
import CommomHeader from './CommonHeader';
import LocatinoChip from './LocationChip';
import LocationTree from './LocationTree';

interface Props {
  location: Location[];
  onChangeLocation: (location: Location[]) => void;
  onClick: () => void;
}

const CreateCrew_Location = (props: Props) => {
  const { location, onChangeLocation, onClick } = props;

  return (
    <Flex label="CreateCrew" direction="column" justifyContent="space-between" fullHeight>
      <div>
        <CommomHeader />
        <MB20>
          <Padding>
            <Flex label="CreateCrew-CrewInputContainer" direction="column" gap={14}>
              <Typography component="p" variant="subheadline1" weight="semibold">
                주요 활동 지역
              </Typography>
              <Typography component="p" variant="subheadline1" weight="semibold" color="gray">
                (3개 지역 선택 가능)
              </Typography>
            </Flex>
          </Padding>
        </MB20>

        <Padding>
          <Flex direction="column" gap={14}>
            <LocationTree
              location={location}
              onClick={({ city, district }) => {
                const index = location.findIndex((el) => el.city === city && el.district === district);
                if (index !== -1) {
                  const newLocation = location.filter((_, _index) => index !== _index);
                  onChangeLocation(newLocation);
                } else {
                  if (location.length === MAX_LOCATION) {
                    return;
                  } else {
                    onChangeLocation([...location, { city, district }]);
                  }
                }
              }}
            />
          </Flex>
        </Padding>
      </div>
      <div>
        <MB20>
          <Flex gap={10}>
            {location.map(({ city, district }) => {
              const text = `${city} ${district}`;
              return (
                <LocatinoChip
                  key={text}
                  text={text}
                  onRemove={() => {
                    const newLocation = location.filter((item) => !(item.city === city && item.district === district));
                    onChangeLocation(newLocation);
                  }}
                />
              );
            })}
          </Flex>
        </MB20>
        <Button fullWidth onClick={onClick}>
          확인
        </Button>
      </div>
    </Flex>
  );
};

export default CreateCrew_Location;
