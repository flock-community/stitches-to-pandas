import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Slider from '@radix-ui/react-slider';
const SliderDemo = () => <form>
    <SliderRoot defaultValue={[50]} max={100} step={1}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </SliderRoot>
  </form>;
const SliderRoot = styled(Slider.Root, {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: "200px",
    height: "20px"
  }
});
const SliderTrack = styled(Slider.Track, {
  base: {
    backgroundColor: "{colors.blackA.600}",
    position: 'relative',
    flexGrow: 1,
    borderRadius: '9999px',
    height: "3px"
  }
});
const SliderRange = styled(Slider.Range, {
  base: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '9999px',
    height: '100%'
  }
});
const SliderThumb = styled(Slider.Thumb, {
  base: {
    display: 'block',
    width: "20px",
    height: "20px",
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    borderRadius: "10px",
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 5px ${"{colors.blackA.400}"}`
    }
  }
});
export default SliderDemo;