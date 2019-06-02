export const mockGet = jest.fn();
export const mockPost = jest.fn();
export const mockPut = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    get: mockGet,
    post: mockPost,
    put: mockPut,
  };
});
export default mock;
