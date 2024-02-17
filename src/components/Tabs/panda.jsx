import { styled } from "../../../styled-system/jsx";
import { css } from '../../../styled-system/css';
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
const TabsDemo = () => <TabsRoot defaultValue="tab1">
    <TabsList aria-label="Manage your account">
      <TabsTrigger value="tab1">Account</TabsTrigger>
      <TabsTrigger value="tab2">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <Text>Make changes to your account here. Click save when you're done.</Text>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
      <Flex className={css({
      marginTop: "20px",
      justifyContent: 'flex-end'
    })}>
        <Button variant="green">Save changes</Button>
      </Flex>
    </TabsContent>
    <TabsContent value="tab2">
      <Text>Change your password here. After saving, you'll be logged out.</Text>
      <Fieldset>
        <Label htmlFor="currentPassword">Current password</Label>
        <Input id="currentPassword" type="password" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" type="password" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input id="confirmPassword" type="password" />
      </Fieldset>
      <Flex className={css({
      marginTop: "20px",
      justifyContent: 'flex-end'
    })}>
        <Button variant="green">Change password</Button>
      </Flex>
    </TabsContent>
  </TabsRoot>;
const TabsRoot = styled(Tabs.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: "300px",
    boxShadow: `0 2px 10px ${"{colors.blackA.100}"}`
  }
});
const TabsList = styled(Tabs.List, {
  base: {
    flexShrink: "0px",
    display: 'flex',
    borderBottom: `1px solid ${"{colors.mauve.500}"}`
  }
});
const TabsTrigger = styled(Tabs.Trigger, {
  base: {
    fontFamily: 'inherit',
    backgroundColor: 'white',
    padding: '0 20px',
    height: "45px",
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.mauve.950}",
    userSelect: 'none',
    '&:first-child': {
      borderTopLeftRadius: "6px"
    },
    '&:last-child': {
      borderTopRightRadius: "6px"
    },
    '&:hover': {
      color: "{colors.violet.950}"
    },
    '&[data-state="active"]': {
      color: "{colors.violet.950}",
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor'
    },
    '&:focus': {
      position: 'relative',
      boxShadow: `0 0 0 2px black`
    }
  }
});
const TabsContent = styled(Tabs.Content, {
  base: {
    flexGrow: 1,
    padding: "20px",
    backgroundColor: 'white',
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
    outline: 'none',
    '&:focus': {
      boxShadow: `0 0 0 2px black`
    }
  }
});
const Flex = styled('div', {
  base: {
    display: 'flex'
  }
});
const Text = styled('p', {
  base: {
    marginTop: "0px",
    marginBottom: "20px",
    color: "{colors.mauve.950}",
    fontSize: "15px",
    lineHeight: 1.5
  }
});
const Fieldset = styled('fieldset', {
  base: {
    marginBottom: "15px",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});
const Label = styled('label', {
  base: {
    fontSize: "13px",
    lineHeight: 1,
    marginBottom: "10px",
    color: "{colors.violet.950}",
    display: 'block'
  }
});
const Input = styled('input', {
  base: {
    flex: '1 0 auto',
    borderRadius: "4px",
    padding: '0 10px',
    fontSize: "15px",
    lineHeight: 1,
    color: "{colors.violet.950}",
    boxShadow: `0 0 0 1px ${"{colors.violet.600}"}`,
    height: "35px",
    '&:focus': {
      boxShadow: `0 0 0 2px ${"{colors.violet.700}"}`
    }
  }
});
const Button = styled('button', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "4px",
    padding: '0 15px',
    fontSize: "15px",
    lineHeight: 1,
    fontWeight: "500px",
    height: "35px"
  },
  variants: {
    variant: {
      green: {
        backgroundColor: "{colors.green.300}",
        color: "{colors.green.950}",
        '&:hover': {
          backgroundColor: "{colors.green.400}"
        },
        '&:focus': {
          boxShadow: `0 0 0 2px ${"{colors.green.600}"}`
        }
      }
    }
  },
  defaultVariants: {
    variant: 'green'
  }
});
export default TabsDemo;