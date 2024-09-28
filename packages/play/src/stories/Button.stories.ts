import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3'
import { fn, within, userEvent, expect } from '@storybook/test'
import { DButton, DButtonGroup } from 'dawn-ui-vue3'

type Story = StoryObj<typeof DButton> & { argTypes?: ArgTypes }

const meta: Meta<typeof DButton> = {
  title: 'Button',
  component: DButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', ''],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    autofocus: {
      control: { type: 'boolean' },
    },
    useThrottle: {
      control: { type: 'boolean' },
    },
    throttleDuration: {
      control: { type: 'number' },
    },
  },
}

const container = (val: string) => `<div style="margin:5px">${val}</div>`

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    content: 'Button',
  },
  render: (args) => ({
    components: { DButton },
    setup() {
      return { args }
    },
    template: container(`
      <d-button v-bind="args">{{ args.content }}</d-button>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })
    expect(args.onClick).toHaveBeenCalled()
  },
}

export const Circle: Story = {
  args: {
    icon: 'search',
  },
  render: (args) => ({
    components: { DButton },
    setup() {
      return { args }
    },
    template: container(`
      <d-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })

    expect(args.onClick).toHaveBeenCalled()
  },
}

Circle.parameters = {}

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    groupSize: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', ''],
    },
    groupDisabled: {
      control: 'boolean',
    },
    content1: {
      control: { type: 'text' },
      defaultValue: 'Button1',
    },
    content2: {
      control: { type: 'text' },
      defaultValue: 'Button2',
    },
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2',
  },
  render: (args) => ({
    components: { DButton, DButtonGroup },
    setup() {
      return { args }
    },
    template: container(`
       <d-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <d-button v-bind="args">{{args.content1}}</d-button>
         <d-button v-bind="args">{{args.content2}}</d-button>
       </d-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'))
    })
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'))
    })
    expect(args.onClick).toHaveBeenCalled()
  },
}

export default meta
