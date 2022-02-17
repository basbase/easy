import { toReq } from '../../src';
import { DevUri } from '../ref';

describe('Req', () => {
  const req = { params: { id: 42, name: 'Naoufal' }, query: { q: 43, language: 'TypeScript' }, body: {} };
  const params = { params: { id: 42, name: 'Naoufal' } };

  test('matches', () => {
    const r = toReq(req);
    expect(r.id).toBe(req.params.id);
    expect(r.q).toBe(req.query.q);
    expect(r.path.name).toBe(req.params.name);
    expect(r.query.language).toBe(req.query.language);
  });

  test('get', () => {
    const r = toReq(req);
    expect(r.get('name')).toBe(req.params.name);
    expect(r.get('language')).toBe(req.query.language);
    expect(r.get('shoesize')).toBeUndefined();
    expect(r.get(DevUri.language)).toBe(req.query.language);
  });

  test('toReq from full object', () => {
    const r = toReq(req);
    expect(r).toMatchObject({
      path: { id: 42, name: 'Naoufal' },
      id: 42,
      query: { q: 43, language: 'TypeScript' },
      q: 43,
      body: {},
    });
  });

  test('toReq from params', () => {
    const r = toReq(params);
    expect(r).toMatchObject({
      path: { id: 42, name: 'Naoufal' },
      id: 42,
      q: undefined,
      body: undefined,
    });
  });
});
