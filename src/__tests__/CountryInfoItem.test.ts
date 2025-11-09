import { mount } from '@vue/test-utils'
import CountryInfoItem from '@/components/CountryInfoItem.vue'
import { describe, expect, it } from 'vitest'

describe('CountryInfoItem.vue', () => {
  it('renderiza correctamente el label y el valor', () => {
    const wrapper = mount(CountryInfoItem, {
      props: {
        label: 'Capital',
        value: 'Bogotá'
      }
    })

    expect(wrapper.text()).toContain('Capital')
    expect(wrapper.text()).toContain('Bogotá')
  })
})