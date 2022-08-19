import ImageFeed from '@/components/ImageFeed';

// TODO: 이미지 실 데이터 넣기
interface Props {
  images: string[];
}

const CrewInfoFeed = (props: Props) => {
  const { images } = props;

  return <ImageFeed columns={3} images={images} />;
};

export default CrewInfoFeed;
