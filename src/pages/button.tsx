import Button from '@/components/Button';

const ButtonComponentList = () => {
  return (
    <>
      <div>
        <Button fullWidth variant="active">
          확인
        </Button>
      </div>
      <div>
        <Button fullWidth disabled={true}>
          확인
        </Button>
      </div>
    </>
  );
};

export default ButtonComponentList;
