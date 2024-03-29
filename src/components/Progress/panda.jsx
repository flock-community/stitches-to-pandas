import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Progress from '@radix-ui/react-progress';
const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <ProgressRoot value={progress}>
      <ProgressIndicator style={{
      transform: `translateX(-${100 - progress}%)`
    }} />
    </ProgressRoot>;
};
const ProgressRoot = styled(Progress.Root, {
  base: {
    position: 'relative',
    overflow: 'hidden',
    background: "{colors.blackA.500}",
    borderRadius: '99999px',
    width: "300px",
    height: "25px",
    // Fix overflow clipping in Safari
    // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
    transform: 'translateZ(0)'
  }
});
const ProgressIndicator = styled(Progress.Indicator, {
  base: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
  }
});
export default ProgressDemo;