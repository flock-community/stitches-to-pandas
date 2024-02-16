import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { violet, blackA } from '@radix-ui/colors';
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
    gap: 10
  }
});
const RadioGroupItem = styled(RadioGroup.Item, {
  base: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: '100%',
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    '&:hover': {
      backgroundColor: violet.violet3
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
      width: 11,
      height: 11,
      borderRadius: '50%',
      backgroundColor: violet.violet11
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
    fontSize: 15,
    lineHeight: 1,
    paddingLeft: 15
  }
});
export default RadioGroupDemo;