import { mock } from '@thisisagile/easy-test';
import { Wait, retry, Retry } from '../../src';

describe('Retry', () => {
  beforeEach(() => {
    Wait.wait = mock.resolve();
  });

  test('resolves', async () => {
    const cb = mock.resolve('fulfilled');
    const r = retry(cb);
    await expect(r).resolves.toBe('fulfilled');
  });

  test('normal retry', async () => {
    const cb = jest.fn().mockRejectedValueOnce(new Error('rejected')).mockResolvedValueOnce('fulfilled');
    const r = retry(cb, 3, 100);
    await expect(r).resolves.toBe('fulfilled');
    expect(cb).toHaveBeenCalledTimes(2);
    expect(Wait.wait).toHaveBeenCalledTimes(1);
  });

  test('retry with two fails', async () => {
    const cb = jest.fn().mockRejectedValueOnce(new Error('rejected')).mockRejectedValueOnce(new Error('rejected')).mockResolvedValueOnce('fulfilled');

    await expect(retry(cb)).resolves.toBe('fulfilled');
    expect(cb).toHaveBeenCalledTimes(3);
    expect(Wait.wait).toHaveBeenCalledTimes(2);
  });

  test('retry 2 times with two fails', async () => {
    const cb = jest.fn().mockRejectedValueOnce(new Error('rejected')).mockRejectedValueOnce(new Error('rejected')).mockResolvedValueOnce('fulfilled');

    await expect(retry(cb, 2)).rejects.toThrow(new Error('rejected'));
    expect(cb).toHaveBeenCalledTimes(2);
    expect(Wait.wait).toHaveBeenCalledTimes(2);
  });

  test('exceed max retry', async () => {
    const cb = jest
      .fn()
      .mockRejectedValueOnce(new Error('rejected 1'))
      .mockRejectedValueOnce(new Error('rejected 2'))
      .mockRejectedValueOnce(new Error('rejected 3'))
      .mockRejectedValueOnce(new Error('rejected 4'));

    await expect(retry(cb, 3)).rejects.toThrow(new Error('rejected 3'));
    expect(cb).toHaveBeenCalledTimes(3);
    expect(Wait.wait).toHaveBeenCalledTimes(3);
  });
});
