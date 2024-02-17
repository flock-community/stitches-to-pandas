import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
const AvatarDemo = () => <Flex className={css({
  gap: "20px"
})}>
    <AvatarRoot>
      <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot>
      <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" alt="Pedro Duarte" />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot>
      <AvatarFallback>PD</AvatarFallback>
    </AvatarRoot>
  </Flex>;
const AvatarRoot = styled(AvatarPrimitive.Root, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: "45px",
    height: "45px",
    borderRadius: '100%',
    backgroundColor: "{colors.blackA.50}"
  }
});
const AvatarImage = styled(AvatarPrimitive.Image, {
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
  }
});
const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: "{colors.violet.950}",
    fontSize: "15px",
    lineHeight: 1,
    fontWeight: "500px"
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
export default AvatarDemo;