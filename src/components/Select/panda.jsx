import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
export const SelectDemo = () => <Select.Root>
    <SelectTrigger aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <Select.Group>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <SelectSeparator />

          <Select.Group>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Select.Group>

          <SelectSeparator />

          <Select.Group>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Select.Group>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>;
const SelectTrigger = styled(Select.SelectTrigger, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 15px',
    fontSize: "13px",
    lineHeight: 1,
    height: "35px",
    gap: "5px",
    backgroundColor: 'white',
    color: "{colors.violet.950}",
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.mauve.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    },
    '&[data-placeholder]': {
      color: "{colors.violet.800}"
    }
  }
});
const SelectIcon = styled(Select.SelectIcon, {
  base: {
    color: "{colors.violet.950}"
  }
});
const SelectContent = styled(Select.Content, {
  base: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: "6px",
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
  }
});
const SelectViewport = styled(Select.Viewport, {
  base: {
    padding: "5px"
  }
});
const SelectItem = React.forwardRef(({
  children,
  ...props
}, forwardedRef) => {
  return <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>;
});
const StyledItem = styled(Select.Item, {
  base: {
    fontSize: "13px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    borderRadius: "3px",
    display: 'flex',
    alignItems: 'center',
    height: "25px",
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',
    '&[data-disabled]': {
      color: "{colors.mauve.700}",
      pointerEvents: 'none'
    },
    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: "{colors.violet.800}",
      color: "{colors.violet.50}"
    }
  }
});
const SelectLabel = styled(Select.Label, {
  base: {
    padding: '0 25px',
    fontSize: "12px",
    lineHeight: '25px',
    color: "{colors.mauve.950}"
  }
});
const SelectSeparator = styled(Select.Separator, {
  base: {
    height: "1px",
    backgroundColor: "{colors.violet.500}",
    margin: "5px"
  }
});
const StyledItemIndicator = styled(Select.ItemIndicator, {
  base: {
    position: 'absolute',
    left: "0px",
    width: "25px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const scrollButtonStyles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "25px",
    backgroundColor: 'white',
    color: "{colors.violet.950}",
    cursor: 'default'
  }
};
const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);
const SelectScrollDownButton = styled(Select.ScrollDownButton, scrollButtonStyles);
export default SelectDemo;