import NavigationBar from '@/components/NavigationBar';
import { ArrowLeftIcon } from '@/icons';
import { MB20 } from '@/ui';

interface Props {
  title?: string;
}

const CommomHeader = (props: Props) => {
  const { title = '크루생성' } = props;

  return (
    <MB20>
      <NavigationBar startIcon={<ArrowLeftIcon />} title={title} />
    </MB20>
  );
};

export default CommomHeader;
