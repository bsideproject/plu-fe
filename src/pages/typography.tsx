import Typography from '@/components/Typography';
import { FontWeightKey, Variant } from '@/components/Typography/types';
import styled from '@emotion/styled';

const Flex = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 20,
  padding: 30,
}));

const VARIANT_LIST: Variant[] = ['title1', 'title2', 'title3', 'headline', 'subheadline1', 'body1', 'caption'];
const FONT_WEIGHT_LIST: FontWeightKey[] = ['regular', 'semibold', 'bold'];

const TypographyList = () => {
  return (
    <>
      {VARIANT_LIST.map((variant) => {
        return (
          <Flex key={variant}>
            {FONT_WEIGHT_LIST.map((weight) => {
              return (
                <div key={`${variant}.${weight}`}>
                  <Typography variant={variant} weight={weight}>
                    {variant}
                  </Typography>
                </div>
              );
            })}
          </Flex>
        );
      })}
    </>
  );
};

export default TypographyList;
