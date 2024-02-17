import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');
  return <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton aria-label="Customise options">
          <HamburgerMenuIcon />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenu.Sub>
            <DropdownMenuSubTrigger>
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownMenuSubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenuItem>
                  Save Page As… <RightSlot>⌘+S</RightSlot>
                </DropdownMenuItem>
                <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                <DropdownMenuItem>Name Window…</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>;
};
const slideUpAndFade = "slideUpAndFade";
const slideRightAndFade = "slideRightAndFade";
const slideDownAndFade = "slideDownAndFade";
const slideLeftAndFade = "slideLeftAndFade";
const contentStyles = {
  base: {
    minWidth: "220px",
    backgroundColor: 'white',
    borderRadius: "6px",
    padding: "5px",
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
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
    }
  }
};
const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
const DropdownMenuSubContent = styled(DropdownMenu.SubContent, contentStyles);
const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
  base: {
    fill: 'white'
  }
});
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
const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);
const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, itemStyles);
const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
  base: {
    '&[data-state="open"]': {
      backgroundColor: "{colors.violet.300}",
      color: "{colors.violet.950}"
    },
    ...itemStyles
  }
});
const DropdownMenuLabel = styled(DropdownMenu.Label, {
  base: {
    paddingLeft: "25px",
    fontSize: "12px",
    lineHeight: '25px',
    color: "{colors.mauve.950}"
  }
});
const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  base: {
    height: "1px",
    backgroundColor: "{colors.violet.500}",
    margin: "5px"
  }
});
const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
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
export default DropdownMenuDemo;