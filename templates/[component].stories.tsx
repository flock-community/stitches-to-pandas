/**
 * Do not edit directly! File has been generated.
 */
import type { Meta, StoryObj } from "@storybook/react";

import StitchesComponent from "./stitches.jsx";
import PandaComponent from "./panda.jsx";

const meta = {
  title: "Components/[Component]",
  component: StitchesComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StitchesComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const PandaTemplate: Story = {
  render: () => {
    return <PandaComponent />;
  },
};

export const Stitches: Story = {};
export const Panda: Story = { ...PandaTemplate };
