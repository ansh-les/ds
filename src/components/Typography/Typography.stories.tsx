import React from "react"
import TypographyComponent from "./Typography"

import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Typography",
  component: TypographyComponent
} as ComponentMeta<typeof TypographyComponent>

const Template: ComponentStory<typeof TypographyComponent> = args => (
  <TypographyComponent {...args}>
    The quick brown fox jumps over the lazy little dog
  </TypographyComponent>
)

export const Variants = () => (
  <div
    style={{
      display: "flex",
      gap: 25,
      flexDirection: "column"
    }}
  >
    <TypographyComponent variant="h1">Typography H1</TypographyComponent>
    <TypographyComponent variant="h2">Typography H2</TypographyComponent>
    <TypographyComponent variant="h3">Typography H3</TypographyComponent>
    <TypographyComponent variant="h4">Typography H4</TypographyComponent>
    <TypographyComponent variant="h5">Typography H5</TypographyComponent>
    <TypographyComponent variant="h6">Typography H6</TypographyComponent>
    <TypographyComponent variant="body1">Typography body1</TypographyComponent>
    <TypographyComponent variant="body2">Typography body2</TypographyComponent>
  </div>
)

export const Playground = Template.bind({})
Playground.args = {
  variant: "h1"
}
