import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
const TAGS = Array.from({
  length: 50
}).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
const ScrollAreaDemo = () => <ScrollAreaRoot>
    <ScrollAreaViewport>
      <Box style={{
      padding: '15px 20px'
    }}>
        <Text>Tags</Text>
        {TAGS.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>;
const SCROLLBAR_SIZE = 10;
const ScrollAreaRoot = styled(ScrollArea.Root, {
  base: {
    width: "200px",
    height: "225px",
    borderRadius: "4px",
    overflow: 'hidden',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    backgroundColor: 'white'
  }
});
const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  base: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit'
  }
});
const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  base: {
    display: 'flex',
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: "2px",
    background: "{colors.blackA.200}",
    transition: 'background 160ms ease-out',
    '&:hover': {
      background: "{colors.blackA.400}"
    },
    '&[data-orientation="vertical"]': {
      width: SCROLLBAR_SIZE
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: SCROLLBAR_SIZE
    }
  }
});
const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  base: {
    flex: 1,
    background: "{colors.mauve.900}",
    borderRadius: SCROLLBAR_SIZE,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: "44px",
      minHeight: "44px"
    }
  }
});
const ScrollAreaCorner = styled(ScrollArea.Corner, {
  base: {
    background: "{colors.blackA.400}"
  }
});
const Box = styled('div', {
  base: {}
});
const Text = styled('div', {
  base: {
    color: "{colors.violet.950}",
    fontSize: "15px",
    lineHeight: '18px',
    fontWeight: "500px"
  }
});
const Tag = styled('div', {
  base: {
    color: "{colors.mauve.950}",
    fontSize: "13px",
    lineHeight: '18px',
    marginTop: "10px",
    borderTop: `1px solid ${"{colors.mauve.500}"}`,
    paddingTop: "10px"
  }
});
export default ScrollAreaDemo;