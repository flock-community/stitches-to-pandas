import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
const AlertDialogDemo = () => <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button>Delete account</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
        <Flex className={css({
        justifyContent: 'flex-end'
      })}>
          <AlertDialog.Cancel asChild>
            <Button variant="mauve" className={css({
            marginRight: "25px"
          })}>
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button variant="red">Yes, delete account</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialogContent>
    </AlertDialog.Portal>
  </AlertDialog.Root>;
const overlayShow = "overlayShow";
const contentShow = "contentShow";
const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  base: {
    backgroundColor: "{colors.blackA.500}",
    position: 'fixed',
    inset: "0px",
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});
const AlertDialogContent = styled(AlertDialog.Content, {
  base: {
    backgroundColor: 'white',
    borderRadius: "6px",
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    padding: "25px",
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': {
      outline: 'none'
    }
  }
});
const AlertDialogTitle = styled(AlertDialog.Title, {
  base: {
    margin: "0px",
    color: "{colors.mauve.950}",
    fontSize: "17px",
    fontWeight: "500px"
  }
});
const AlertDialogDescription = styled(AlertDialog.Description, {
  base: {
    marginBottom: "20px",
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
      red: {
        backgroundColor: "{colors.red.300}",
        color: "{colors.red.950}",
        '&:hover': {
          backgroundColor: "{colors.red.400}"
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${"{colors.red.600}"}`
        }
      },
      mauve: {
        backgroundColor: "{colors.mauve.300}",
        color: "{colors.mauve.950}",
        '&:hover': {
          backgroundColor: "{colors.mauve.400}"
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${"{colors.mauve.600}"}`
        }
      }
    }
  },
  defaultVariants: {
    variant: 'violet'
  }
});
export default AlertDialogDemo;