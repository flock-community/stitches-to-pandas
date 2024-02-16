import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { blackA } from '@radix-ui/colors';
const SwitchDemo = () => <form>
    <Flex className={css({
    alignItems: 'center'
  })}>
      <Label htmlFor="airplane-mode" className={css({
      paddingRight: 15
    })}>
        Airplane mode
      </Label>
      <SwitchRoot id="airplane-mode">
        <SwitchThumb />
      </SwitchRoot>
    </Flex>
  </form>;
const SwitchRoot = styled(Switch.Root, {
  base: {
    width: 42,
    height: 25,
    backgroundColor: blackA.blackA6,
    borderRadius: '9999px',
    position: 'relative',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    },
    '&[data-state="checked"]': {
      backgroundColor: 'black'
    }
  }
});
const SwitchThumb = styled(Switch.Thumb, {
  base: {
    display: 'block',
    width: 21,
    height: 21,
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: `0 2px 2px ${blackA.blackA4}`,
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': {
      transform: 'translateX(19px)'
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Label = styled('label', {
  base: {
    color: 'white',
    fontSize: 15,
    lineHeight: 1
  }
});
export default SwitchDemo;