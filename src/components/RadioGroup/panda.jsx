import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
const RadioGroupDemo = () => <form>
    <RadioGroupRoot defaultValue="default" aria-label="View density">
      <Flex className={css({
      alignItems: 'center'
    })}>
        <RadioGroupItem value="default" id="r1">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r1">Default</Label>
      </Flex>
      <Flex className={css({
      alignItems: 'center'
    })}>
        <RadioGroupItem value="comfortable" id="r2">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r2">Comfortable</Label>
      </Flex>
      <Flex className={css({
      alignItems: 'center'
    })}>
        <RadioGroupItem value="compact" id="r3">
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor="r3">Compact</Label>
      </Flex>
    </RadioGroupRoot>
  </form>;
const RadioGroupRoot = styled(RadioGroup.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: "10px"
  }
});
const RadioGroupItem = styled(RadioGroup.Item, {
  base: {
    backgroundColor: 'white',
    width: "25px",
    height: "25px",
    borderRadius: '100%',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      width: "11px",
      height: "11px",
      borderRadius: '50%',
      backgroundColor: "{colors.violet.950}"
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Label = styled('label', {
  base: {
    color: 'white',
    fontSize: "15px",
    lineHeight: 1,
    paddingLeft: "15px"
  }
});
export default RadioGroupDemo;