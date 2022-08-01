import { NavigationBar } from '@/components';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon';
import SettingIcon from '@/icons/SettingIcon';

const NavigationBarComponent = () => {
  return <NavigationBar title="페이지 타이틀" startIcon={<ArrowLeftIcon />} endIcon={<SettingIcon />} />;
};

export default NavigationBarComponent;
