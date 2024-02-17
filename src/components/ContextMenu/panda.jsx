import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
const ContextMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');
  return <ContextMenu.Root>
      <ContextMenuTrigger>Right click here.</ContextMenuTrigger>
      <ContextMenu.Portal>
        <ContextMenuContent sideOffset={5} align="end">
          <ContextMenuItem>
            Back <RightSlot>⌘+[</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward <RightSlot>⌘+]</RightSlot>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload <RightSlot>⌘+R</RightSlot>
          </ContextMenuItem>
          <ContextMenu.Sub>
            <ContextMenuSubTrigger>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </ContextMenuSubTrigger>
            <ContextMenu.Portal>
              <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
                <ContextMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                <ContextMenuItem>Name Window…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenuSeparator />

          <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <ContextMenuItemIndicator>
              <CheckIcon />
            </ContextMenuItemIndicator>
            Show Full URLs
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenuRadioItem value="pedro">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              <ContextMenuItemIndicator>
                <DotFilledIcon />
              </ContextMenuItemIndicator>
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenuContent>
      </ContextMenu.Portal>
    </ContextMenu.Root>;
};
const ContextMenuTrigger = styled(ContextMenu.Trigger, {
  base: {
    display: 'block',
    border: `2px white dashed`,
    color: 'white',
    borderRadius: "4px",
    fontSize: "15px",
    userSelect: 'none',
    padding: '45px 0',
    width: "300px",
    textAlign: 'center'
  }
});
const contentStyles = {
  base: {
    minWidth: "220px",
    backgroundColor: 'white',
    borderRadius: "6px",
    overflow: 'hidden',
    padding: "5px",
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
  }
};
const ContextMenuContent = styled(ContextMenu.Content, contentStyles);
const ContextMenuSubContent = styled(ContextMenu.SubContent, contentStyles);
const itemStyles = {
  base: {
    fontSize: "13px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    borderRadius: "3px",
    display: 'flex',
    alignItems: 'center',
    height: "25px",
    padding: '0 5px',
    position: 'relative',
    paddingLeft: "25px",
    userSelect: 'none',
    outline: 'none',
    '&[data-disabled]': {
      color: "{colors.mauve.700}",
      pointerEvents: 'none'
    },
    '&[data-highlighted]': {
      backgroundColor: "{colors.violet.800}",
      color: "{colors.violet.50}"
    }
  }
};
const ContextMenuItem = styled(ContextMenu.Item, itemStyles);
const ContextMenuCheckboxItem = styled(ContextMenu.CheckboxItem, itemStyles);
const ContextMenuRadioItem = styled(ContextMenu.RadioItem, itemStyles);
const ContextMenuSubTrigger = styled(ContextMenu.SubTrigger, {
  base: {
    '&[data-state="open"]': {
      backgroundColor: "{colors.violet.300}",
      color: "{colors.violet.950}"
    },
    ...itemStyles
  }
});
const ContextMenuLabel = styled(ContextMenu.Label, {
  base: {
    paddingLeft: "25px",
    fontSize: "12px",
    lineHeight: '25px',
    color: "{colors.mauve.950}"
  }
});
const ContextMenuSeparator = styled(ContextMenu.Separator, {
  base: {
    height: "1px",
    backgroundColor: "{colors.violet.500}",
    margin: "5px"
  }
});
const ContextMenuItemIndicator = styled(ContextMenu.ItemIndicator, {
  base: {
    position: 'absolute',
    left: "0px",
    width: "25px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const RightSlot = styled('div', {
  base: {
    marginLeft: 'auto',
    paddingLeft: "20px",
    color: "{colors.mauve.950}",
    '[data-highlighted] > &': {
      color: 'white'
    },
    '[data-disabled] &': {
      color: "{colors.mauve.700}"
    }
  }
});
export default ContextMenuDemo;