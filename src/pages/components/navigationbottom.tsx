import NavigationBottom from '@/components/NavigationBottom';
import { NavigationBottomData } from '@/components/NavigationBottom/types';
import SettingIcon from '@/icons/SettingIcon';

const DATA: NavigationBottomData[] = [
  {
    icon: <SettingIcon />,
    text: 'setting',
  },
  {
    icon: <SettingIcon />,
    text: 'setting',
  },
  {
    icon: <SettingIcon />,
    text: 'setting',
  },
  {
    icon: <SettingIcon />,
    text: 'setting',
  },
  {
    icon: <SettingIcon />,
    text: 'setting',
  },
];

const NavigationBottomComponent = () => {
  return <NavigationBottom data={DATA} />;
};

export default NavigationBottomComponent;
