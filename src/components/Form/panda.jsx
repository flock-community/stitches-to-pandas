import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import { blackA, violet, mauve } from '@radix-ui/colors';
const FormDemo = () => <FormRoot>
    <FormField name="email">
      <Flex className={css({
      alignItems: 'baseline',
      justifyContent: 'space-between'
    })}>
        <FormLabel>Email</FormLabel>
        <FormMessage match="valueMissing">Please enter your email</FormMessage>
        <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
      </Flex>
      <Form.Control asChild>
        <Input type="email" required />
      </Form.Control>
    </FormField>
    <FormField name="question">
      <Flex className={css({
      alignItems: 'baseline',
      justifyContent: 'space-between'
    })}>
        <FormLabel>Question</FormLabel>
        <FormMessage match="valueMissing">Please enter a question</FormMessage>
      </Flex>
      <Form.Control asChild>
        <Textarea required />
      </Form.Control>
    </FormField>
    <Form.Submit asChild>
      <Button className={css({
      marginTop: 10
    })}>Post question</Button>
    </Form.Submit>
  </FormRoot>;
const FormRoot = styled(Form.Root, {
  base: {
    width: 260
  }
});
const FormField = styled(Form.Field, {
  base: {
    display: 'grid',
    marginBottom: 10
  }
});
const FormLabel = styled(Form.Label, {
  base: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '35px',
    color: 'white'
  }
});
const FormMessage = styled(Form.Message, {
  base: {
    fontSize: 13,
    color: 'white',
    opacity: 0.8
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const inputStyles = {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  fontSize: 15,
  color: 'white',
  backgroundColor: blackA.blackA2,
  boxShadow: `0 0 0 1px ${blackA.blackA6}`,
  '&:hover': {
    boxShadow: `0 0 0 1px black`
  },
  '&:focus': {
    boxShadow: `0 0 0 2px black`
  },
  '&::selection': {
    backgroundColor: blackA.blackA6,
    color: 'white'
  }
};
const Input = styled('input', {
  base: {
    height: 35,
    lineHeight: 1,
    padding: '0 10px'
  }
});
const Textarea = styled('textarea', {
  base: {
    resize: 'none',
    padding: 10
  }
});
const Button = styled('button', {
  base: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    width: '100%',
    backgroundColor: 'white',
    color: violet.violet11,
    boxShadow: `0 2px 10px ${blackA.blackA4}`,
    '&:hover': {
      backgroundColor: mauve.mauve3
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
export default FormDemo;