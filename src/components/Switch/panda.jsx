import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Switch from '@radix-ui/react-switch';
const SwitchDemo = () => <form>
    <Flex className={css({
    alignItems: 'center'
  })}>
      <Label htmlFor="airplane-mode" className={css({
      paddingRight: "15px"
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
    width: "42px",
    height: "25px",
    backgroundColor: "{colors.blackA.500}",
    borderRadius: '9999px',
    position: 'relative',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
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
    width: "21px",
    height: "21px",
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: `0 2px 2px ${"{colors.blackA.300}"}`,
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
    fontSize: "15px",
    lineHeight: 1
  }
});
export default SwitchDemo;