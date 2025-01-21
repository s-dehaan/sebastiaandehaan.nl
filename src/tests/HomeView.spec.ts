import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  it('renders developer', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.find('h1').text()).toBe('Developer')
  })
})
