import React from "react"
import ButtonComponent from "./Button"

import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Button",
  component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ButtonComponent {...args}>Hello World</ButtonComponent>
)

export const Variants = () => (
  <ButtonComponent color="primary">Welcome</ButtonComponent>
)

export const Playground = Template.bind({})
Playground.args = {
  color: "primary"
}
