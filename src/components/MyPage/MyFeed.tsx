import ImageFeed from '../ImageFeed';

interface Props {
  images: string[];
}

const MyFeed = (props: Props) => {
  const { images } = props;

  return <ImageFeed columns={3} images={images} />;
};

export default MyFeed;
