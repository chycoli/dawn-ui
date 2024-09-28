import type { Meta, StoryObj } from '@storybook/vue3'
import { DCollapse, DCollapseItem } from 'dawn-ui-vue3'
// import 'dawn-ui/dist/theme/Collapse.css'

type Story = StoryObj<typeof DCollapse>

const meta: Meta<typeof DCollapse> = {
  title: 'Example/Collapse',
  component: DCollapse,
  subcomponents: { DCollapseItem },
  tags: ['autodocs'],
}

export const Default: Story = {
  render: (args: any) => ({
    components: {
      DCollapse,
      DCollapseItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <d-collapse v-bind="args">
      <d-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </d-collapse-item>
      <d-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </d-collapse-item>
      <d-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </d-collapse-item>
    </d-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a'],
  },
}

export default meta
