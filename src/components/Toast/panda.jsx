import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);
  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return <Toast.Provider swipeDirection="right">
      <Button onClick={() => {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        eventDateRef.current = oneWeekAway();
        setOpen(true);
      }, 100);
    }}>
        Add to calendar
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Scheduled: Catch up</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button size="small" variant="green">
            Undo
          </Button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>;
};
const VIEWPORT_PADDING = 25;
const ToastViewport = styled(Toast.Viewport, {
  base: {
    position: 'fixed',
    bottom: "0px",
    right: "0px",
    display: 'flex',
    flexDirection: 'column',
    padding: VIEWPORT_PADDING,
    gap: "10px",
    width: "390px",
    maxWidth: '100vw',
    margin: "0px",
    listStyle: 'none',
    zIndex: "2147483647px",
    outline: 'none'
  }
});
const hide = "hide";
const slideIn = "slideIn";
const swipeOut = "swipeOut";
const ToastRoot = styled(Toast.Root, {
  base: {
    backgroundColor: 'white',
    borderRadius: "6px",
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: "15px",
    display: 'grid',
    gridTemplateAreas: '"title action" "description action"',
    gridTemplateColumns: 'auto max-content',
    columnGap: "15px",
    alignItems: 'center',
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  }
});
const ToastTitle = styled(Toast.Title, {
  base: {
    gridArea: 'title',
    marginBottom: "5px",
    fontWeight: "500px",
    color: "{colors.slate.950}",
    fontSize: "15px"
  }
});
const ToastDescription = styled(Toast.Description, {
  base: {
    gridArea: 'description',
    margin: "0px",
    color: "{colors.slate.950}",
    fontSize: "13px",
    lineHeight: 1.3
  }
});
const ToastAction = styled(Toast.Action, {
  base: {
    gridArea: 'action'
  }
});
const Button = styled('button', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    fontWeight: "500px"
  },
  variants: {
    size: {
      small: {
        fontSize: "12px",
        padding: '0 10px',
        lineHeight: '25px',
        height: "25px"
      },
      large: {
        fontSize: "15px",
        padding: '0 15px',
        lineHeight: '35px',
        height: "35px"
      }
    },
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
        backgroundColor: "{colors.green.100}",
        color: "{colors.green.950}",
        boxShadow: `inset 0 0 0 1px ${"{colors.green.600}"}`,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${"{colors.green.700}"}`
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${"{colors.green.700}"}`
        }
      }
    }
  },
  defaultVariants: {
    size: 'large',
    variant: 'violet'
  }
});
function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}
function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date);
}
export default ToastDemo;