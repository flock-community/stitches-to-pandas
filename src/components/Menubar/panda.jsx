import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];
const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
  return <MenubarRoot>
      <Menubar.Menu>
        <MenubarTrigger>File</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem>
              New Tab <RightSlot>⌘ T</RightSlot>
            </MenubarItem>
            <MenubarItem>
              New Window <RightSlot>⌘ N</RightSlot>
            </MenubarItem>
            <MenubarItem disabled> New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <Menubar.Sub>
              <MenubarSubTrigger>
                Share
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </MenubarSubTrigger>
              <Menubar.Portal>
                <MenubarSubContent alignOffset={-5}>
                  <MenubarItem>Email Link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <MenubarSeparator />
            <MenubarItem>
              Print… <RightSlot>⌘ P</RightSlot>
            </MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
            <MenubarItem>
              Undo <RightSlot>⌘ Z</RightSlot>
            </MenubarItem>
            <MenubarItem>
              Redo <RightSlot>⇧ ⌘ Z</RightSlot>
            </MenubarItem>
            <MenubarSeparator />
            <Menubar.Sub>
              <MenubarSubTrigger>
                Find
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </MenubarSubTrigger>

              <Menubar.Portal>
                <MenubarSubContent alignOffset={-5}>
                  <MenubarItem>Search the web…</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find…</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>View</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
            {CHECK_ITEMS.map(item => <MenubarCheckboxItem key={item} checked={checkedSelection.includes(item)} variant="inset" onCheckedChange={() => setCheckedSelection(current => current.includes(item) ? current.filter(el => el !== item) : current.concat(item))}>
                <MenubarItemIndicator>
                  <CheckIcon />
                </MenubarItemIndicator>
                {item}
              </MenubarCheckboxItem>)}
            <MenubarSeparator />
            <MenubarItem variant="inset">
              Reload <RightSlot>⌘ R</RightSlot>
            </MenubarItem>
            <MenubarItem variant="inset" disabled>
              Force Reload <RightSlot>⇧ ⌘ R</RightSlot>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="inset">Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="inset">Hide Sidebar</MenubarItem>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <Menubar.Portal>
          <MenubarContent align="start" sideOffset={5} alignOffset={-14}>
            <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>
              {RADIO_ITEMS.map(item => <MenubarRadioItem key={item} value={item} variant="inset">
                  <MenubarItemIndicator>
                    <DotFilledIcon />
                  </MenubarItemIndicator>
                  {item}
                </MenubarRadioItem>)}
              <MenubarSeparator />
              <MenubarItem variant="inset">Edit…</MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="inset">Add Profile…</MenubarItem>
            </Menubar.RadioGroup>
          </MenubarContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </MenubarRoot>;
};
const MenubarRoot = styled(Menubar.Root, {
  base: {
    display: 'flex',
    backgroundColor: 'white',
    padding: "3px",
    borderRadius: "6px",
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`
  }
});
const MenubarTrigger = styled(Menubar.Trigger, {
  base: {
    padding: '8px 12px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: "500px",
    lineHeight: 1,
    borderRadius: "4px",
    fontSize: "13px",
    color: "{colors.violet.950}",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: "2px",
    '&[data-highlighted], &[data-state="open"]': {
      backgroundColor: "{colors.violet.300}"
    }
  }
});
const contentStyles = {
  base: {
    minWidth: "220px",
    backgroundColor: 'white',
    borderRadius: "6px",
    padding: "5px",
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity'
  }
};
const MenubarContent = styled(Menubar.Content, contentStyles);
const MenubarSubContent = styled(Menubar.SubContent, contentStyles);
const itemStyles = {
  base: {
    fontSize: "13px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    borderRadius: "4px",
    display: 'flex',
    alignItems: 'center',
    height: "25px",
    padding: '0 10px',
    position: 'relative',
    userSelect: 'none',
    '&[data-disabled]': {
      color: "{colors.mauve.700}",
      pointerEvents: 'none'
    },
    '&[data-highlighted]': {
      backgroundImage: `linear-gradient(135deg, ${"{colors.violet.800}"} 0%, ${"{colors.violet.900}"} 100%)`,
      color: "{colors.violet.50}"
    }
  },
  variants: {
    variant: {
      inset: {
        paddingLeft: "20px"
      }
    }
  }
};
const MenubarItem = styled(Menubar.Item, itemStyles);
const MenubarSubTrigger = styled(Menubar.SubTrigger, {
  base: {
    '&[data-state="open"]': {
      backgroundColor: "{colors.violet.300}",
      color: "{colors.violet.950}"
    },
    ...itemStyles
  }
});
const MenubarCheckboxItem = styled(Menubar.CheckboxItem, itemStyles);
const MenubarRadioItem = styled(Menubar.RadioItem, itemStyles);
const MenubarItemIndicator = styled(Menubar.ItemIndicator, {
  base: {
    position: 'absolute',
    left: "0px",
    width: "20px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const RightSlot = styled('div', {
  base: {
    marginLeft: 'auto',
    paddingLeft: "20px",
    color: "{colors.mauve.800}",
    '[data-highlighted] > &': {
      color: 'white'
    },
    '[data-disabled] &': {
      color: "{colors.mauve.700}"
    }
  }
});
const MenubarSeparator = styled(Menubar.Separator, {
  base: {
    height: "1px",
    backgroundColor: "{colors.violet.500}",
    margin: "5px"
  }
});
export default MenubarDemo;