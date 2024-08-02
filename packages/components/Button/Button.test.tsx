import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  describe('Styles', () => {
    it('should render button with default style', () => {
      const wrapper = mount(Button);
      expect(wrapper.classes()).toContain('d-button');
    });

    it('should render button with custom class', () => {
      const wrapper = mount(Button, {
        props: { type: 'primary' }
      });
      expect(wrapper.classes()).toContain('d-button--primary');
    });

    it('should render button with size', () => {
      const wrapper = mount(Button, {
        props: { size: 'large' }
      });
      expect(wrapper.classes()).toContain('d-button--large');
    });

    it('should render button with round style', () => {
      const wrapper = mount(Button, {
        props: { round: true }
      });
      expect(wrapper.classes()).toContain('is-round');
    });

    it('should render button with circle style', () => {
      const wrapper = mount(Button, {
        props: { circle: true }
      });
      expect(wrapper.classes()).toContain('is-circle');
    });
  });

  // describe('States', () => {
  //   it('should render button in disabled state', () => {
  //     const wrapper = mount(Button, {
  //       props: { disabled: true }
  //     });
  //     expect(wrapper.classes()).toContain('d-button-disabled');
  //   });

  //   it('should render button in loading state', () => {
  //     const wrapper = mount(Button, {
  //       props: { loading: true }
  //     });
  //     expect(wrapper.classes()).toContain('d-button-loading');
  //   });

  //   it('should render button with loading icon', () => {
  //     const wrapper = mount(Button, {
  //       props: { loading: true, loadingIcon: 'icon-loading' }
  //     });
  //     expect(wrapper.find('.icon-loading').exists()).toBe(true);
  //   });
  // });

  // describe('Events', () => {
  //   it('should trigger click event', async () => {
  //     const clickSpy = vi.fn();
  //     const wrapper = mount(Button, {
  //       listeners: { click: clickSpy }
  //     });

  //     await wrapper.trigger('click');
  //     expect(clickSpy).toHaveBeenCalledOnce();
  //   });

  //   it('should not trigger click event when disabled', async () => {
  //     const clickSpy = vi.fn();
  //     const wrapper = mount(Button, {
  //       props: { disabled: true },
  //       listeners: { click: clickSpy }
  //     });

  //     await wrapper.trigger('click');
  //     expect(clickSpy).not.toHaveBeenCalled();
  //   });

  //   it('should not trigger click event when loading', async () => {
  //     const clickSpy = vi.fn();
  //     const wrapper = mount(Button, {
  //       props: { loading: true },
  //       listeners: { click: clickSpy }
  //     });

  //     await wrapper.trigger('click');
  //     expect(clickSpy).not.toHaveBeenCalled();
  //   });
  // });

  // describe('Slots', () => {
  //   it('should render default slot content', () => {
  //     const wrapper = mount(Button, {
  //       slots: {
  //         default: 'Click Me'
  //       }
  //     });
  //     expect(wrapper.text()).toContain('Click Me');
  //   });

  //   it('should render loading slot content', () => {
  //     const wrapper = mount(Button, {
  //       props: { loading: true },
  //       slots: {
  //         loading: 'Loading...'
  //       }
  //     });
  //     expect(wrapper.text()).toContain('Loading...');
  //   });
  // });

  // describe('Accessibility', () => {
  //   it('should have aria-disabled attribute when disabled', () => {
  //     const wrapper = mount(Button, {
  //       props: { disabled: true }
  //     });
  //     expect(wrapper.attributes('aria-disabled')).toBe('true');
  //   });

  //   it('should have role attribute set to button', () => {
  //     const wrapper = mount(Button);
  //     expect(wrapper.attributes('role')).toBe('button');
  //   });
  // });
});