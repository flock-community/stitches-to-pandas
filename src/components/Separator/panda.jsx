import { styled } from "../../styled-system/jsx";
import { css } from '../../styled-system/css';
import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import { violet } from '@radix-ui/colors';
const SeparatorDemo = () => <Box className={css({
  width: '100%',
  maxWidth: 300,
  margin: '0 15px'
})}>
    <Text className={css({
    fontWeight: 500
  })}>Radix Primitives</Text>
    <Text>An open-source UI component library.</Text>
    <SeparatorRoot className={css({
    margin: '15px 0'
  })} />
    <Flex className={css({
    height: 20,
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
    backgroundColor: violet.violet6,
    '&[data-orientation=horizontal]': {
      height: 1,
      width: '100%'
    },
    '&[data-orientation=vertical]': {
      height: '100%',
      width: 1
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
    fontSize: 15,
    lineHeight: '20px'
  }
});
export default SeparatorDemo;