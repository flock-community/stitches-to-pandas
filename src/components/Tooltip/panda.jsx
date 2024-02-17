import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
const TooltipDemo = () => {
  return <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5}>
            Add to library
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>;
};
const slideUpAndFade = "slideUpAndFade";
const slideRightAndFade = "slideRightAndFade";
const slideDownAndFade = "slideDownAndFade";
const slideLeftAndFade = "slideLeftAndFade";
const TooltipContent = styled(Tooltip.Content, {
  base: {
    borderRadius: "4px",
    padding: '10px 15px',
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    userSelect: 'none',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': {
        animationName: slideDownAndFade
      },
      '&[data-side="right"]': {
        animationName: slideLeftAndFade
      },
      '&[data-side="bottom"]': {
        animationName: slideUpAndFade
      },
      '&[data-side="left"]': {
        animationName: slideRightAndFade
      }
    }
  }
});
const TooltipArrow = styled(Tooltip.Arrow, {
  base: {
    fill: 'white'
  }
});
const IconButton = styled('button', {
  base: {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: "35px",
    width: "35px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "{colors.violet.950}",
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
export default TooltipDemo;