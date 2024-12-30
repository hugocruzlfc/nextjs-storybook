import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultVariant: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
export const GhostVariant: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};
export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const DefaultSize: Story = {
  args: {
    size: "default",
    children: "Default",
  },
};

export const IconSize: Story = {
  args: {
    size: "icon",
    children: "Icon",
  },
};

export const SmallSize: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const SmSize: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};
