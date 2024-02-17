import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
const ToggleGroupDemo = () => <ToggleGroupRoot type="single" defaultValue="center" aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Left aligned">
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Center aligned">
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Right aligned">
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroupRoot>;
const ToggleGroupRoot = styled(ToggleGroup.Root, {
  base: {
    display: 'inline-flex',
    backgroundColor: "{colors.mauve.500}",
    borderRadius: "4px",
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`
  }
});
const ToggleGroupItem = styled(ToggleGroup.Item, {
  base: {
    backgroundColor: 'white',
    color: "{colors.mauve.950}",
    height: "35px",
    width: "35px",
    display: 'flex',
    fontSize: "15px",
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "1px",
    '&:first-child': {
      marginLeft: "0px",
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px"
    },
    '&:last-child': {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px"
    },
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&[data-state=on]': {
      backgroundColor: "{colors.violet.400}",
      color: "{colors.violet.950}"
    },
    '&:focus': {
      position: 'relative',
      boxShadow: `0 0 0 2px black`
    }
  }
});
export default ToggleGroupDemo;