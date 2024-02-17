import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Label from '@radix-ui/react-label';
const LabelDemo = () => <Flex className={css({
  padding: '0 20px',
  flexWrap: 'wrap',
  gap: "15px",
  alignItems: 'center'
})}>
    <LabelRoot htmlFor="firstName">First name</LabelRoot>
    <Input type="text" id="firstName" defaultValue="Pedro Duarte" />
  </Flex>;
const LabelRoot = styled(Label.Root, {
  base: {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: '35px',
    color: 'white'
  }
});
const Input = styled('input', {
  base: {
    width: "200px",
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 10px',
    height: "35px",
    fontSize: "15px",
    lineHeight: 1,
    color: 'white',
    backgroundColor: "{colors.blackA.100}",
    boxShadow: `0 0 0 1px ${"{colors.blackA.500}"}`,
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    },
    '&::selection': {
      backgroundColor: "{colors.blackA.500}",
      color: 'white'
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
export default LabelDemo;