const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => new Promise((resolve, reject) => { resolve(); reject(); }));
mockAxios.post = jest.fn(() => new Promise((resolve, reject) => { resolve(); reject(); }));
mockAxios.put = jest.fn(() => new Promise((resolve, reject) => { resolve(); reject(); }));
mockAxios.interceptors.request.use = jest.fn((callback) => { callback(); });

export default mockAxios;
