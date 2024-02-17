import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
const PopoverDemo = () => <Popover.Root>
    <PopoverTrigger>More info</PopoverTrigger>
    <Popover.Portal>
      <PopoverContent sideOffset={5}>
        Some more info…
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  </Popover.Root>;
const PopoverTrigger = styled(Popover.Trigger, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 15px',
    fontSize: "15px",
    lineHeight: 1,
    fontWeight: "500px",
    height: "35px",
    backgroundColor: 'white',
    color: "{colors.violet.950}",
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.mauve.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const PopoverContent = styled(Popover.Content, {
  base: {
    borderRadius: "4px",
    padding: "20px",
    width: "260px",
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    '&:focus': {
      outline: 'none',
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${"{colors.violet.600}"}`
    }
  }
});
const PopoverArrow = styled(Popover.Arrow, {
  base: {
    fill: 'white'
  }
});
export default PopoverDemo;