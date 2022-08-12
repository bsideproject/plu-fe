import styled from '@emotion/styled';

type Columns = 1 | 2 | 3 | 4;

const Container = styled('div')<{ columns: Columns }>(({ columns }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: 1,
}));

const ImageContainer = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  paddingBottom: '100%',
}));

const ImageItem = styled('img')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
}));

interface Props {
  images?: string[];
  columns: Columns;
}

const ImageFeed = (props: Props) => {
  const { images = [], columns = 3 } = props;

  return (
    <Container columns={columns}>
      {images.map((src, index) => {
        return (
          <ImageContainer key={index}>
            <ImageItem src={src} />
          </ImageContainer>
        );
      })}
    </Container>
  );
};

export default ImageFeed;
