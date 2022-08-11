import CreateCrew_Intro from '@/components/Crew/Create/CreateCrew_Intro';
import CreateCrew_Location from '@/components/Crew/Create/CreateCrew_Location';
import { useCallback, useState } from 'react';

const TAB_INDEX = [0, 1] as const;
type TabIndex = typeof TAB_INDEX[number];

export const MAX_LOCATION = 3;

export type Location = {
  city: string;
  district: string;
};

const CreateCrew = () => {
  const [crewName, setCrewName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState<Location[]>([]);
  const [tabIndex, setTabIndex] = useState<TabIndex>(0);

  const onChangeCrewName = useCallback((crewName: string) => setCrewName(crewName), []);

  const onChangeTitle = useCallback((title: string) => setTitle(title), []);

  const onChangeDescription = useCallback((description: string) => setDescription(description), []);

  const onChangeImages = (image: string) => setImage(image);

  const onChangeLocation = (location: Location[]) => setLocation(location);

  const onNext = () =>
    setTabIndex((prev) => {
      const nextIndex = (prev + 1) as TabIndex;
      if (TAB_INDEX.includes(nextIndex)) return nextIndex;
      return prev;
    });

  const Components = {
    0: (
      <CreateCrew_Intro
        crewName={crewName}
        title={title}
        description={description}
        image={image}
        onChangeCrewName={onChangeCrewName}
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        onChangeImages={onChangeImages}
        onNext={onNext}
      />
    ),
    1: (
      <CreateCrew_Location
        location={location}
        onChangeLocation={onChangeLocation}
        onClick={() => {
          console.log('g');
        }}
      />
    ),
  };

  return <>{Components[tabIndex]}</>;
};

export default CreateCrew;
