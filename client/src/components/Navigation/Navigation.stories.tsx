import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";


const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "top"
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {

  }
}
