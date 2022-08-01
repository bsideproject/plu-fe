let count = 0;

export const testRequest = () => {
  if (typeof window === 'undefined') {
    return 'hello, world s' + count++;
  }
  return 'hello, world c' + count++;
};
