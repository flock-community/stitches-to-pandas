import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
const CheckboxDemo = () => <form>
    <Flex className={css({
    alignItems: 'center'
  })}>
      <CheckboxRoot defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label className={css({
      paddingLeft: "15px"
    })} htmlFor="c1">
        Accept terms and conditions.
      </Label>
    </Flex>
  </form>;
const CheckboxRoot = styled(Checkbox.Root, {
  base: {
    backgroundColor: 'white',
    width: "25px",
    height: "25px",
    borderRadius: "4px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.violet.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const CheckboxIndicator = styled(Checkbox.Indicator, {
  base: {
    color: "{colors.violet.950}"
  }
});
const Label = styled('label', {
  base: {
    color: 'white',
    fontSize: "15px",
    lineHeight: 1
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
export default CheckboxDemo;