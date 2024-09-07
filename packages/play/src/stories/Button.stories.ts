import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test"
import { DButton } from "dawn-ui";

type Story = StoryObj<typeof DButton> & { argTypes: ArgTypes };

const meta: Meta<typeof DButton> = {
  title: "Button",
  component: DButton,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"]
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    autofocus: {
      control: { type: "boolean" },
    },
    useThrottle: {
      control: { type: "boolean" },
    },
    throttleDuration: {
      control: { type: "number" },
    },
  },
}

const container = (val: string) => `<div style="margin:5px">${val}</div>`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    content: "Button",
  },
  render: (args) => ({
    components: { DButton },
    setup() {
      return { args };
    },
    template: container(`
      <d-button v-bind="args">{{ args.content }}</d-button>
    `)
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    })
    expect(args.onClick).toHaveBeenCalled()
  },
}

export default meta;