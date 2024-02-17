import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { StrikethroughIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon, FontBoldIcon, FontItalicIcon } from '@radix-ui/react-icons';
const ToolbarDemo = () => <ToolbarRoot aria-label="Formatting options">
    <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </Toolbar.ToggleGroup>
    <ToolbarSeparator />
    <Toolbar.ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToolbarToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToolbarToggleItem>
    </Toolbar.ToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#" target="_blank" className={css({
    marginRight: "10px"
  })}>
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton className={css({
    marginLeft: 'auto'
  })}>Share</ToolbarButton>
  </ToolbarRoot>;
const ToolbarRoot = styled(Toolbar.Root, {
  base: {
    display: 'flex',
    padding: "10px",
    width: '100%',
    minWidth: 'max-content',
    borderRadius: "6px",
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`
  }
});
const itemStyles = {
  base: {
    flex: '0 0 auto',
    color: "{colors.mauve.950}",
    height: "25px",
    padding: '0 5px',
    borderRadius: "4px",
    display: 'inline-flex',
    fontSize: "13px",
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: "{colors.violet.200}",
      color: "{colors.violet.950}"
    },
    '&:focus': {
      position: 'relative',
      boxShadow: `0 0 0 2px ${"{colors.violet.600}"}`
    }
  }
};
const ToolbarToggleItem = styled(Toolbar.ToggleItem, {
  base: {
    backgroundColor: 'white',
    marginLeft: "2px",
    '&:first-child': {
      marginLeft: "0px"
    },
    '&[data-state=on]': {
      backgroundColor: "{colors.violet.400}",
      color: "{colors.violet.950}"
    },
    ...itemStyles
  }
});
const ToolbarSeparator = styled(Toolbar.Separator, {
  base: {
    width: "1px",
    backgroundColor: "{colors.mauve.500}",
    margin: '0 10px'
  }
});
const ToolbarLink = styled(Toolbar.Link, {
  base: {
    backgroundColor: 'transparent',
    color: "{colors.mauve.950}",
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    ...itemStyles
  }
});
const ToolbarButton = styled(Toolbar.Button, {
  base: {
    paddingLeft: "10px",
    paddingRight: "10px",
    color: 'white',
    backgroundColor: "{colors.violet.800}",
    ...itemStyles
  }
});
export default ToolbarDemo;