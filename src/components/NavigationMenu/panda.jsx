import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
const NavigationMenuDemo = () => {
  return <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Learn <CaretDown aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List>
              <li style={{
              gridRow: 'span 3'
            }}>
                <NavigationMenu.Link asChild>
                  <Callout href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <CalloutHeading>Radix Primitives</CalloutHeading>
                    <CalloutText>Unstyled, accessible components for React.</CalloutText>
                  </Callout>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Overview <CaretDown aria-hidden />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <List layout="two">
              <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/primitives/docs/guides/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/primitives/docs/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </List>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink href="https://github.com/radix-ui">Github</NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenuIndicator>
          <Arrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>;
};
const enterFromRight = "enterFromRight";
const enterFromLeft = "enterFromLeft";
const exitToRight = "exitToRight";
const exitToLeft = "exitToLeft";
const scaleIn = "scaleIn";
const scaleOut = "scaleOut";
const fadeIn = "fadeIn";
const fadeOut = "fadeOut";
const NavigationMenuRoot = styled(NavigationMenu.Root, {
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    zIndex: "1px"
  }
});
const NavigationMenuList = styled(NavigationMenu.List, {
  base: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: "4px",
    borderRadius: "6px",
    listStyle: 'none',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    margin: "0px"
  }
});
const itemStyles = {
  base: {
    padding: '8px 12px',
    outline: 'none',
    userSelect: 'none',
    fontWeight: "500px",
    lineHeight: 1,
    borderRadius: "4px",
    fontSize: "15px",
    color: "{colors.violet.950}",
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.600}"}`
    },
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    }
  }
};
const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: "2px",
    ...itemStyles
  }
});
const NavigationMenuLink = styled(NavigationMenu.Link, {
  base: {
    display: 'block',
    textDecoration: 'none',
    fontSize: "15px",
    lineHeight: 1,
    ...itemStyles
  }
});
const NavigationMenuContent = styled(NavigationMenu.Content, {
  base: {
    position: 'absolute',
    top: "0px",
    left: "0px",
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      width: 'auto'
    },
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': {
      animationName: enterFromLeft
    },
    '&[data-motion="from-end"]': {
      animationName: enterFromRight
    },
    '&[data-motion="to-start"]': {
      animationName: exitToLeft
    },
    '&[data-motion="to-end"]': {
      animationName: exitToRight
    }
  }
});
const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  base: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: "10px",
    top: '100%',
    overflow: 'hidden',
    zIndex: "1px",
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': {
      animation: `${fadeIn} 200ms ease`
    },
    '&[data-state="hidden"]': {
      animation: `${fadeOut} 200ms ease`
    }
  }
});
const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  base: {
    position: 'relative',
    transformOrigin: 'top center',
    marginTop: "10px",
    width: '100%',
    backgroundColor: 'white',
    borderRadius: "6px",
    overflow: 'hidden',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    height: 'var(--radix-navigation-menu-viewport-height)',
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': {
      animation: `${scaleIn} 200ms ease`
    },
    '&[data-state="closed"]': {
      animation: `${scaleOut} 200ms ease`
    },
    '@media only screen and (min-width: 600px)': {
      width: 'var(--radix-navigation-menu-viewport-width)'
    }
  }
});
const List = styled('ul', {
  base: {
    display: 'grid',
    padding: "22px",
    margin: "0px",
    columnGap: "10px",
    listStyle: 'none'
  },
  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: "500px",
          gridTemplateColumns: '.75fr 1fr'
        }
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: "600px",
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)'
        }
      }
    }
  },
  defaultVariants: {
    layout: 'one'
  }
});
const ListItem = React.forwardRef(({
  children,
  title,
  ...props
}, forwardedRef) => <li>
    <NavigationMenu.Link asChild>
      <ListItemLink {...props} ref={forwardedRef}>
        <ListItemHeading>{title}</ListItemHeading>
        <ListItemText>{children}</ListItemText>
      </ListItemLink>
    </NavigationMenu.Link>
  </li>);
const ListItemLink = styled('a', {
  base: {
    display: 'block',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    padding: "12px",
    borderRadius: "6px",
    fontSize: "15px",
    lineHeight: 1,
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.600}"}`
    },
    '&:hover': {
      backgroundColor: "{colors.mauve.200}"
    }
  }
});
const ListItemHeading = styled('div', {
  base: {
    fontWeight: "500px",
    lineHeight: 1.2,
    marginBottom: "5px",
    color: "{colors.violet.950}"
  }
});
const ListItemText = styled('p', {
  base: {
    color: "{colors.mauve.950}",
    lineHeight: 1.4,
    fontWeight: 'initial'
  }
});
const Callout = styled('a', {
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${"{colors.purple.800}"} 0%, ${"{colors.indigo.800}"} 100%);`,
    borderRadius: "6px",
    padding: "25px",
    textDecoration: 'none',
    outline: 'none',
    userSelect: 'none',
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.600}"}`
    }
  }
});
const CalloutHeading = styled('div', {
  base: {
    color: 'white',
    fontSize: "18px",
    fontWeight: "500px",
    lineHeight: 1.2,
    marginTop: "16px",
    marginBottom: "7px"
  }
});
const CalloutText = styled('p', {
  base: {
    color: "{colors.mauve.300}",
    fontSize: "14px",
    lineHeight: 1.3
  }
});
const ViewportPosition = styled('div', {
  base: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    top: '100%',
    left: "0px",
    perspective: '2000px'
  }
});
const CaretDown = styled(CaretDownIcon, {
  base: {
    position: 'relative',
    color: "{colors.violet.900}",
    top: "1px",
    transition: 'transform 250ms ease',
    '[data-state=open] &': {
      transform: 'rotate(-180deg)'
    }
  }
});
const Arrow = styled('div', {
  base: {
    position: 'relative',
    top: '70%',
    backgroundColor: 'white',
    width: "10px",
    height: "10px",
    transform: 'rotate(45deg)',
    borderTopLeftRadius: "2px"
  }
});
export default NavigationMenuDemo;