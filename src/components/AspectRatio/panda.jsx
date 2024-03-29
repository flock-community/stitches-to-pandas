import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
const AspectRatioDemo = () => <Box className={css({
  width: "300px",
  borderRadius: "6px",
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`
})}>
    <AspectRatio.Root ratio={16 / 9}>
      <Img src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" alt="Landscape photograph by Tobias Tullius" />
    </AspectRatio.Root>
  </Box>;
const Box = styled('div', {
  base: {}
});
const Img = styled('img', {
  base: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
});
export default AspectRatioDemo;