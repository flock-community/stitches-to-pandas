import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';
const ToggleDemo = () => <ToggleRoot aria-label="Toggle italic">
    <FontItalicIcon />
  </ToggleRoot>;
const ToggleRoot = styled(Toggle.Root, {
  base: {
    backgroundColor: 'white',
    color: "{colors.mauve.950}",
    height: "35px",
    width: "35px",
    borderRadius: "4px",
    display: 'flex',
    fontSize: "15px",
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&[data-state=on]': {
      backgroundColor: "{colors.violet.500}",
      color: "{colors.violet.950}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
export default ToggleDemo;