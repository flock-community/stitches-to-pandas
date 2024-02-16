import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
const PopoverDemo = () => <Popover.Root>
    <Popover.Trigger asChild>
      <IconButton aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </IconButton>
    </Popover.Trigger>
    <Popover.Portal>
      <PopoverContent sideOffset={5}>
        <Flex className={css({
        flexDirection: 'column',
        gap: 10
      })}>
          <Text className={css({
          marginBottom: 10
        })}>Dimensions</Text>
          <Fieldset>
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input id="maxWidth" defaultValue="300px" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input id="maxHeight" defaultValue="none" />
          </Fieldset>
        </Flex>
        <PopoverClose aria-label="Close">
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  </Popover.Root>;
const slideUpAndFade = "slideUpAndFade";
const slideRightAndFade = "slideRightAndFade";
const slideDownAndFade = "slideDownAndFade";
const slideLeftAndFade = "slideLeftAndFade";
const PopoverContent = styled(Popover.Content, {
  base: {
    borderRadius: 4,
    padding: 20,
    width: 260,
    backgroundColor: 'white',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
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
    },
    '&:focus': {
      boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`
    }
  }
});
const PopoverArrow = styled(Popover.Arrow, {
  base: {
    fill: 'white'
  }
});
const PopoverClose = styled(Popover.Close, {
  base: {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 5,
    right: 5,
    '&:hover': {
      backgroundColor: violet.violet4
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${violet.violet7}`
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const IconButton = styled('button', {
  base: {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    '&:hover': {
      backgroundColor: violet.violet3
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const Fieldset = styled('fieldset', {
  base: {
    display: 'flex',
    gap: 20,
    alignItems: 'center'
  }
});
const Label = styled('label', {
  base: {
    fontSize: 13,
    color: violet.violet11,
    width: 75
  }
});
const Input = styled('input', {
  base: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 25,
    '&:focus': {
      boxShadow: `0 0 0 2px ${violet.violet8}`
    }
  }
});
const Text = styled('p', {
  base: {
    margin: 0,
    color: mauve.mauve12,
    fontSize: 15,
    lineHeight: '19px',
    fontWeight: 500
  }
});
export default PopoverDemo;