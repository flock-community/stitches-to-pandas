import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
const DialogDemo = () => <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>Edit profile</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </Fieldset>
        <Flex className={css({
        marginTop: "25px",
        justifyContent: 'flex-end'
      })}>
          <Dialog.Close asChild>
            <Button variant="green">Save changes</Button>
          </Dialog.Close>
        </Flex>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>;
const overlayShow = "overlayShow";
const contentShow = "contentShow";
const DialogOverlay = styled(Dialog.Overlay, {
  base: {
    backgroundColor: "{colors.blackA.500}",
    position: 'fixed',
    inset: "0px",
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});
const DialogContent = styled(Dialog.Content, {
  base: {
    backgroundColor: 'white',
    borderRadius: "6px",
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: "25px",
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': {
      outline: 'none'
    }
  }
});
const DialogTitle = styled(Dialog.Title, {
  base: {
    margin: "0px",
    fontWeight: "500px",
    color: "{colors.mauve.950}",
    fontSize: "17px"
  }
});
const DialogDescription = styled(Dialog.Description, {
  base: {
    margin: '10px 0 20px',
    color: "{colors.mauve.950}",
    fontSize: "15px",
    lineHeight: 1.5
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Button = styled('button', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 15px',
    fontSize: "15px",
    lineHeight: 1,
    fontWeight: "500px",
    height: "35px"
  },
  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: "{colors.violet.950}",
        boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
        '&:hover': {
          backgroundColor: "{colors.mauve.200}"
        },
        '&:focus': {
          boxShadow: `0 0 0 2px black`
        }
      },
      green: {
        backgroundColor: "{colors.green.300}",
        color: "{colors.green.950}",
        '&:hover': {
          backgroundColor: "{colors.green.400}"
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${"{colors.green.600}"}`
        }
      }
    }
  },
  defaultVariants: {
    variant: 'violet'
  }
});
const IconButton = styled('button', {
  base: {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: "25px",
    width: "25px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "{colors.violet.950}",
    position: 'absolute',
    top: "10px",
    right: "10px",
    '&:hover': {
      backgroundColor: "{colors.violet.300}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.600}"}`
    }
  }
});
const Fieldset = styled('fieldset', {
  base: {
    display: 'flex',
    gap: "20px",
    alignItems: 'center',
    marginBottom: "15px"
  }
});
const Label = styled('label', {
  base: {
    fontSize: "15px",
    color: "{colors.violet.950}",
    width: "90px",
    textAlign: 'right'
  }
});
const Input = styled('input', {
  base: {
    width: '100%',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 10px',
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    boxShadow: `0 0 0 1px ${"{colors.violet.600}"}`,
    height: "35px",
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.700}"}`
    }
  }
});
export default DialogDemo;