import NavigationBar from '@/components/NavigationBar';
import { ArrowLeftIcon } from '@/icons';
import { MB20 } from '@/ui';

const CommomHeader = () => {
  return (
    <MB20>
      <NavigationBar startIcon={<ArrowLeftIcon />} title="크루생성" />
    </MB20>
  );
};

export default CommomHeader;
