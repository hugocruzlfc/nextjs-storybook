import { Badge, Meta, StoryObj } from "./global.config";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
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
