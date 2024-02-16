import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { violet, blackA } from '@radix-ui/colors';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <Flex className={css({
      alignItems: 'center',
      justifyContent: 'space-between'
    })}>
        <Text className={css({
        color: 'white'
      })}>@peduarte starred 3 repositories</Text>
        <Collapsible.Trigger asChild>
          <IconButton>{open ? <Cross2Icon /> : <RowSpacingIcon />}</IconButton>
        </Collapsible.Trigger>
      </Flex>

      <Repository>
        <Text>@radix-ui/primitives</Text>
      </Repository>

      <Collapsible.Content>
        <Repository>
          <Text>@radix-ui/colors</Text>
        </Repository>
        <Repository>
          <Text>@stitches/react</Text>
        </Repository>
      </Collapsible.Content>
    </CollapsibleRoot>;
};
const CollapsibleRoot = styled(Collapsible.Root, {
  base: {
    width: 300
  }
});
const IconButton = styled('button', {
  base: {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    '&[data-state="closed"]': {
      backgroundColor: 'white'
    },
    '&[data-state="open"]': {
      backgroundColor: violet.violet3
    },
    '&:hover': {
      backgroundColor: violet.violet3
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Text = styled('span', {
  base: {
    color: violet.violet11,
    fontSize: 15,
    lineHeight: '25px'
  }
});
const Repository = styled('div', {
  base: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: '10px 0',
    padding: 10,
    boxShadow: `0 2px 10px ${blackA.blackA4}`
  }
});
export default CollapsibleDemo;