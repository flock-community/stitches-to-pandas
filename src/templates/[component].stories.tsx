/**
 * Do not edit directly! File has been generated.
 */
import type { Meta, StoryObj } from "@storybook/react";

import Stitches from "./stitches.jsx";
import Panda from "./panda.jsx";

const meta = {
  title: "Components/[Component]",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const PandaTemplate: Story = {
  render: () => {
    return <Panda />;
  },
};

export const StitchesTemplate: Story = {};
export const React: Story = { ...PandaTemplate };
