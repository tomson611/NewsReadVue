import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'
import Navbar from '@/components/SiteNavigation.vue'

// Define routes for testing
const routes = [
  { path: '/', name: 'home', component: { template: '<a>NewsRead</a>' } },
  { path: '/read', name: 'read', component: { template: '<span>Read</span>' } },
  { path: '/search', name: 'search', component: { template: '<span>Search</span>' } },
  { path: '/sources', name: 'sources', component: { template: '<span>Sources</span>' } }
]

/// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('Navbar.vue', () => {
  beforeEach(async () => {
    await router.push('/')
    await router.isReady()
  })

  it('applies the active class to the active link', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router]
      }
    })

    // Ensure the DOM is updated
    await wrapper.vm.$nextTick()

    // Check active link on initial load
    let activeLink = wrapper.find('.router-link-exact-active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('NewsRead')

    // Navigate to /search
    await router.push('/read')
    await router.isReady()

    // Ensure the DOM is updated
    await wrapper.vm.$nextTick()

    // Check active link after navigation
    activeLink = wrapper.find('.navbar-nav .nav-link span.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Read')

    // Navigate to /search
    await router.push('/search')
    await router.isReady()

    // Ensure the DOM is updated
    await wrapper.vm.$nextTick()

    // Check active link after navigation
    activeLink = wrapper.find('.navbar-nav .nav-link span.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Search')

    // Navigate to /sources
    await router.push('/sources')
    await router.isReady()

    // Ensure the DOM is updated
    await wrapper.vm.$nextTick()

    // Check active link after navigation
    activeLink = wrapper.find('.navbar-nav .nav-link span.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('Sources')
  })
})
