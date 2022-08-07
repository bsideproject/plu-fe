import Button from '@/components/Button';

const ButtonComponentList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
      <div>
        <Button fullWidth variant="outlined">
          확인
        </Button>
      </div>
      <div>
        <Button fullWidth variant="normal">
          확인
        </Button>
      </div>
    </div>
  );
};

export default ButtonComponentList;
