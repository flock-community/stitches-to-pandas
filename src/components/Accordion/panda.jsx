import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
const AccordionDemo = () => <AccordionRoot type="single" defaultValue="item-1" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>;
const AccordionRoot = styled(Accordion.Root, {
  base: {
    borderRadius: "6px",
    width: "300px",
    backgroundColor: "{colors.mauve.500}",
    boxShadow: `0 2px 10px ${"{colors.blackA.100}"}`
  }
});
const AccordionItem = styled(Accordion.Item, {
  base: {
    overflow: "hidden",
    marginTop: "1px",
    "&:first-child": {
      marginTop: "0px",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px"
    },
    "&:last-child": {
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px"
    },
    "&:focus-within": {
      position: "relative",
      zIndex: "1px",
      boxShadow: `0 0 0 2px ${"{colors.mauve.950}"}`
    }
  }
});
const AccordionTrigger = React.forwardRef(({
  children,
  ...props
}, forwardedRef) => <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>);
const AccordionContent = React.forwardRef(({
  children,
  ...props
}, forwardedRef) => <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>);
const StyledHeader = styled(Accordion.Header, {
  base: {
    display: "flex"
  }
});
const StyledTrigger = styled(Accordion.Trigger, {
  base: {
    fontFamily: "inherit",
    padding: "0 20px",
    height: "45px",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    boxShadow: `0 1px 0 ${"{colors.mauve.500}"}`,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "{colors.mauve.100}"
    }
  }
});
const StyledChevron = styled(ChevronDownIcon, {
  base: {
    color: "{colors.violet.900}",
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "[data-state=open] &": {
      transform: "rotate(180deg)"
    }
  }
});
const slideDown = "slideDown";
const slideUp = "slideUp";
const StyledContent = styled(Accordion.Content, {
  base: {
    overflow: "hidden",
    fontSize: "15px",
    color: "{colors.mauve.950}",
    backgroundColor: "{colors.mauve.100}",
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`
    }
  }
});
const StyledContentText = styled("div", {
  base: {
    padding: "15px 20px"
  }
});
export default AccordionDemo;