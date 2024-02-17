# StitchesCss -> PandaCss

Babel plugin to convert StitchesCss to PandaCss.

- **prepare**: Prepare PandaCss `npm run prepare`
- **scripts:transpile**: Run Babel  `npm run scripts:transpile`
- **scripts:generate**: Generate Storybook `npm run scripts:generate`
- **storybook**: Run storybook  `npm run storybook`

The [plugin](src%2Fbabel%2Fplugin.ts) does the following transformations:

- Add styled-system import
  ```js
  import { styled } from "../../../styled-system/jsx";
  import { css } from '../../../styled-system/css'
  ```
- Add base wrapper
  ```js
    const Comp = styled("div", {
      padding: "15px 20px"
    });
  
  // ---
  
  const Comp = styled("div", {
        base: {
            padding: "15px 20px"
        }
    });
  
  ```
- Int to pixel notation
  ```js
  base: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 35,
    color: 'white'
  }
  
  // ---
  
  base: {
    fontSize: "15px",
    fontWeight: "500px",
    lineHeight: '35px',
    color: 'white'
  }
  ```
- Replace css attribute to className
  ```js
  <Flex css={{ alignItems: 'center' }}>
  
  // ---
  
  <Flex className={css({alignItems: 'center'})}>
  ```