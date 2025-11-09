import { mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'
import { describe, it, expect } from 'vitest'

describe('SearchInput.vue', () => {
  it('renderiza correctamente el placeholder', () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: '',
        placeholder: 'Buscar país...'
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('Buscar país...')
  })

  it('emite el evento update:modelValue cuando el usuario escribe', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        modelValue: ''
      }
    })

    const input = wrapper.find('input')
    await input.setValue('Colombia')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue']![0]).toEqual(['Colombia'])
  })
})
