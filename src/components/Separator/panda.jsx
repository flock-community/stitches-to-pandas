import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Separator from '@radix-ui/react-separator';
const SeparatorDemo = () => <Box className={css({
  width: '100%',
  maxWidth: "300px",
  margin: '0 15px'
})}>
    <Text className={css({
    fontWeight: "500px"
  })}>Radix Primitives</Text>
    <Text>An open-source UI component library.</Text>
    <SeparatorRoot className={css({
    margin: '15px 0'
  })} />
    <Flex className={css({
    height: "20px",
    alignItems: 'center'
  })}>
      <Text>Blog</Text>
      <SeparatorRoot decorative orientation="vertical" className={css({
      margin: '0 15px'
    })} />
      <Text>Docs</Text>
      <SeparatorRoot decorative orientation="vertical" className={css({
      margin: '0 15px'
    })} />
      <Text>Source</Text>
    </Flex>
  </Box>;
const SeparatorRoot = styled(Separator.Root, {
  base: {
    backgroundColor: "{colors.violet.500}",
    '&[data-orientation=horizontal]': {
      height: "1px",
      width: '100%'
    },
    '&[data-orientation=vertical]': {
      height: '100%',
      width: "1px"
    }
  }
});
const Box = styled('div', {
  base: {}
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Text = styled('div', {
  base: {
    color: 'white',
    fontSize: "15px",
    lineHeight: '20px'
  }
});
export default SeparatorDemo;