import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../App';

describe('App.vue', () => {
  let wrapper;
  let localVue;
  let store;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);

    store = {
      state: {
        posts: [],
      },
      actions: {
        getPosts: jest.fn(),
      },
      getters: {
        themeData: jest.fn(),
      },
    };
    wrapper = shallowMount(App, {
      localVue,
      store: new Vuex.Store(store),
    });
  });

  it('renders the component', () => {
    expect(wrapper.find('#app').exists()).toBe(true);
  });
});
