import VueTestUtils from '@vue/test-utils';
import config from './src/config';

VueTestUtils.config.mocks.$config = config;
