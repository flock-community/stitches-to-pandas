import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Form from '@radix-ui/react-form';
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
      marginTop: "10px"
    })}>Post question</Button>
    </Form.Submit>
  </FormRoot>;
const FormRoot = styled(Form.Root, {
  base: {
    width: "260px"
  }
});
const FormField = styled(Form.Field, {
  base: {
    display: 'grid',
    marginBottom: "10px"
  }
});
const FormLabel = styled(Form.Label, {
  base: {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: '35px',
    color: 'white'
  }
});
const FormMessage = styled(Form.Message, {
  base: {
    fontSize: "13px",
    color: 'white',
    opacity: "0.8px"
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const inputStyles = {
  base: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    fontSize: "15px",
    color: 'white',
    backgroundColor: "{colors.blackA.100}",
    boxShadow: `0 0 0 1px ${"{colors.blackA.500}"}`,
    '&:hover': {
      boxShadow: `0 0 0 1px black`
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    },
    '&::selection': {
      backgroundColor: "{colors.blackA.500}",
      color: 'white'
    }
  }
};
const Input = styled('input', {
  base: {
    height: "35px",
    lineHeight: 1,
    padding: '0 10px',
    ...inputStyles
  }
});
const Textarea = styled('textarea', {
  base: {
    resize: 'none',
    padding: "10px",
    ...inputStyles
  }
});
const Button = styled('button', {
  base: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 15px',
    fontSize: "15px",
    lineHeight: 1,
    fontWeight: "500px",
    height: "35px",
    width: '100%',
    backgroundColor: 'white',
    color: "{colors.violet.950}",
    boxShadow: `0 2px 10px ${"{colors.blackA.300}"}`,
    '&:hover': {
      backgroundColor: "{colors.mauve.200}"
    },
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
export default FormDemo;